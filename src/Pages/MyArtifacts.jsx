import React, { useContext, useEffect, useState } from "react";
import world from "../assets/lottie/world.json";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../components/Header/Nav";

import { data, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useSecureAxios";
import axios from "axios";
export default function MyArtifacts() {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  console.log(user);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["myartifacts"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/artifacts/myartifacts?email=${user?.email}`
      );

      return res.data;
    },
  });

  console.log(data, isLoading, isError);
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <>
      <section
        style={{ backgroundImage: ` url(${bg})` }}
        className="fixed  h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className=" w-[600px] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie animationData={world} loop={true}></Lottie>
        </div>
        <div className="fixed overflow-y-auto  w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <Nav />
          {data.length === 0 ? (
            <h1>You are not added anything</h1>
          ) : (
            <section className="w-11/12 mx-auto lg:w-4/5">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white border-b-2 uppercase bg-transparent ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Artifacr Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Artifacr Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Present Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Likes
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr key={"i" + i} className="bg-transparent border-b ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.artifactName}
                        </th>
                        <td className="px-6 py-4">{item.artifactsType}</td>
                        <td className="px-6 py-4">{item.presentLocation}</td>
                        <td className="px-6 py-4">${item.like}</td>
                        <td className="px-6 py-4">
                          <span className="cursor-pointer mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                          </span>
                          |
                          <span className="cursor-pointer ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Delete
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
