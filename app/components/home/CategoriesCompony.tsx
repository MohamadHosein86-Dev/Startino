import Image from "next/image";

const categories = [
  { id: 1, src: "/home/mainpage/Button.webp", label: "دکمه‌ها" },
  { id: 2, src: "/home/mainpage/Button(1).webp", label: "کلیدها" },
  { id: 3, src: "/home/mainpage/Button(2).webp", label: "عملگرها" },
  { id: 4, src: "/home/mainpage/Button(3).webp", label: "فشاردهنده" },
  { id: 5, src: "/home/mainpage/Slider(1).webp", label: "سوییچ" },
  { id: 6, src: "/home/mainpage/Switch.webp", label: "سوییچ ۲" },
  { id: 7, src: "/home/mainpage/Switch(1).webp", label: "دوطرفه" },
  { id: 8, src: "/home/mainpage/Switch(2).png", label: "اسلایدر" },
  { id: 9, src: "/home/mainpage/Switch(3).webp", label: "سه‌حالته" },
  { id: 10, src: "/home/mainpage/Switch(4).webp", label: "کنترلی" },
  { id: 11, src: "/home/mainpage/Switch(5).webp", label: "پاور" },
  { id: 12, src: "/home/mainpage/Switch(6).webp", label: "الکترونیکی" }
];
export default function CategoriesCompony() {
  return (
    <section className=" container my-8 ">
      <div className="flex items-center justify-center gap-4 mb-6">
        <hr className="border border-stone-300 w-32"></hr>
        <h1 className="text-xl font-semibold text-gray-800">دسته‌بندی‌ها</h1>
        <hr className="border border-stone-300 w-32"></hr>
      </div>
      <div className=" grid grid-cols-6 gap-8  ">
        {categories.map((res) => (
          <div className=" cursor-pointer px-4 py-3 flex flex-col rounded-2xl items-center shadow-sm " key={res.id}>
            <Image width={100} height={100} src={res.src} alt="image-categories" />
            <span className="mt-3 text-md mb-2 text-gray-700 group-hover:text-black font-semibold transition-colors duration-300 ">{res.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
