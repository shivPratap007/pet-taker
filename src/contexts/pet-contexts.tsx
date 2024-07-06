"use client";
import { PetListType } from "@/lib/types";
import React, { useContext, useState, createContext } from "react";

// Define the context type
interface PetContextType {
  pets: PetListType[];
  selectedPets: PetListType | undefined;
  setSelectedPets: React.Dispatch<React.SetStateAction<PetListType | undefined>>;
}

// Create the context with a default value
const PetContext = createContext<PetContextType | undefined>(undefined);

export default function PetContextProvider({
  children,
  petList,
}: {
  children: React.ReactNode;
  petList: PetListType[];
}) {
  const [pets, setPets] = useState<PetListType[]>(petList);
  const [selectedPets, setSelectedPets] = useState<PetListType | undefined>();

  return (
    <PetContext.Provider value={{ pets, selectedPets, setSelectedPets }}>
      {children}
    </PetContext.Provider>
  );
}

export function usePetContext() {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }
  return context;
}
