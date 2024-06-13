import React from "react";
import "./Loader.css";

const Loader = ({ isLoading, structure, children }: any) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="loader-container">
      {structure.map((item: any, index: any) => {
        const { type, width, height } = item;
        return (
          <div
            key={index}
            className={`loader-item loader-${type}`}
            style={{ width, height }}
          />
        );
      })}
    </div>
  );
};

export default Loader;
