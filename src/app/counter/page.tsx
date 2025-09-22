"use client";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Counter Page",
};

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <div
        onClick={() => setCount(count + 1)}
        style={{
          color: "cyan",
          border: "1px solid cyan",
          padding: 8,
          display: "inline-block",
        }}
      >
        증가!
      </div>
    </div>
  );
}
