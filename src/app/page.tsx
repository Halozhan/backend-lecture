import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Product</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">English</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=ko">Korean</Link>
    </div>
  );
}
