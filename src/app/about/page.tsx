import { Metadata } from "next";
import Profile from "./profile";

export const metadata: Metadata = {
  title: "About me",
  description: "나에 대해서",
};

export default function Page() {
  return (
    <div>
      <h1>About Page</h1>
      <Profile />
    </div>
  );
}
