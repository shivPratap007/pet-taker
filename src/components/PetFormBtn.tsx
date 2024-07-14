import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function PetFormBtn({ actionType }: { actionType: "add" }) {
    const{pending}=useFormStatus()
  return (
    <Button disabled={pending} type="submit">
      {actionType === "add" ? "Add pet" : "Edit pet"}
    </Button>
  );
}
