import React from "react";
import Loader from "@/components/Loader";
import { UserDataType } from "@/hooks/useUserData";
import "./UserTable.css";

type UserTableProps = {
  data: UserDataType;
};

const UserTable = ({ data }: UserTableProps) => {
  return (
    <div className="user-table-container">
      {data.projects.map((project) => (
        <p key={project}>{project}</p>
      ))}
    </div>
  );
};

export const loaderStructure = [
  { id: "row1", style: { width: "90%", height: 24, marginTop: 10 } },
  { id: "row2", style: { width: "70%", height: 24, marginTop: 10 } },
  { id: "row3", style: { width: "50%", height: 24, marginTop: 10 } },
];

export const UserTableWithLoader = ({
  loading,
  data,
}: UserTableProps & { loading: boolean }) => {
  return (
    <Loader
      className="user-table-container"
      structure={loaderStructure}
      isLoading={loading}
    >
      <UserTable data={data} />
    </Loader>
  );
};
