export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <h1>Product 하위 페이지에만 보입니다.</h1>
    </div>
  );
}
