"use client";
import useSWR from "swr";

export async function fetcher() {
  const response = await fetch("http://localhost:4000/dashboard");
  return response.json();
}

export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "Error";
  if (!data) return "Loading...";

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Posts: {data.posts}</p>
      <p>Likes: {data.likes}</p>
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
    </div>
  );
}
