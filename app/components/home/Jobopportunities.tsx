"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { jobs } from "@/app/data/jobs";
import Image from "next/image";
import React from "react";

export default function Jobopportunities() {
  return (
    <section className=" max-w-[80rem] mx-auto  mb-40 ">
      <div className="flex items-center justify-center gap-4 mb-6">
        <hr className="border border-stone-300 w-32"></hr>
        <h1 className="text-xl font-semibold text-gray-800">فرصت‌های شغلی</h1>
        <hr className="border border-stone-300 w-32"></hr>
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // نمایش 1 اسلاید در موبایل
            spaceBetween: 10 // فاصله کمتر بین اسلایدها
          },
          768: {
            slidesPerView: 2 // نمایش 2 اسلاید در تبلت
          },
          1024: {
            slidesPerView: 3 // نمایش 3 اسلاید در دسکتاپ
          },
          1280: {
            slidesPerView: 5 // نمایش 4 اسلاید در صفحات بزرگتر
          }
        }}
      >
        <div className=" flex gap-40 ">
          {jobs.map((res) => (
            <SwiperSlide key={res.id}>
              <article itemScope itemType="https://schema.org/JobPosting" className=" w-50 mr-10 rounded-xl h-80 md:h-80 bg-[#F6F6F6] shadow-md overflow-hidden p-4 flex flex-col max-w-sm mx-auto">
                <Image width={200} height={200} src={res.image} alt={res.company} />
                <h2 dir="ltr" className=" font-bold mb-1  ">
                  {res.title}
                </h2>
                <p dir="ltr" className=" text-sm ">
                  {" "}
                  شرکت :{res.company}{" "}
                </p>
                <div className=" flex justify-end items-center gap-1 ">
                  {res.stack.map((res, index) => (
                    <div dir="" className=" text-sm mt-2 bg-primery text-white p-2  rounded-md " key={index}>
                      {res}
                    </div>
                  ))}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}
