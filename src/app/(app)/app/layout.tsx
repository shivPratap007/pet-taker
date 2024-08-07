import BackgroundPattern from "@/components/BackgroundPattern";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "@/components/AppFooter";
import PetContextProvider from "@/contexts/pet-contexts";
import { PetListType } from "@/lib/types";
import SearchPetContextProvider from "@/contexts/search-context";
import prisma from "@/utils/db";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const petList: PetListType[] = await prisma.pet.findMany();
  return (
    <>
      <BackgroundPattern />
      <div className="flex min-h-screen flex-col max-w-[1050px] mx-auto">
        <AppHeader />
        {/* <SearchPetContextProvider> */}
          <PetContextProvider petList={petList}>{children}</PetContextProvider>
        {/* </SearchPetContextProvider> */}
        <AppFooter />
      </div>
    </>
  );
}
