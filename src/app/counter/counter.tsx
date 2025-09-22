"use client";
import { useState } from "react";

export default function Counter() {
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
