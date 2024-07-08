import Branding from "@/components/Branding";
import ContentBlock from "@/components/ContentBlock";
import PetDetails from "@/components/PetDetails";
import PetList from "@/components/PetList";
import SearchForm from "@/components/SearchForm";
import Stats from "@/components/Stats";
import SearchPetContextProvider from "@/contexts/search-context";

export default async function Dashboard() {
  return (
    <SearchPetContextProvider>
      <main className="p-2">
        <div className="flex items-center justify-between text-black py-8">
          <Branding />
          <Stats />
        </div>

        <div className=" grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]">
          <div className=" md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
            <SearchForm />
          </div>

          <div className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
            <ContentBlock>
              <PetList />

              <div className="absolute bottom-4 right-4">
                {/* <PetButton actionType="add" /> */}
              </div>
            </ContentBlock>
          </div>

          <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
            <ContentBlock>
              <PetDetails />
            </ContentBlock>
          </div>
        </div>
      </main>
    </SearchPetContextProvider>
  );
}
