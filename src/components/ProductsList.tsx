"use client";
import { ProductCardProps } from "@/lib/types";
import { FC, useMemo } from "react";
import ProductCard from "./ProductCard";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const ProductsList: FC<{ data: ProductCardProps[] }> = ({ data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams?.toString());
  const isCategory = searchParams.get("category");

  const filteredData = useMemo(() => {
    if (!searchParams) {
      return data;
    }
    const category = searchParams.get("category");
    if (!category) {
      return data;
    }
    return data.filter((product) => product.category === category);
  }, [data, searchParams]);

  const categories = useMemo(() => {
    const allCategories = data.map((product) => product.category);
    return [...new Set(allCategories)];
  }, [data]);

  const onCategoryAdd = (category: string) => {
    if (params.get("category")) {
      params.set("category", category);
    } else {
      params?.append("category", category);
    }
    router.push(`?${params.toString()}`);
  };
  const onCategoryRemove = (category: string) => {
    params?.delete("category");

    router.push(`?${params.toString()}`);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="flex max-w-3xl flex-wrap w-full overflow-x-auto mb-6 gap-2 items-center justify-start">
        {categories.map((category) => {
          return (
            <span
              onClick={() =>
                isCategory === category
                  ? onCategoryRemove(category)
                  : onCategoryAdd(category)
              }
              key={category}
              className="bg-neutral-200 transition-all duration-75 flex items-center justify-center cursor-pointer text-sm rounded-3xl px-4 py-2"
            >
              {isCategory === category && (
                <X className="size-4 opacity-80 mr-1" />
              )}
              {category}
            </span>
          );
        })}
      </div>
      <div className="max-w-3xl w-full gap-3 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 pb-10">
        {filteredData.map((product) => {
          return <ProductCard key={product?.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductsList;
