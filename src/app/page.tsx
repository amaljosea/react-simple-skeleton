"use client";

import { useUserData } from "@/hooks/useUserData";
import { UserCard } from "@/components/UserCard";
import { UserTable } from "@/components/UserTable";

export default function Home() {
  const { loading } = useUserData();

  return (
    <main>
      <h1>Basic details</h1>
      <UserCard loading={loading} />
      <h1>Projects and Publications</h1>
      <UserTable loading={loading} />
    </main>
  );
}
