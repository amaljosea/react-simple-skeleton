import React from "react";
import { Loader, loaderConfig } from "@/components/Loader";
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
  loaderConfig.TEXT,
  loaderConfig.TEXT,
  loaderConfig.TEXT,
];

export const UserTableWithLoader = ({
  loading,
  data,
}: UserTableProps & { loading: boolean }) => {
  return (
    <Loader
      className="user-table-container"
      structure={loaderStructure}
      loading={loading}
    >
      <UserTable data={data} />
    </Loader>
  );
};
