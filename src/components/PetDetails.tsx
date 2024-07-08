"use client";
import { usePetContext } from "@/contexts/pet-contexts";
import { useSearchPetContext } from "@/contexts/search-context";
import { PetListType } from "@/lib/types";
import Image from "next/image";
import React from "react";

export default function PetDetails() {
  const { selectedPets } = usePetContext();

  return (
    <section className="w-full h-full text-black">
      {!selectedPets ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPets} />

          <OtherInfo pet={selectedPets} />

          <Notes pet={selectedPets} />
        </>
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="text-black h-full flex justify-center items-center text-2xl font-medium">
      No pet selected
    </p>
  );
}

function TopBar({ pet }: Props) {
  // const { handleCheckoutPet } = usePetContext();

  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-light">
      <Image
        src={pet.imageUrl}
        alt="Selected pet image"
        height={75}
        width={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />

      <h2 className="text-3xl font-semibold leading-7 ml-5">{pet.name}</h2>

      {/* <div className="ml-auto space-x-2">
        <PetButton actionType="edit">Edit</PetButton>
        <PetButton
          actionType="checkout"
          onClick={async () => await handleCheckoutPet(pet.id)}
        >
          Checkout
        </PetButton>
      </div> */}
    </div>
  );
}

type Props = {
  pet: PetListType;
};

function OtherInfo({ pet }: Props) {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.ownerName}</p>
      </div>

      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: Props) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
      {pet.notes}
    </section>
  );
}
