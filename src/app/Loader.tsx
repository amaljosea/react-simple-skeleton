import React from "react";
import "./Loader.css";

interface LoaderProps {
  isLoading: boolean;
  structure: { type: string; width: string; height: string }[];
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, structure, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="loader-container">
      {structure.map((item, index) => {
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
