import { cn } from "@/lib/utils";
import React from "react";

export default function ContentBlock({
  children,
  customClasses,
}: {
  children: React.ReactNode;
  customClasses?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white shadow-lg rounded-sm text-white  overflow-hidden h-full w-full",
        customClasses
      )}
    >
      {children}
    </div>
  );
}
