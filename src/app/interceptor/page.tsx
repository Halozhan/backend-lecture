import Link from "next/link";
export default async function Interceptor() {
  return (
    <div>
      <h1>Interceptor Page</h1>
      <Link href={"/interceptor/goto2"}>Go to 2</Link>
      <br />
      <Link href={"/goto3"}>Go to 3</Link>
    </div>
  );
}
