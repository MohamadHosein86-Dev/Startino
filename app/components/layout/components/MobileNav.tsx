import Image from "next/image";
import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiLogin, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
export default function MobileNav() {
  return (
    <div className="block md:hidden ">
      <div className=" items-center flex justify-between mb-4 ">
        <button className="text-2xl focus:outline-none bg-stone-300 p-3 rounded-xl" aria-label="toggle-menu">
          <FaBars size={20} />
        </button>
        <Link href={"/"}>
          <Image width={80} height={10} src="/header/logo.webp" alt="" />
        </Link>
        <div className=" flex md:hidden gap-2 ">
          <div className=" btnLight py-1.5 px-2.5 flex items-center justify-center ">
            <CiLogin className="text-2xl" />
          </div>
          <div className=" btnBlue py-1.5 px-3.5 flex items-center justify-center ">
            <AiFillThunderbolt />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-4 ">
        <form className=" bg-gray-200 w-120 flex pl-4 justify-between rounded-xl ">
          <input placeholder="جستجو کسب‌ و کار" className=" rounded-xl bg-gray-200 py-3 pr-4 " type="text" name="" id="" />
          <button type="submit" className="mr-2 text-gray-600">
            <CiSearch className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}
