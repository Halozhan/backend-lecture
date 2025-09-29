"use client";
import { useSearchParams } from "next/navigation";

interface ArticlePageProps {
  params: { id: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
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
