import React from "react";
import Image from "next/image";
import { UserDataType } from "@/hooks/useUserData";
import { Loader, loaderConfig } from "@/components/Loader";
import "./UserCard.css";
import { getCustomisedConfig } from "../Loader/loaderConfigs";

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
  loaderConfig.IMAGE,
  // custom style example
  getCustomisedConfig(loaderConfig.TEXT_SMALL, {
    width: "20%",
  }),
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
