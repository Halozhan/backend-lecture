"use client";
import { useSearchParams } from "next/navigation";

export default function ArticlePage({ params }) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <div>
      <h1>Article Page</h1>
      <p>Article ID: {id}</p>
      <p>Language: {lang}</p>
    </div>
  );
}
