import React from "react";
import Loader from "@/components/Loader";
import Image from "next/image";

const structure1 = [
  { type: "image", width: "100px", height: "100px" },
  { type: "text", width: "80%", height: "20px" },
  { type: "text", width: "60%", height: "20px" },
];

type UserCardProps = {
  loading: boolean;
};

export const UserCard = ({ loading }: UserCardProps) => {
  return (
    <Loader isLoading={loading} structure={structure1}>
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
