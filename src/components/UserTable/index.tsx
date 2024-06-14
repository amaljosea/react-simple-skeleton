import React from "react";
import Loader from "@/components/Loader";
import { UserDataType } from "@/hooks/useUserData";

type UserTableProps = {
  data: UserDataType;
};

const UserTable = ({ data }: UserTableProps) => {
  return (
    <div>
      {data.projects.map((project) => (
        <p key={project.name}>{project.name}</p>
      ))}
    </div>
  );
};

export const loaderStructure = [
  { type: "text", width: "90%", height: "20px" },
  { type: "text", width: "70%", height: "20px" },
  { type: "text", width: "50%", height: "20px" },
];

export const UserCardWithLoader = ({
  loading,
  data,
}: UserTableProps & { loading: boolean }) => {
  return (
    <Loader structure={loaderStructure} isLoading={loading}>
      <UserTable data={data} />
    </Loader>
  );
};
