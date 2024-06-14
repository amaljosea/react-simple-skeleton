import React from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import { loaderStructure } from "./loaderStructure";
import { UserDataType } from "@/hooks/useUserData";

type UserCardProps = {
  loading: boolean;
  data: UserDataType;
};

export const UserCard = ({ loading, data }: UserCardProps) => {
  return (
    <Loader isLoading={loading} structure={loaderStructure}>
      <div>
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
    </Loader>
  );
};
