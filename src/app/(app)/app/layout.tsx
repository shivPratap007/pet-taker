import BackgroundPattern from "@/components/BackgroundPattern";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "@/components/AppFooter";
import PetContextProvider from "@/contexts/pet-contexts";
import { PetListType } from "@/lib/types";
import SearchPetContextProvider from "@/contexts/search-context";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );
  if (!response.ok) {
    throw new Error("Could not fetch pets");
  }
  const petList: PetListType[] = await response.json();
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
