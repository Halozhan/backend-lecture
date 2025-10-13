import Link from "next/link";
export default async function Goto3() {
  return (
    <div>
      <h1>(.) Intercepted Goto 3 Page</h1>
      <Link href={"/interceptor"}>Go to Interceptor</Link>
    </div>
  );
}
