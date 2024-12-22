import React from "react";
import world from "../assets/lottie/world.json";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../components/Header/Nav";
import goo from "../assets/google.png";
import { useNavigate } from "react-router-dom";
export default function AddArtifact() {
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
        <div className="fixed overflow-y-scroll w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <Nav />
          <form className="shadow-2xl mt-0 border-2 p-4 rounded-lg w-11/12 md:max-w-xl mx-auto text-white">
            <label className="text-2xl font-Roboto font-bold">
              Add Artifact
            </label>
            <div className="relative z-0 w-full mt-2 mb-5 group">
              <input
                type="text"
                name="artifactName"
                id="artifactName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                disabled
                defaultValue={"eftakhar"}
              />
              <label
                htmlFor="artifactName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Names
              </label>
            </div>
            <div className="relative z-0 w-full mt-2 mb-5 group">
              <input
                type="email"
                name="artifactName"
                id="artifactName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                disabled
                defaultValue={"eftt0432@gmail.com"}
              />
              <label
                htmlFor="artifactName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Email
              </label>
            </div>

            <div className="relative z-0 w-full mt-2 mb-5 group">
              <input
                type="text"
                name="artifactName"
                id="artifactName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="artifactName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Artifact Name
              </label>
            </div>
            <div className="relative z-0 w-full mt-2 mb-5 group">
              <input
                type="url"
                name="photo"
                id="photo"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="photo"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Artifact Image (Valid URL)
              </label>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your country
              </label>
              <select
                id="countries"
                className="bg-[#112D31]/50 backdrop-blur-sm  border text-white border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              >
                <option value="Tools">Tools</option>
                <option value="Weapons">Weapons</option>
                <option value="Documents">Documents</option>
                <option value="Writingss">Writings</option>
              </select>
            </div>

            <div className="relative z-0 w-full mt-2 mb-5 group">
              <textarea
                id="message"
                rows="4"
                className="block p-3 w-full text-sm text-white rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                placeholder="Historical Context..."
              ></textarea>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 relative">
                <label className="text-sm">Created At</label>
                <input
                  name="cdate"
                  id="default-datepicker"
                  type="date"
                  className=" border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-transparent"
                  placeholder="Select date"
                />
              </div>
              <div className="relative flex-1">
                <label className="text-sm">Discovered At</label>
                <input
                  name="cdate"
                  id="default-datepicker"
                  type="date"
                  className=" border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-transparent"
                  placeholder="Select date"
                />
              </div>
            </div>

            <div className="relative z-0 w-full mt-2 mb-5 group">
              <input
                type="text"
                name="discoveredBy"
                id="discoveredBy"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="discoveredBy"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Discovered By
              </label>
            </div>
            <div className="relative z-0 w-full mt-2 mb-5 group">
              <input
                type="text"
                name="presentLocation"
                id="presentLocation"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="presentLocation"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Present Location
              </label>
            </div>

            <button
              type="submit"
              className="w-full justify-center  active:scale-95 hover:bg-[#153438] flex items-center gap-2 text-lg mt-5 border-2 px-6 py-1 rounded-xl"
            >
              Add Artifact{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
