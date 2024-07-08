"use client";

import { useSearchPetContext } from "@/contexts/search-context";

export default function SearchForm() {
  const { searchPet, handleSearchPet } = useSearchPetContext();
  return (
    <form className="w-full h-full bg-slate-300">
      <input
        type="text"
        className="h-full w-full bg-white rounded-md px-5 outline-none transition focus:bg-white/50  hover:bg-white/30"
        onChange={(e) => handleSearchPet(e.target.value)}
        value={searchPet}
      />
    </form>
  );
}
