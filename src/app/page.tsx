import ProductsSkeleton from "@/components/ProductListLoadingSkeleton";
import ProductsList from "@/components/ProductsList";
import { getAllProducts } from "@/lib/actions";
import { Suspense } from "react";
import toast from "react-hot-toast";

export default async function Home() {
  const { data, error } = await getAllProducts();
  if (error) {
    toast.error("Failed to fetch products");
  }
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ProductsList data={data} />;
    </Suspense>
  );
}
