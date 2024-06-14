"use client";

import { useUserData } from "@/hooks/useUserData";
import { UserCardWithLoader } from "@/components/UserCard";
import { UserTableWithLoader } from "@/components/UserTable";
import "./page.css";

export default function Home() {
  const { loading, data } = useUserData();

  return (
    <main className="page-container">
      <div>
        <h1>Basic details</h1>
        <UserCardWithLoader loading={loading} data={data} />
      </div>
      <div>
        <h1>Projects and Publications</h1>
        <UserTableWithLoader loading={loading} data={data} />
      </div>
    </main>
  );
}
