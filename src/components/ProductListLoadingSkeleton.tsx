import React from "react";
import Skeleton from "./ui/skeleton";

const ProductListLoadingSkeleton = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="flex max-w-3xl  w-full overflow-x-auto mb-6 gap-x-2 items-center justify-start">
        <div className="w-full grid grid-cols-3 gap-2">
          {[...Array(20)].map((_, i) => {
            return <Skeleton key={i} className="w-full h-[380px] rounded-lg" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListLoadingSkeleton;
