"use server";

import { PetListType } from "@/lib/types";
import prisma from "@/utils/db";

export async function addPet(formData: FormData) {
  await prisma.pet.create({
    data: {
      name: formData.get("name") as string,
      ownerName: formData.get("ownerName") as string,
      imageUrl: formData.get("imageUrl") as string,
      age: parseInt(formData.get("age") as string),
      notes: formData.get("notes") as string,
    },
  });
}
