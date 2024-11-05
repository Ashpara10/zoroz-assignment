"use client";
import { useDrawer } from "@/lib/context";
import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";

type DrawerProps = {
  children: React.ReactNode;
  className?: string;
};

const Drawer: FC<DrawerProps> = ({ children, className }) => {
  const { open: isOpen, setOpen } = useDrawer();
  const onClose = () => setOpen(false);
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed  inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 max-h-screen h-full max-w-md w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
        >
          Close
        </button>

        {children}
      </div>
      {/* </div> */}
    </>
  );
};

export default Drawer;
