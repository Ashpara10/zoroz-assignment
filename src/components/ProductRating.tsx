import { ProductCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Dot, Star } from "lucide-react";
import React, { FC } from "react";

type ProductRatingProps = ProductCardProps["rating"];

const ProductRating: FC<ProductRatingProps> = ({ count, rate }) => {
  const rating = Math.floor(rate);
  return (
    <div className="w-full flex items-center justify-start my-3 px-1">
      {[...Array(5)].map((_, i) => {
        return (
          <Star
            key={i}
            strokeWidth={1.2}
            className={cn(
              "size-5 stroke-black/70",
              rating > i && " fill-yellow-400 stroke-yellow-500"
            )}
          />
        );
      })}
      <Dot className="size-5 stroke-black/70 " />
      <span className="text-sm opacity-80">{count}</span>
    </div>
  );
};

export default ProductRating;
