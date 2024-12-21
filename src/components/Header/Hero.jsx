import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import h1 from "../../assets/1.png";
import h2 from "../../assets/2.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <section className="relative z-20">
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className=" ">
              <div className="h-[600px] justify-between flex gap-4 items-center lg:w-4/5 mx-auto w-11/12 ">
                <div className="w-[51%] text-white">
                  <h1 className="text-5xl font-Cinzel">
                    Timeless Treasures That Tell Their Story
                  </h1>
                  <p className="text-sm font-Roboto mt-3">
                    ChronoCraft is your gateway to exploring the wonders of
                    ancient artifacts and historical marvels. Discover the
                    stories behind timeless treasures that shaped human history.
                  </p>
                  <button className="active:scale-95 hover:bg-[#153438] flex items-center gap-2 text-lg mt-5 border-2 px-6 py-1 rounded-xl">
                    Explore All Artifacts{" "}
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
                </div>
                <div className="relative flex w-[45%]">
                  <img
                    className="rounded-xl shadow-2xl scale-75"
                    src={h1}
                    alt=""
                  />
                  <img
                    className=" absolute bottom-0 -right-10 w-[300px] h-[300px] shadow-2xl rounded-2xl"
                    src={h2}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="h-[600px]  justify-between flex gap-4 items-center lg:w-4/5 mx-auto w-11/12 ">
                <div className="w-11/12 mx-auto lg:w-4/5 text-white">
                  <h1 className="text-5xl font-Cinzel text-center">
                    Preserve history by sharing your artifacts and exploring the
                    stories
                  </h1>
                  <p className="text-sm font-Roboto mt-3 text-center">
                    Preserve history by sharing your artifacts" invites users to
                    contribute their historical items to the platform, creating
                    a digital archive. "Exploring the stories behind timeless
                    treasures" encourages users to learn about the significance
                    and history of these artifacts, deepening their
                    understanding and connection to the past.
                  </p>
                  <button className="mx-auto active:scale-95 hover:bg-[#153438] flex items-center gap-2 text-lg mt-5 border-2 px-6 py-1 rounded-xl">
                    Add Artifacts{" "}
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
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="h-[600px]">asdfas</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
