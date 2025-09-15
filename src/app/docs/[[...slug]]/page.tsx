export default async function Doc({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;

  return (
    <h1>
      Document: {slug[0]}~가 있고, {slug[1]}도 있지만 나머지 것들은?{" "}
      {slug.slice(2).join(" ")}
    </h1>
  );
}
