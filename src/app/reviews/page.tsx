import Product from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ReviewsPage() {
  return (
    <>
      <h1>Reviews Page</h1>
      <Suspense fallback={<div>Loading Product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
    </>
  );
}
