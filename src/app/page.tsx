"use client";

import { useUserData } from "@/hooks/useUserData";
import { UserCard } from "@/components/UserCard";
import { UserTable } from "@/components/UserTable";

export default function Home() {
  const { loading } = useUserData();

  return (
    <main>
      <h1>Example 1</h1>
      <UserCard loading={loading} />
      <h1>Example 2</h1>
      <UserTable loading={loading} />
    </main>
  );
}
