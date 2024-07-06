import Image from "next/image";
import React from "react";

export default function PetList() {
  return (
    <ul className="bg-white border-b border-black/[.08]">
      <li className="bg-white text-black border-b p-3 ">
        <button className="items-center gap-2 flex h-[70ps] w-full cursor-pointer hover:bg-[EFF1F2] focus:bg-[EFF1F2]">
          <Image
            className="rounded-full object-cover"
            src={
              "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            }
            alt="Pet image"
            width={45}
            height={45}
          />
          <p className="font-semibold">Dobby</p>
        </button>
      </li>
    </ul>
  );
}
