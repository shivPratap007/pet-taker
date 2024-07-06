import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-cyan-300 min-h-screen flex items-center justify-center gap-10 xl:flex-row flex-col p-10">
      <Image
        className="rounded-md"
        src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={200}
        height={80}
        alt="main image"
      />
      <div>
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pets </span>with ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use pet taker to keep track of your peets under your care in minimum
          price.
        </p>
        <div className="mt-10 gap-6 flex">
          <Button  variant={"default"}><Link href={"/signup"}>Get started</Link></Button>
          <Button variant={"secondary"}><Link href={"/login"}>Login</Link></Button>
        </div>
      </div>
    </main>
  );
}
