import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const BgGlowContainer = ({
  children,
  className
}: {
  children: ReactNode | ReactNode[];
  className?: string;
}) => {
  return (
    <div className="relative mx-auto p-4">
      <div
        className={cn(`absolute -inset-1 bg-linear-to-br from-indigo-500 to-orange-400 rounded-full  blur-lg  backdrop-blur-md opacity-5 `, className)}
      ></div>
      <div>{children}</div>
    </div>
  );
};

export default BgGlowContainer;
