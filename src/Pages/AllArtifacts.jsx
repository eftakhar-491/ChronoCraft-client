import React, { useContext, useEffect, useState } from "react";
import world from "../assets/lottie/world.json";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../components/Header/Nav";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useSecureAxios";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Firebase/AuthProvider";

export default function AllArtifacts() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["artifacts"],
    queryFn: async () => await axiosSecure.get(`/artifacts`),
  });

  // like function
  const { mutate, data: addlikedataAll } = useMutation({
    mutationKey: ["artifactsAllLikes"],

    mutationFn: async (x) =>
      await axiosSecure.post(`/artifacts/likes?email=${user?.email}`, x),
    onSuccess: () => {
      queryClient.invalidateQueries(["artifacts", "artifactsLikes2"]);
    },
  });
  console.log(addlikedataAll);
  function handelAllLike(clickedId) {
    if (user) {
      mutate({ id: clickedId, email: user?.email });
    } else {
      navigate("/login");
    }
  }
  const { data: Alllikes } = useQuery({
    queryKey: ["artifactsLikes2"],
    enabled: user?.email ? true : false,
    queryFn: async () =>
      await axiosSecure.get(`/artifacts/likes/${user?.email}`),
  });
  const likesAllDataArr = Alllikes?.data?.map((x) => x.id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${bg})` }}
        className="fixed  h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className=" w-[600px] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie animationData={world} loop={true}></Lottie>
        </div>
        <div className="fixed overflow-y-auto w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <Nav />

          <section className="">
            <h1 className="text-4xl text-center font-Cinzel text-white mt-1">
              All Artifacts
            </h1>
            <div className="text-white w-11/12 mx-auto lg:w-4/5 grid grid-cols-1 gap-2 justify-items-center md:grid-cols-2 mt-10">
              {data?.data?.map((data, i) => (
                <div
                  key={i}
                  className="border w-[300px] xl:w-fit flex xl:flex-row flex-col items-center gap-4 p-3 rounded-xl shadow-lg"
                >
                  <img
                    className="xl:w-[260px] w-full h-[250px] rounded-xl shadow-2xl"
                    src={data.photo}
                    alt=""
                  />
                  <div>
                    <h1 className="text-3xl font-Rancho">
                      {data.artifactName}
                    </h1>
                    <p className="text-sm font-Roboto ">
                      {data.artifactContext}
                    </p>
                    <div className="mt-3">
                      <div className="flex items-center gap-1">
                        <span
                          onClick={() => handelAllLike(data._id)}
                          className=" cursor-pointer"
                        >
                          {likesAllDataArr?.includes(data._id) ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6"
                            >
                              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                              />
                            </svg>
                          )}
                        </span>
                        {data.like} Likes
                      </div>
                      <button
                        onClick={() => {
                          navigate(`/artifacts-details/${data._id}`);
                        }}
                        className="active:scale-95 hover:border-black hover:bg-slate-200 flex items-center gap-2 text-lg mt-2 border-2 px-6 py-1 rounded-xl"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
