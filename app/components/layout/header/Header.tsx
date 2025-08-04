"use client";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import LoginBtn from "../../ui/LoginBtn";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";

const navLibks = [
  { id: 1, titel: "خانه", href: "/" },
  { id: 2, titel: "شرکت ها", href: "" },
  { id: 3, titel: "فرصت های شغلی", href: "" },
  { id: 4, titel: "تماس با ما", href: "" },
  { id: 5, titel: "درباره ما", href: "" }
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className=" container ">
      <MobileNav />
      <div className=" flex-wrap flex-col md:flex-row flex items-center justify-between ">
        <div className=" hidden md:flex items-center gap-4 ">
          <Link href={"/"}>
            <Image width={130} height={10} src="/header/logo.webp" alt="" />
          </Link>
          <form className=" bg-gray-200 w-120 flex pl-4 justify-between rounded-xl ">
            <input placeholder="جستجو کسب‌ و کار" className=" rounded-xl bg-gray-200 py-3 pr-4 " type="text" name="" id="" />
            <button type="submit" className="mr-2 text-gray-600">
              <CiSearch className="text-2xl" />
            </button>
          </form>
        </div>
        <div className=" hidden md:flex gap-4 ">
          <LoginBtn titel="رایگان شروع کن!" />
          <LoginBtn titel="ورود/ثبت نام" login={true} />
        </div>
      </div>
      <div className=" hidden md:flex mt-10 mx-auto border-b  items-center gap-2 border-stone-200 pb-4 ">
        {navLibks.map((res) => (
          <Link className={` ${res.href === pathname && "bg-primery text-white "} hover:bg-primery  hover:text-white py-2 px-4 rounded-lg transition-colors ease-in delay-200 text-lg font-semibold text-black `} href={res.href} key={res.id}>
            {res.titel}
          </Link>
        ))}
      </div>
    </header>
  );
}
