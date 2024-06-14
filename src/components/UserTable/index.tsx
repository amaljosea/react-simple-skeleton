import React from "react";
import Loader from "@/components/Loader";
import { loaderStructure } from "./loaderStructure";
import { UserDataType } from "@/hooks/useUserData";

type UserTableProps = {
  loading: boolean;
  data: UserDataType;
};

export const UserTable = ({ loading, data }: UserTableProps) => {
  return (
    <Loader isLoading={loading} structure={loaderStructure}>
      {data.projects.map((project) => (
        <p key={project.name}>{project.name}</p>
      ))}
    </Loader>
  );
};
