import { Card } from "@/components/card";
export default async function UsersAnalytics() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <Card>
      <h1>Users Analytics</h1>
    </Card>
  );
}
