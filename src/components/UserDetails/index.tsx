import React from "react";
import { Loader, loaderConfig } from "@/components/Loader";
import { UserDataType } from "@/hooks/useUserData";

import "./UserDetails.css";

type UserDetailsProps = {
  data: UserDataType;
};

const UserDetails = ({ data }: UserDetailsProps) => {
  return (
    <div className="user-table-container">
      {data.projects.map((project) => (
        <p key={project}>{project}</p>
      ))}
    </div>
  );
};

const loaderStructure = [
  loaderConfig.TEXT,
  loaderConfig.TEXT,
  loaderConfig.TEXT,
];

export const UserDetailsWithLoader = ({
  loading,
  data,
}: UserDetailsProps & { loading: boolean }) => {
  return (
    <Loader
      className="user-table-container"
      structure={loaderStructure}
      loading={loading}
    >
      <UserDetails data={data} />
    </Loader>
  );
};
