"use client";
import { addPet } from "@/actions/actions";
import { PetListType } from "@/lib/types";
import { generateRandomId } from "@/utils/randomId";
import React, { useContext, useState, createContext } from "react";

// Define the context type
interface PetContextType {
  pets: PetListType[];
  selectedPets: PetListType | undefined;
  setSelectedPets: React.Dispatch<
    React.SetStateAction<PetListType | undefined>
  >;
  updateListAfterDeletePets(deletePetId: string): void;
  totalPets: number;
  addNewPets(newPet: Omit<PetListType, "id">): void;
  updatePetAndModifyPetList(petObj: PetListType): void;
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

  const totalPets = pets.length;

  async function addNewPets(newPet: Omit<PetListType, "id">) {
    // const petWithId: PetListType = { ...newPet, id: generateRandomId() };
    // setPets((prev) => [...prev, petWithId]);
    // await addPet(newPet)
  }

  function updateListAfterDeletePets(deletePetId: string) {
    const newPets = pets.filter((pet) => pet.id != deletePetId);
    setPets(() => [...newPets]);
    setSelectedPets(undefined);
  }

  function updatePetAndModifyPetList(petObj: PetListType) {
    const updatedPets = pets.filter((pet) => pet.id !== petObj.id);
    setPets([...updatedPets, petObj]);

    // UPDATE SELECTED PET STATE
    setSelectedPets({ ...petObj });
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        totalPets,
        selectedPets,
        setSelectedPets,
        updateListAfterDeletePets,
        updatePetAndModifyPetList,
        addNewPets,
      }}
    >
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
