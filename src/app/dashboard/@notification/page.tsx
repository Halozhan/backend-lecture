import { Card } from "@/components/card";
import Link from "next/link";
export default function Notification() {
  return (
    <Card>
      <h1>Notification</h1>
      <Link href={"/dashboard/archived"}>Archived Notifications</Link>
    </Card>
  );
}
