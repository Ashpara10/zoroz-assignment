"use client";
import { useStore } from "@/lib/context";
import { ProductCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronLeft, DollarSign } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useMemo } from "react";
import toast from "react-hot-toast";
import ProductRating from "./ProductRating";

type ProductDetailsProps = {
  data: ProductCardProps;
};

const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  const router = useRouter();
  const { store, setStore } = useStore();

  const isAddedToCart = useMemo(() => {
    return store.some((item) => item.id === data.id);
  }, [store, data]);

  return (
    <section className="w-full flex flex-col items-center justify-start min-h-screen">
      <div className="max-w-2xl w-full flex flex-col items-start justify-center">
        <button
          onClick={() => router.push("/")}
          className="flex items-center rounded-lg px-2 py-1 mb-2 hover:bg-neutral-200 transition-all duration-150 justify-center"
        >
          <ChevronLeft className="size-4 opacity-80 stroke-black" />
          <span className="opacity-80 ml-1 text-sm font-medium">Back</span>
        </button>
        <div className="p-3  w-full flex items-center justify-center rounded-lg border border-neutral-300/80">
          <Image
            className=" aspect-square "
            style={{
              objectFit: "contain",
            }}
            src={data?.thumbnail}
            width={400}
            height={420}
            priority
            alt={`img-${data?.title}`}
          />
        </div>
        <div className="mt-4 pb-10">
          <h3 className="text-xl font-medium  line-clamp-3 leading-tight tracking-tight">
            {data?.title}
          </h3>
          <ProductRating count={data?.reviews.length} rate={data?.rating} />
          <div className="mt-3">
            <span className="flex items-center justify-start font-medium text-2xl mb-2 ">
              <DollarSign className="opacity-80 size-5" /> {data?.price}
            </span>
            <span className="opacity-80 leading-tight">
              {data?.description}
            </span>
            <button
              onClick={() => {
                if (isAddedToCart) {
                  setStore((prev) =>
                    prev.filter((item) => item.id !== data.id)
                  );
                  toast.success("Removed from Cart");

                  return;
                }
                setStore((prev) => [...prev, data]);
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
    </section>
  );
};

export default ProductDetails;
