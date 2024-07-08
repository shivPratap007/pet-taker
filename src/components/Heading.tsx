import { cn } from "@/lib/utils";

export default function Heading({
  children,
  customClasses,
}: {
  children: React.ReactNode;
  customClasses?: string;
}) {
  return (
    <h1 className={cn("font-medium text-2xl leading-6", customClasses)}>
      {children}
    </h1>
  );
}
