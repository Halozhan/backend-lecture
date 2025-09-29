export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}
