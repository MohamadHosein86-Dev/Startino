import Image from "next/image";
import React from "react";
const data = [
  {
    id: 1,
    src: "/home/Card.webp"
  },
  {
    id: 2,
    src: "/home/Card(1).webp"
  },
  {
    id: 3,
    src: "/home/Card(2).webp"
  }
];
export default function FindeCompony() {
  return (
    <section className="container grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-center gap-2 ">
      {data.map((res) => (
        <Image width={400} height={400} src={res.src} key={res.id} alt="image" />
      ))}
    </section>
  );
}
