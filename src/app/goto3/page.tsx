import Link from "next/link";
export default async function goto3() {
  return (
    <div>
      <h1>Goto 3 Page</h1>
      <Link href={"/interceptor"}>Go to Interceptor</Link>
    </div>
  );
}
