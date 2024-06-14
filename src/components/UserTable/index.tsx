import React from "react";
import Loader from "@/components/Loader";

type UserTableProps = {
  loading: boolean;
};

export const UserTable = ({ loading }: UserTableProps) => {
  const structure2 = [
    { type: "text", width: "90%", height: "20px" },
    { type: "text", width: "70%", height: "20px" },
    { type: "text", width: "50%", height: "20px" },
  ];

  return (
    <Loader isLoading={loading} structure={structure2}>
      <div>
        <p>Loaded text content 1</p>
        <p>Loaded text content 2</p>
        <p>Loaded text content 3</p>
      </div>
    </Loader>
  );
};

export default UserTable;
