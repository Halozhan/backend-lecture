import Link from "next/link";
export default async function Goto2() {
  return (
    <div>
      <h1>(.) Intercepted Goto 2 Page</h1>
      <Link href={"/interceptor"}>Go to Interceptor</Link>
    </div>
  );
}
