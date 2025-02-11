import React from "react";
import bg from "../assets/bg.png";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

export default function Faqs() {
  return (
    <>
      <Helmet>
        <title>FAQs</title>
      </Helmet>
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="fixed h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="fixed overflow-y-auto w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <div className="w-11/12 lg:w-4/5 mx-auto mt-20">
            <h1 className="text-3xl font-Cinzel text-white text-center">
              Frequently Asked Questions
            </h1>
            <div className="mt-10 space-y-6">
              <div className="bg-white/10 p-5 rounded-lg">
                <h2 className="text-xl font-semibold text-white">
                  What is ChronoCraft?
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  ChronoCraft is an application designed to showcase and provide
                  detailed information about various artifacts.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <h2 className="text-xl font-semibold text-white">
                  How can I add my own artifacts?
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  You can add your own artifacts by navigating to the "Add
                  Artifact" page and filling out the form with the required
                  details.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <h2 className="text-xl font-semibold text-white">
                  How do I like an artifact?
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  To like an artifact, simply click the like button on the
                  artifact's detail page. You need to be logged in to like
                  artifacts.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <h2 className="text-xl font-semibold text-white">
                  Can I edit or delete my artifacts?
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  Yes, you can edit or delete your artifacts from the "My
                  Artifacts" page. Just select the artifact you want to modify.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <h2 className="text-xl font-semibold text-white">
                  Is there a limit to the number of artifacts I can add?
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  No, there is no limit to the number of artifacts you can add.
                  Feel free to showcase as many artifacts as you like!
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
