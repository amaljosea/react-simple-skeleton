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
  { id: "row1", style: { width: "90%", height: 20 } },
  { id: "row2", style: { width: "70%", height: 20 } },
  { id: "row3", style: { width: "50%", height: 20 } },
];

export const UserTableWithLoader = ({
  loading,
  data,
}: UserTableProps & { loading: boolean }) => {
  return (
    <Loader structure={loaderStructure} isLoading={loading}>
      <UserTable data={data} />
    </Loader>
  );
};
