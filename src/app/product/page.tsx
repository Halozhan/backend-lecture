"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const products = [155, 235, 388, 412, 578];
  const router = useRouter();
  const handleClick = () => {
    console.log("Go to Home");
    router.push("/");
  };

  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <button onClick={handleClick}>Go to Home</button>
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
