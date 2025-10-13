import { Card } from "@/components/card";
export default async function RevenueMetrics() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <Card>
      <h1>Revenue Metrics</h1>
    </Card>
  );
}
