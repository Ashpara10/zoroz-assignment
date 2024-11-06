import ProductDetails from "@/components/ProductDetails";
import { delay, getProductById } from "@/lib/actions";
import { Metadata } from "next";
import toast from "react-hot-toast";

export async function generateMetadata({
  params: { id },
}: any): Promise<Metadata> {
  const { data } = await getProductById(parseInt(id));
  return {
    title: `${data?.title} - Amazon`,
    description: data?.description,
    openGraph: {
      images: [data?.thumbnail],
    },
  };
}

export default async function Page({ params: { id } }: any) {
  const { data, error } = await getProductById(parseInt(id));
  if (error) {
    toast.error("Failed to fetch product details");
    return;
  }
  await delay(1000);
  return <ProductDetails data={data} />;
}
