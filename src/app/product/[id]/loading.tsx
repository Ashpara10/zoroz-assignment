import Skeleton from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start min-h-screen">
      <div className="max-w-2xl w-full flex flex-col items-start justify-center">
        <Skeleton className="w-full h-[400px] rounded-lg" />
        <Skeleton className="w-full h-10 mt-2" />
        <Skeleton className="w-full h-10 mt-2" />
        <Skeleton className="w-full h-[600pc] mt-2" />
      </div>
    </section>
  );
};

export default Loading;
