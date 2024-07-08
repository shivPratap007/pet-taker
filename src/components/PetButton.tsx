import PetForm from "./PetForm";
import { Button } from "./ui/button";

export default function PetButton({
  actionType,
  onClick,
}: {
  actionType: "add" | "edit" | "checkout";
  onClick?: () => void;
}) {
  if (actionType === "add") {
    return <PetForm actionType={actionType} />;
  } else if (actionType === "edit") {
    return <PetForm actionType={actionType} />;
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
