import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(10);
  if (random < 4) {
    throw new Error("Got under 4 number!");
  }
  const resolveParams = await params;
  const productId = resolveParams.productId
    ? resolveParams.productId
    : "unknown";
  const reviewId = resolveParams.reviewId ? resolveParams.reviewId : "unknown";
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
