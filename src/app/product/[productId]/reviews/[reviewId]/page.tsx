export default async function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const resolveParams = await params;
  const productId = resolveParams.productId
    ? resolveParams.productId
    : "unknown";
  const reviewId = resolveParams.reviewId ? resolveParams.reviewId : "unknown";
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
