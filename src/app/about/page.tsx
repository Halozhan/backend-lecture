"use client";
import { useState } from "react";

export default function AboutPage() {
  // 클라이언트에서 처리되는 로직이다.
  console.log("About Page Rendered");
  const [name, setName] = useState("Lee");
  console.log("Client Side Name:", name);
  return (
    <div>
      <h1>About Page</h1>
      {
        /* 클라이언트 사이드에서만 동작하는 부분 */
        <button onClick={() => setName("Kim")}>Change Name</button>
      }
      <p>Name: {name}</p>
    </div>
  );
}
