import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${productId} with Promise`);
    }, 100);
  });

  return {
    title: productId ? `Product : ${productId}` : `${title}`,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <h1>Product Detail: {productId}</h1>;
}
