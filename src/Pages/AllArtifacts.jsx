import React from "react";
import world from "../assets/lottie/world.json";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../components/Header/Nav";

export default function AllArtifacts() {
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${bg})` }}
        className="fixed  h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className=" w-[600px] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie animationData={world} loop={true}></Lottie>
        </div>
        <div className="fixed overflow-y-scroll w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <Nav />

          <section className=" top-0">
            <div className="text-white w-11/12 mx-auto lg:w-4/5 grid grid-cols-1 gap-2 justify-items-center md:grid-cols-2 mt-10">
              <div className="border w-[300px] xl:w-fit flex xl:flex-row flex-col items-center gap-4 p-3 rounded-xl shadow-lg">
                <img
                  className="xl:w-[260px] w-full h-[250px] rounded-xl shadow-2xl"
                  src="https://www.spurlock.illinois.edu/img/blog/2017/115-anonymous-african-artifacts/hero_1920.jpg"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-Rancho">Artifact Name</h1>
                  <p className="text-sm font-Roboto ">
                    Artifact Description Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ea, dolorum.
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      100 Likes
                    </div>
                    <button className="active:scale-95 hover:border-black hover:bg-slate-200 flex items-center gap-2 text-lg mt-2 border-2 px-6 py-1 rounded-xl">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-[300px] xl:w-fit flex xl:flex-row flex-col items-center gap-4 p-3 rounded-xl shadow-lg">
                <img
                  className="xl:w-[260px] w-full h-[250px] rounded-xl shadow-2xl"
                  src="https://www.spurlock.illinois.edu/img/blog/2017/115-anonymous-african-artifacts/hero_1920.jpg"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-Rancho">Artifact Name</h1>
                  <p className="text-sm font-Roboto ">
                    Artifact Description Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ea, dolorum.
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      100 Likes
                    </div>
                    <button className="active:scale-95 hover:border-black hover:bg-slate-200 flex items-center gap-2 text-lg mt-2 border-2 px-6 py-1 rounded-xl">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-[300px] xl:w-fit flex xl:flex-row flex-col items-center gap-4 p-3 rounded-xl shadow-lg">
                <img
                  className="xl:w-[260px] w-full h-[250px] rounded-xl shadow-2xl"
                  src="https://www.spurlock.illinois.edu/img/blog/2017/115-anonymous-african-artifacts/hero_1920.jpg"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-Rancho">Artifact Name</h1>
                  <p className="text-sm font-Roboto ">
                    Artifact Description Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ea, dolorum.
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      100 Likes
                    </div>
                    <button className="active:scale-95 hover:border-black hover:bg-slate-200 flex items-center gap-2 text-lg mt-2 border-2 px-6 py-1 rounded-xl">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-[300px] xl:w-fit flex xl:flex-row flex-col items-center gap-4 p-3 rounded-xl shadow-lg">
                <img
                  className="xl:w-[260px] w-full h-[250px] rounded-xl shadow-2xl"
                  src="https://www.spurlock.illinois.edu/img/blog/2017/115-anonymous-african-artifacts/hero_1920.jpg"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-Rancho">Artifact Name</h1>
                  <p className="text-sm font-Roboto ">
                    Artifact Description Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ea, dolorum.
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      100 Likes
                    </div>
                    <button className="active:scale-95 hover:border-black hover:bg-slate-200 flex items-center gap-2 text-lg mt-2 border-2 px-6 py-1 rounded-xl">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-[300px] xl:w-fit flex xl:flex-row flex-col items-center gap-4 p-3 rounded-xl shadow-lg">
                <img
                  className="xl:w-[260px] w-full h-[250px] rounded-xl shadow-2xl"
                  src="https://www.spurlock.illinois.edu/img/blog/2017/115-anonymous-african-artifacts/hero_1920.jpg"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-Rancho">Artifact Name</h1>
                  <p className="text-sm font-Roboto ">
                    Artifact Description Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ea, dolorum.
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      100 Likes
                    </div>
                    <button className="active:scale-95 hover:border-black hover:bg-slate-200 flex items-center gap-2 text-lg mt-2 border-2 px-6 py-1 rounded-xl">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
