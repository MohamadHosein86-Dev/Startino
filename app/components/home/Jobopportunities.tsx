import { jobs } from "@/app/data/jobs";
import Image from "next/image";
import React from "react";

export default function Jobopportunities() {
  return (
    <section className=" container ">
      <div className="flex items-center justify-center gap-4 mb-6">
        <hr className="border border-stone-300 w-32"></hr>
        <h1 className="text-xl font-semibold text-gray-800">فرصت‌های شغلی</h1>
        <hr className="border border-stone-300 w-32"></hr>
      </div>
      <div className=" flex gap-4 w-full ">
        {jobs.map((res) => (
          <div className=" w-160 rounded-xl h-80 md:h-80 bg-[#F6F6F6] shadow-md overflow-hidden p-4 flex flex-col max-w-sm mx-auto" key={res.id}>
            <Image width={200} height={200} src={res.image} alt={res.company} />
            <h2 className=" font-semibold  ">{res.title}</h2>
            <p className=""> company :{res.company} </p>
          </div>
        ))}
      </div>
    </section>
  );
}
