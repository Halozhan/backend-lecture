export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return <h1>Product Page ID: {id}</h1>;
}
