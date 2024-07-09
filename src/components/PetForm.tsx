"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { FormEvent, useState } from "react";
import { usePetContext } from "@/contexts/pet-contexts";
import { addPet } from "@/actions/actions";

export default function PetForm({
  actionType,
}: {
  actionType: "add" | "edit";
}) {
  const { addNewPets, selectedPets, updatePetAndModifyPetList } =
    usePetContext();

  const [isOpen, setIsOpen] = useState(false);

  // function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const name = formData.get("name") as string;
  //   const ownerName = formData.get("name") as string;
  //   const imageUrl = formData.get("imageUrl") as string;
  //   const notes = formData.get("notes") as string;
  //   let age = parseInt(formData.get("age") as string);

  //   if (!name || !ownerName || !imageUrl || !age) {
  //     alert("Please enter all the fields");
  //     return;
  //   }

  //   if (actionType === "add") {
  //     addNewPets({
  //       name,
  //       ownerName,
  //       imageUrl,
  //       age,
  //       notes,
  //     });
  //   } else {
  //     updatePetAndModifyPetList({
  //       id: selectedPets?.id!,
  //       name,
  //       ownerName,
  //       imageUrl,
  //       age,
  //       notes,
  //     });
  //   }
  //   setIsOpen(false);
  // }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button size="icon">
            <PlusIcon />
          </Button>
        ) : (
          <Button variant="secondary">Edit</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {actionType === "add" ? "Add a new pet" : "Edit the pet"}
          </DialogTitle>
        </DialogHeader>
        <form action={addPet}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                defaultValue={`${
                  actionType == "edit" ? selectedPets?.name : ""
                }`}
                required
                id="name"
                name="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ownerName" className="text-right">
                Owner Name
              </Label>
              <Input
                defaultValue={`${
                  actionType == "edit" ? selectedPets?.ownerName : ""
                }`}
                required
                id="ownerName"
                name="ownerName"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image url
              </Label>
              <Input
                id="imageUrl"
                defaultValue={`${
                  actionType == "edit" ? selectedPets?.imageUrl : ""
                }`}
                name="imageUrl"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="age" className="text-right">
                Age
              </Label>
              <Input
                defaultValue={`${
                  actionType == "edit" ? selectedPets?.age : ""
                }`}
                required
                id="age"
                name="age"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Textarea
                defaultValue={`${
                  actionType == "edit" ? selectedPets?.notes : ""
                }`}
                required
                id="notes"
                name="notes"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {actionType === "add" ? "Add pet" : "Edit pet"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
