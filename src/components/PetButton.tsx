import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function PetButton({
  actionType,
  onClick,
}: {
  actionType: "add" | "edit" | "checkout";
  onClick?: () => void;
}) {
  if (actionType === "add") {
    return (
      <Button size="icon">
        <PlusIcon />
      </Button>
    );
  } else if (actionType === "edit") {
    return <Button variant="secondary">Edit</Button>;
  } else if (actionType === "checkout") {
    return (
      <Button variant="destructive" onClick={onClick}>
        Checkout
      </Button>
    );
  } else {
    return null;
  }
}
