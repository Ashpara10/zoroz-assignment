"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductCardProps } from "./types";

interface IStoreContext {
  store: ProductCardProps[];
  setStore: Dispatch<SetStateAction<ProductCardProps[]>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return { store: context.store, setStore: context.setStore };
};
export const useDrawer = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useDrawer must be used within a StoreProvider");
  }
  return { open: context?.open, setOpen: context?.setOpen };
};

export const StoreContext = createContext<IStoreContext>({
  store: [],
  setStore: () => {},
  open: false,
  setOpen: () => {},
});

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store, setStore] = useState<ProductCardProps[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StoreContext.Provider value={{ store, setStore, open, setOpen }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
