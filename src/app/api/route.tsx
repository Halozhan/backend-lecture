export async function GET() {
  console.log("API Route accessed"); // 서버 콘솔에서만 뜨고 클라이언트 콘솔에서는 안뜸
  return new Response("Hello, API Route!");
}
