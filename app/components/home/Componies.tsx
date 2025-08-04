import { companies } from "@/app/data/companies";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Componies() {
  return (
    <section className="  mb-100 ">
      <div className=" relative ">
        <div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full md:w-360 h-[570px] bg-no-repeat bg-cover z-0"
          style={{
            backgroundImage: "url('home/cart/Tooltip.png')",
            backgroundPosition: "center"
          }}
        >
          <div className="  flex items-center gap-4 justify-center mt-20 ">
            {companies.map((res) => (
              <div key={res.name} className=" cursor-pointer basis-[22%] pb-6 rounded-xl bg-white">
                <Image width={330} height={330} src={res.image} alt={res.name} />
                <div className=" px-3 flex items-center justify-between ">
                  <div className=" flex flex-col ">
                    <span className=" font-semibold  ">{res.name}</span>
                    <span className=" text-sm text-gray-500 ">تجارت الکترونیک</span>
                  </div>
                  <Image width={50} height={50} src={res.logo} alt={res.name} />
                </div>
                <div className=" mt-4 px-3  flex items-center justify-between ">
                  <div className="w-[140px] gap-1 py-1 px-2 bg-gray-50 rounded-xl flex flex-col justify-center items-center">
                    <span className="text-sm">سرمایه گذاران جدید</span>
                    <span className=" text-lg font-semibold text-primery ">{res.newInvestors}</span>
                  </div>
                  <div className="w-[120px] gap-1 py-1 px-2 bg-gray-50 rounded-xl flex flex-col justify-center items-center">
                    <span className="text-sm">مخاطبین جدید</span>
                    <span className=" text-lg font-semibold text-primery ">{res.newClients}</span>
                  </div>
                </div>
                <div className="  px-3 mt-2 line-clamp-2 ">
                  <p className=" text-gray-500 text-sm font-semibold ">{res.description}</p>
                </div>
                <div className=" px-3 mt-2  ">
                  <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    {Array.from({ length: Math.floor(res.stars) }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {res.stars % 1 !== 0 && <FaStar className="opacity-50" />}
                    <span className="text-sm dark:text-gray-400 ms-2">{res.stars}</span>
                  </div>
                  <p className=" text-gray-500 text-sm font-semibold ">{res.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
