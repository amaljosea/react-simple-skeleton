"use client";

import "./page.css";

import { Poppins } from "next/font/google";
import classNames from "classnames";
import { useUserData } from "@/hooks/useUserData";
import { UserCard } from "@/components/UserCard";
import { UserTable } from "@/components/UserTable";

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const { loading, data } = useUserData();

  return (
    <main className={classNames(roboto.className, "page-container")}>
      <div>
        <h1>Basic details</h1>
        <UserCard loading={loading} data={data} />
      </div>
      <div>
        <h1>Projects and Publications</h1>
        <UserTable loading={loading} data={data} />
      </div>
    </main>
  );
}
