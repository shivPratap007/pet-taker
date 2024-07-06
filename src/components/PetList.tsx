"use client";
import { usePetContext } from "@/contexts/pet-contexts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function PetList() {
  const { pets, setSelectedPets, selectedPets } = usePetContext();
  return (
    <ul className="bg-white border-b border-black/[.08]">
      {pets.map((pet) => (
        <li
          key={pet.id}
          className={cn("bg-white text-black border-b p-3 ", {
            "bg-[#EFF1F2]": selectedPets?.id === pet.id,
          })}
        >
          <button
            onClick={() => setSelectedPets({ ...pet })}
            className={cn(
              "items-center gap-2 flex h-[70ps] w-full cursor-pointer hover:bg-[EFF1F2] focus:bg-[EFF1F2]"
            )}
          >
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
