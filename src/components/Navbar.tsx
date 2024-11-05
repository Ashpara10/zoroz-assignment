"use client";
import { useDrawer, useStore } from "@/lib/context";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { store } = useStore();
  const { setOpen } = useDrawer();
  const router = useRouter();
  return (
    <header className="w-full  fixed top-0 backdrop-blur-md bg-white/60 z-20 flex items-center justify-center bg-primary-500 text-white py-4">
      <nav className="md:max-w-2xl px-3 md:px-0 w-full flex items-center  justify-between">
        <div className="" onClick={() => router.push("/")}>
          <Image src="/amazon.svg" alt="logo" width={100} height={100} />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center  hover:bg-neutral-200/60 p-2 rounded-lg"
        >
          <ShoppingCart className="size-5 stroke-black" />{" "}
          <span
            className={cn(
              "text-black ml-1 transition-all duration-150 invisible font-medium",
              store.length !== 0 && "visible"
            )}
          >
            Cart: {store.length}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
