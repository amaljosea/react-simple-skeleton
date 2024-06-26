import React from "react";
import Image from "next/image";
import { UserDataType } from "@/hooks/useUserData";
import { Loader, loaderConfig } from "@/components/Loader";
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
      <p>{data.name}</p>
      <p>{data.title}</p>
      <p>{data.location}</p>
    </div>
  );
};

const loaderStructure = [
  loaderConfig.IMAGE,
  {
    ...loaderConfig.TEXT_SMALL,
    width: "20%",
  },
  loaderConfig.TEXT_SMALL,
  loaderConfig.TEXT_SMALL,
];

export const UserCardWithLoader = ({
  loading,
  data,
}: UserCardProps & { loading: boolean }) => {
  return (
    <Loader
      className="user-card-container"
      structure={loaderStructure}
      loading={loading}
    >
      <UserCard data={data} />
    </Loader>
  );
};
