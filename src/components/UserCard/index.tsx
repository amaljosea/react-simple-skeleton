import React from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import { loaderStructure } from "./loaderStructure";

type UserCardProps = {
  loading: boolean;
};

export const UserCard = ({ loading }: UserCardProps) => {
  return (
    <Loader isLoading={loading} structure={loaderStructure}>
      <div>
        <Image
          width={100}
          height={100}
          src="/avatar.jpg"
          alt="Loaded content"
        />
        <p>Loaded text content 1</p>
        <p>Loaded text content 2</p>
      </div>
    </Loader>
  );
};
