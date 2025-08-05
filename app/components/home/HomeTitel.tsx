import React from "react";
import LoginBtn from "../ui/LoginBtn";

export default function HomeTitel() {
  return (
    <section className="container flex items-center flex-col mt-12 ">
      <h1 className=" text-4xl lg:text-6xl  font-medium mb-6 ">با سرچ کمتر نتیجه بهتر بگیر</h1>
      <p className=" font-normal ">کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی</p>
      <div className=" hidden  md:grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-6 ">
        <LoginBtn titel="درباره کانسپتو" login={true} />
        <LoginBtn titel="رایگان شروع کن!" />
      </div>
      <div className="  w-full md:hidden grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-6 ">
        <LoginBtn titel="درباره کانسپتو" login={true} />
        <LoginBtn titel="رایگان شروع کن!" />
      </div>
    </section>
  );
}
