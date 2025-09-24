import Link from "next/link";

export default function Page() {
  const products = [155, 235, 388, 412, 578];

  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      {products.map((value, index) => {
        return (
          <div key={index}>
            key: {index} -{" "}
            <Link href={`/product/${value}`}>Product {value}</Link>
          </div>
        );
      })}
    </div>
  );
}
