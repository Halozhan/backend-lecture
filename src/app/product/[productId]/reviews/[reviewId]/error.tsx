"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h2>Error occurred in Review Page!</h2>
      <p>Error message: {error.message}</p>
      <button onClick={reload}>Try again!</button>
    </div>
  );
}
