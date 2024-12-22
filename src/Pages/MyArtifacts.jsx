import React from "react";
import world from "../assets/lottie/world.json";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../components/Header/Nav";
import goo from "../assets/google.png";
import { useNavigate } from "react-router-dom";
export default function MyArtifacts() {
  const navigate = useNavigate();
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
                  <tr className="bg-transparent border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
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
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
