"use client";

import { useUserData } from "@/hooks/useUserData";
import { UserCardWithLoader } from "@/components/UserCard";
import { UserDetailsWithLoader } from "@/components/UserDetails";
import "./page.css";

export default function Home() {
  const { loading, data } = useUserData();

  return (
    <main className="page-container">
      <div className="content-container">
        <div className="item-container">
          <h1>Basic details</h1>
          <UserCardWithLoader loading={loading} data={data} />
        </div>
        <div className="item-container">
          <h1>Projects</h1>
          <UserDetailsWithLoader loading={loading} data={data} />
        </div>
      </div>
    </main>
  );
}
