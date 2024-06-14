"use client";

import { useUserData } from "@/hooks/useUserData";
import { UserCardWithLoader } from "@/components/UserCard";
import { UserTableWithLoader } from "@/components/UserTable";
import "./page.css";

export default function Home() {
  const { loading, data } = useUserData();

  return (
    <main className="page-container">
      <div className="content-container">
        <div className="item-container">
          <h1 className="ellipsis">Basic details</h1>
          <UserCardWithLoader loading={loading} data={data} />
        </div>
        <div className="item-container">
          <h1 className="ellipsis">Projects and Publications</h1>
          <UserTableWithLoader loading={loading} data={data} />
        </div>
      </div>
    </main>
  );
}
