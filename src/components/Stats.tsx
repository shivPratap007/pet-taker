"use client"
import { usePetContext } from "@/contexts/pet-contexts";
import React from "react";

export default function Stats() {
  const{totalPets}=usePetContext()
  return (
    <section>
      <p className="text-2xl font-bold leading-6">{totalPets}</p>
      <p className="opacity-80">Current guests</p>
    </section>
  );
}
