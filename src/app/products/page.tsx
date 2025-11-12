import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <Link href="/products/1?">Go to Product 1</Link>
      <br />
      <Link href="/products/2?">Go to Product 2</Link>
      <br />
      <Link href="/products/3?">Go to Product 3</Link>
    </>
  );
}
