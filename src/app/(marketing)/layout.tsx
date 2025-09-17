export const metadata = {
  title: "마케팅 레이아웃",
  description: "마케팅 관련 페이지 레이아웃",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>마케팅 관련 페이지에만 보이는 레이아웃입니다.</h1>
      </header>
      {children}
      <footer>마케팅 관련 페이지에만 보이는 푸터입니다.</footer>
    </div>
  );
}
