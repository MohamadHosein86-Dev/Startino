import React from "react";

export default function HomeHeroSec() {
  return (
    <section className="relative mt-20 max-w-[90rem] flex items-center justify-center mx-auto overflow-hidden">
      <div className=" absolute right-20 z-100 mb-20  ">
        <img src="/home/Imagemain2.webp" alt="" />
      </div>
      <div className=" flex justify-center mx-auto z-10  md:block">
        <img src="/home/Imagemain3.webp" alt="" />
      </div>
      <div className=" absolute left-0  z-10 mt-82 ">
        <img src="/home/Imagemain1.webp" alt="" />
      </div>
    </section>
  );
}
