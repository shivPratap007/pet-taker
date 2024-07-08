"use client";
import React, { useContext, useState, createContext } from "react";

// Define the context type
interface SearchPetContext {
  searchPet: string | undefined;
  handleSearchPet: (name: string) => void;
}

// Create the context with a default value
const SearchPetContext = createContext<SearchPetContext | undefined>(undefined);

export default function SearchPetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchPet, setSearchPet] = useState<string>();

  function handleSearchPet(name: string) {
    setSearchPet(() => name);
  }

  return (
    <SearchPetContext.Provider value={{ searchPet, handleSearchPet }}>
      {children}
    </SearchPetContext.Provider>
  );
}

export function useSearchPetContext() {
  const context = useContext(SearchPetContext);
  if (!context) {
    throw new Error(
      "useSearchPetContext must be used within a SearchPetContextProvider"
    );
  }
  return context;
}
