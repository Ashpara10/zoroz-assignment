"use client";
import { useDrawer, useStore } from "@/lib/context";
import Drawer from "./ui/drawer";
import ProductRating from "./ProductRating";
import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

const CartDrawer = () => {
  const { setStore, store } = useStore();
  const { setOpen } = useDrawer();
  const router = useRouter();

  const totalPrice = useMemo(() => {
    return store.reduce((acc, curr) => acc + curr.price, 0);
  }, [store]);

  return (
    <Drawer className="">
      <div className="w-full  p-3 pt-4 border-b border-neutral-300 flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Cart</h2>
          <span className="text-sm text-neutral-500">{store.length} items</span>
          <span className="flex mt-2 items-center justify-start ">
            <DollarSign className="opacity-80 size-5" /> {totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="w-full  flex items-center justify-center gap-2">
          <button
            onClick={() => setStore([])}
            className={cn(
              "w-full px-4 py-2 rounded-md  justify-self-end mt-3 ",
              "bg-neutral-300/90 hover:bg-neutral-200"
            )}
          >
            Clear Cart
          </button>
          <button
            onClick={() => {
              router.push(`/checkout`), setOpen(false);
            }}
            className={cn(
              "w-full px-4 py-2 rounded-md  justify-self-end mt-3 ",
              "bg-yellow-400/90 hover:bg-yellow-500 disabled:bg-yellow-200"
            )}
            disabled={store.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="w-full px-3 h-full scrollbar-thin scroll-py-10  overflow-y-auto pb-10 mt-3  ">
        {store.length === 0 && (
          <div className="w-full border-2 border-dashed rounded-lg border-neutral-300 flex items-center justify-center p-4">
            <p className="text-center">Cart is empty</p>
          </div>
        )}
        {store.map((product) => (
          <div
            className="w-full cursor-pointer p-3 border border-neutral-300 rounded-lg mt-2"
            key={product?.id}
          >
            <div className="flex flex-col">
              <h3
                onClick={() => {
                  router.push(`/product/${product?.id}`), setOpen(false);
                }}
                className="tracking-tight hover:underline leading-tight font-medium text-lg"
              >
                {product?.title}
              </h3>
              <ProductRating {...product?.rating} />
              <span className="flex items-center justify-start ">
                <DollarSign className="opacity-80 size-5" /> {product?.price}
              </span>
              <button
                className={cn(
                  "w-full px-4 py-2 rounded-md  justify-self-end mt-3 ",
                  "bg-neutral-300/90 hover:bg-neutral-200"
                )}
                onClick={() => {
                  setStore((prev) =>
                    prev.filter((item) => item.id !== product.id)
                  );
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
