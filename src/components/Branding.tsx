import React from "react";
import Heading from "./Heading";

export default function Branding() {
  return (
    <section>
      <Heading>
        Pet <span className="font-semibold">Taker</span>
      </Heading>
      <p className="text-lg opacity-80">Manage your pet daycare with ease</p>
    </section>
  );
}
