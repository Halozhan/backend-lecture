"use client";
import { useSearchParams, useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const { id } = params;
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
