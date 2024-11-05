import ProductDetails from "@/components/ProductDetails";
import { delay, getProductById } from "@/lib/actions";
import React, { FC } from "react";
import toast from "react-hot-toast";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { data } = await getProductById(parseInt(params?.id));
  return {
    title: `${data?.title} - Amazon`,
    description: data?.description,
    openGraph: {
      images: [data?.image],
    },
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const { data, error } = await getProductById(parseInt(params?.id));
  if (error) {
    toast.error("Failed to fetch product details");
    return;
  }
  await delay(1000);
  return <ProductDetails data={data} />;
};

export default Page;
