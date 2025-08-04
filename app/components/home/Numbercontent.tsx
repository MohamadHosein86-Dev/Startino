"use client";

import CountUp from "./CountUp";

export default function Numbercontent({
  data
}: {
  data: {
    investors: number;
    activeCompanies: number;
    investmentAmount: number;
  };
}) {
  return (
    <div className=" container my-10 flex flex-col items-center gap-4 ">
      <div className=" w-full relative  text-primery sm:w-160  px-4 py-3 shadow-sm ">
        <div className=" bg-primery absolute right-2 size-2 rounded-full "></div>
        <h2 className=" text-lg sm:text-3xl font-semibold text-center ">سرمایه‌گذاری و فعالیت شرکت‌ها</h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 ">
        <div className=" flex flex-col items-center  ">
          <CountUp end={data.investors} duration={1500} start={0} bgColor={"#FFECB3"} />
          <h3 className=" font-semibold text-lg ">سرمایه‌گذاران</h3>
        </div>
        <div className=" flex flex-col items-center  ">
          <CountUp end={data.activeCompanies} duration={1500} start={0} bgColor={"#E3F2FD"} />
          <h3 className=" font-semibold text-lg ">سرمایه‌گذاران</h3>
        </div>
        <div className=" flex flex-col items-center  ">
          <CountUp end={data.investmentAmount} duration={1500} start={0} bgColor={"#E8F5E9"} />
          <h3 className=" font-semibold text-lg ">سرمایه‌گذاران</h3>
        </div>
      </div>
    </div>
  );
}
