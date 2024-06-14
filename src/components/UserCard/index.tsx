import React from "react";
import Image from "next/image";
import { UserDataType } from "@/hooks/useUserData";
import Loader from "@/components/Loader";

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
      <p>{data.subTitle}</p>
    </div>
  );
};

export const loaderStructure = [
  { type: "image", width: "100px", height: "100px" },
  { type: "text", width: "80%", height: "20px" },
  { type: "text", width: "60%", height: "20px" },
  { type: "text", width: "60%", height: "20px" },
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
