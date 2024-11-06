import ProductDetails from "@/components/ProductDetails";
import { delay, getProductById } from "@/lib/actions";
import { Metadata } from "next";
import toast from "react-hot-toast";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const id = parseInt((await params).id);
  const { data } = await getProductById(id);
  return {
    title: `${data?.title} - Amazon`,
    description: data?.description,
    openGraph: {
      images: [data?.thumbnail],
    },
  };
}

const Page = async ({ id }: PageProps["params"]) => {
  const { data, error } = await getProductById(parseInt(id));
  if (error) {
    toast.error("Failed to fetch product details");
    return;
  }
  await delay(1000);
  return <ProductDetails data={data} />;
};

export default Page;
