import React from "react";
import Image from "next/image";
import { UserDataType } from "@/hooks/useUserData";
import Loader from "@/components/Loader";
import "./UserCard.css";

type UserCardProps = {
  data: UserDataType;
};

const UserCard = ({ data }: UserCardProps) => {
  return (
    <div className="user-card-container">
      <Image
        width={100}
        height={100}
        src={data.avatarUrl}
        alt={`${data.name}'s profile picture`}
      />
      <p className="ellipsis">{data.name}</p>
      <p className="ellipsis">{data.title}</p>
      <p className="ellipsis">{data.location}</p>
    </div>
  );
};

export const loaderStructure = [
  {
    id: "user-image",
    style: {
      width: 100,
      height: 100,
    },
  },
  { id: "user-name", style: { width: "80%", height: 24, marginTop: 10 } },
  { id: "user-title", style: { width: "60%", height: 24, marginTop: 10 } },
  {
    id: "user-subtitle",
    style: { width: "60%", height: 24, marginTop: 10 },
  },
];

export const UserCardWithLoader = ({
  loading,
  data,
}: UserCardProps & { loading: boolean }) => {
  return (
    <Loader
      className="user-card-container"
      structure={loaderStructure}
      isLoading={loading}
    >
      <UserCard data={data} />
    </Loader>
  );
};
