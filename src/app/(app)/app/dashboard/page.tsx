import ContentBlock from "@/components/ContentBlock";
import Heading from "@/components/Heading";
import PetDetails from "@/components/PetDetails";
import PetList from "@/components/PetList";
import SearchForm from "@/components/SearchForm";

export default function Dashboard() {
  return (
    <main className="p-2">
      <div className="flex items-center justify-between text-black py-8">
        <section>
          <Heading>
            Pet <span className="font-semibold">Taker</span>
          </Heading>
          <p className="text-lg opacity-80">
            Manage your pet daycare with ease
          </p>
        </section>
        <section>
          <p className="text-2xl font-bold leading-6">2</p>
          <p className="opacity-80">Current guests</p>
        </section>
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
  );
}
