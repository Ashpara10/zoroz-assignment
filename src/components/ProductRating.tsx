import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { FC } from "react";

type ProductRatingProps = {
  count?: number;
  rate: number;
};

const ProductRating: FC<ProductRatingProps> = ({ rate }) => {
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
      {/* <Dot className="size-5 stroke-black/70 " />
      <span className="text-sm opacity-80">{count}</span> */}
    </div>
  );
};

export default ProductRating;
