import { useStore } from "@/lib/context";
import { ProductCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useMemo } from "react";
import toast from "react-hot-toast";
import ProductRating from "./ProductRating";

const ProductCard: FC<ProductCardProps> = (product) => {
  const router = useRouter();
  const { store, setStore } = useStore();

  const isAddedToCart = useMemo(() => {
    return store.some((item) => item.id === product.id);
  }, [store, product]);

  const handleCardClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex cursor-pointer flex-col bg-white border rounded-lg overflow-hidden border-neutral-200 items-center justify-start w-full">
      <div className="p-3 basis-1/2 ">
        <Image
          className=" aspect-square "
          style={{
            objectFit: "contain",
          }}
          src={product?.thumbnail}
          width={400}
          height={420}
          priority
          alt={`img-${product?.title}`}
        />
      </div>
      <div className="mt-3 w-full px-3 pb-3 h-full flex flex-col items-start justify-between">
        <div className="w-full">
          <h3
            onClick={handleCardClick}
            className="text-lg hover:underline  line-clamp-3 leading-tight tracking-tight"
          >
            {product?.title}
          </h3>
          <ProductRating
            count={product?.reviews.length}
            rate={product?.rating}
          />
          <span className="flex items-center justify-start ">
            <DollarSign className="opacity-80 size-5" /> {product?.price}
          </span>
        </div>
        <div className="w-full">
          <button
            onClick={() => {
              if (isAddedToCart) {
                setStore((prev) =>
                  prev.filter((item) => item.id !== product.id)
                );
                toast.success("Removed from Cart");

                return;
              }
              setStore((prev) => [...prev, product]);
              toast.success("Added from Cart");
            }}
            className={cn(
              "w-full px-4 py-2 rounded-md  justify-self-end mt-3 ",
              "bg-yellow-400/90 hover:bg-yellow-500",
              isAddedToCart &&
                "bg-neutral-200 hover:bg-neutral-300/60 text-opacity-80"
            )}
          >
            {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
