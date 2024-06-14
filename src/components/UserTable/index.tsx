import React from "react";
import Loader from "@/components/Loader";
import { loaderStructure } from "./loaderStructure";

type UserTableProps = {
  loading: boolean;
};

export const UserTable = ({ loading }: UserTableProps) => {
  return (
    <Loader isLoading={loading} structure={loaderStructure}>
      <div>
        <p>Loaded text content 1</p>
        <p>Loaded text content 2</p>
        <p>Loaded text content 3</p>
      </div>
    </Loader>
  );
};
