export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Auth 페이지에만 보이는 헤더입니다.</h1>
      {children}
    </div>
  );
}
