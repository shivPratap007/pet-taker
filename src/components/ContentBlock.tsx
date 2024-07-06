import React from "react";

export default function ContentBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white shadow-lg rounded-sm text-white  overflow-hidden h-full w-full">{children}</div>;
}
