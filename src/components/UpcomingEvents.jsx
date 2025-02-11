import React from "react";
import bg from "../assets/bg.png"; // Use your existing background image

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-cover bg-center">
      <div className="backdrop-blur-lg">
        <div className="w-11/12 lg:w-4/5 mx-auto text-center">
          <h2 className="text-3xl font-Cinzel font-semibold mb-1">
            --- Upcoming Event ---{" "}
          </h2>
          <p className="font-semibold text-sm mb-8">
            Join us for an exciting exhibition showcasing the rich history of
            artifacts.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className=" p-5 rounded-lg shadow-lg mx-auto max-w-md">
              <img
                className="mb-4 rounded-lg h-[250px] w-full object-cover"
                src="https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/exhibitions/size3/DIG_E_2016_Ancient_Egyptian_Art_01_PS11.jpg"
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Ancient Artifacts Exhibition
              </h3>
              <p className="mt-2">Date: September 15, 2023</p>
              <p className="mt-2">
                Explore a curated collection of ancient artifacts from various
                cultures, including pottery, tools, and ceremonial items. This
                exhibition aims to provide insights into the daily lives and
                traditions of ancient civilizations.
              </p>
              <p className="mt-2">
                Location: Artifacts Museum, 123 History Lane, Cityville
              </p>
              <p className="mt-2">Time: 10:00 AM - 5:00 PM</p>
            </div>
            <div className=" p-5 rounded-lg shadow-lg mx-auto max-w-md">
              <img
                className="mb-4 rounded-lg h-[250px] w-full object-cover"
                src="https://img.freepik.com/premium-photo/evening-art-showcase-modern-gallery_1324785-130638.jpg"
                alt=""
              />
              <h3 className="text-xl font-semibold">
                Modern Artifacts Showcase
              </h3>
              <p className="mt-2">Date: October 20, 2023</p>
              <p className="mt-2">
                Discover a fascinating display of modern artifacts that
                highlight contemporary culture, technology, and innovation. This
                showcase aims to engage visitors with the evolution of everyday
                items and their impact on our lives.
              </p>
              <p className="mt-2">
                Location: Artifacts Museum, 123 History Lane, Cityville
              </p>
              <p className="mt-2">Time: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
