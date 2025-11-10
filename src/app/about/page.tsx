import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookie = await cookies();
  const theme = cookie.get("theme")?.value ?? "light";
  // 브라우저가 자동으로 시스템의 테마. dark theme를 설정해주는 것 같다.
  return (
    <div>
      <h1>About Page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}
