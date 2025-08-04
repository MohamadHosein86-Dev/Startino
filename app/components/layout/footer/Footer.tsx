import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className=" relative ">
      <div
        className="absolute flex  left-1/2 top-0 transform -translate-x-1/2 w-full pb-20  bg-no-repeat bg-cover z-10"
        style={{
          backgroundImage: "url('/home/cart/Tooltip.png')"
        }}
      >
        <div className=" container  mt-30  ">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 text-white items-center justify-between ">
            <div className=" basis-[35%] ml-10 ">
              <h2 className=" mb-5 font-semibold text-xl ">اطلاعات تماس</h2>
              <p className=" mb-4 ">تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو :آدرس</p>
              <p className=" mb-4 ">09123456789 :شماره تماس</p>
              <p className=" mb-4 ">ما را در شبکه های اجتماعی دنبال کنید:</p>
              <div className=" flex items-center gap-4 ">
                <CiInstagram className="text-2xl" />
                <PiTelegramLogoThin className="text-2xl" />
                <AiOutlineMail className="text-2xl" />
                <CiTwitter className="text-2xl" />
              </div>
            </div>
            <div className=" basis-[25%] ">
              <h2 className=" mb-5 font-semibold text-xl "> محتوای مفید </h2>
              <p className=" mb-4 ">لیست استارتاپ های ایرانی</p>
              <p className=" mb-4 ">ارزش گزاری استارتاپ</p>
              <p className=" mb-4 ">ایده های استارتاپی</p>
              <p className=" mb-4 ">قوانین و مقررات</p>
            </div>
            <div className=" basis-[25%] ">
              <h2 className=" mb-5 font-semibold text-xl "> دسترسی سریع </h2>
              <p className=" mb-4 ">حساب کاربری</p>
              <p className=" mb-4 ">درباره ما</p>
              <p className=" mb-4 ">سوالات متداول</p>
              <p className=" mb-4 ">تماس با ما</p>
            </div>
            <div className=" basis-[30%] mb-4 ">
              <h2 className=" mb-5 font-semibold text-xl "> از جدیدترین اخبار مطلع شوید </h2>
              <div className=" flex gap-2 ">
                <button className=" bg-primery text-white py-2 px-3  rounded-sm  ">عضویت</button>
                <input placeholder="ایمیل خود را اینجا وارد کنید" className=" w-9/12 backdrop-blur-sm text-righ px-4 py-2 rounded-sm bg-white/10 " type="text"></input>
              </div>
              <p className=" mt-4 "> استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا پروژه‌های پیشرفته، جهان استارت‌آپ‌ها را از اینجا کشف کنید. </p>
            </div>
          </div>
          <div className=" text-white mt-30  text-center border-t pt-8 border-white/20 ">
            <p>Mahdi-Devm / تمامی حقوق این وب‌سایت متعلق به کانسپتو می‌باشد. ©2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
