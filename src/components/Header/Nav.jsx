import React from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/lottie/profile.json";
import Lottie from "lottie-react";
export default function Nav() {
  return (
    <>
      <nav className="font-Cinzel text-white">
        <div className="w-4/5 mx-auto flex justify-between items-center py-4">
          <h1 className="font-bold text-lg lg:text-2xl">
            Chrono
            <span className="text-xl lg:text-3xl">Craft</span>
          </h1>
          <ul className="font-semibold flex space-x-5 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-extrabold" : "text-gray-500"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/artifacts"
              className={({ isActive }) =>
                isActive ? "underline font-extrabold" : "text-gray-400"
              }
            >
              <li>All Artifacts</li>
            </NavLink>
            <NavLink
              to="/add-artifact"
              className={({ isActive }) =>
                isActive ? "underline font-extrabold" : "text-gray-400"
              }
            >
              <li>Add Artifact</li>
            </NavLink>
          </ul>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <button className="font-semibold border-2 px-3 py-1 rounded-lg ">
                Login
              </button>
            </Link>
            <div className="relative w-10 h-10 rounded-full">
              <div className="hover:border-2 active:scale-95 cursor-pointer w-full h-full bg-white rounded-full flex items-center justify-center">
                <Lottie animationData={profile} loop={true} />
              </div>
              {/* <img src="" alt="" /> */}
              <div className="absolute top-10 right-0 w-44 text-white shadow-md rounded-lg p-3 border-2 border-gray-200 ">
                <ul className="flex flex-col space-y-2">
                  <NavLink
                    to="/my-artifacts"
                    className={({ isActive }) =>
                      isActive ? "underline font-extrabold" : ""
                    }
                  >
                    <li className=" flex-shrink-0">My Artifacts</li>
                  </NavLink>
                  <NavLink
                    to="/my-artifacts"
                    className={({ isActive }) =>
                      isActive ? "underline font-extrabold" : ""
                    }
                  >
                    <li className=" flex-shrink-0">Liked Artifacts</li>
                  </NavLink>
                  <button className="font-semibold border-2 px-3 py-1 rounded-lg ">
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
