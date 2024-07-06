"use client"
import { usePetContext } from "@/contexts/pet-contexts";
import { PetListType } from "@/lib/types";
import Image from "next/image";
import React from "react";

export default function PetList() {
  const{pets}=usePetContext();
  return (
    <ul className="bg-white border-b border-black/[.08]">
      {pets.map((pet) => (
        <li key={pet.id} className="bg-white text-black border-b p-3 ">
          <button className="items-center gap-2 flex h-[70ps] w-full cursor-pointer hover:bg-[EFF1F2] focus:bg-[EFF1F2]">
            <Image
              className="h-[45px] w-[45px] rounded-full object-cover"
              src={pet.imageUrl}
              alt="Pet image"
              width={45}
              height={45}
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
