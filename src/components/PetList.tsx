import Image from "next/image";
import React from "react";

type PetListType = {
  id: string;
  name: string;
  ownerName: string;
  imageUrl: string;
  age: number;
  notes: string;
};
export default function PetList({ petList }: { petList: PetListType[] }) {
  return (
    <ul className="bg-white border-b border-black/[.08]">
      {petList.map((pets) => (
        <li key={pets.id} className="bg-white text-black border-b p-3 ">
          <button className="items-center gap-2 flex h-[70ps] w-full cursor-pointer hover:bg-[EFF1F2] focus:bg-[EFF1F2]">
            <Image
              className="h-[45px] w-[45px] rounded-full object-cover"
              src={pets.imageUrl}
              alt="Pet image"
              width={45}
              height={45}
            />
            <p className="font-semibold">{pets.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
