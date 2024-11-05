import { cn } from "@/lib/utils";
import React, { FC } from "react";

type SkeletonProps = {
  className?: string;
};

const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return <div className={cn("bg-neutral-200/60 rounded-lg", className)}></div>;
};

export default Skeleton;
