import React from "react";
import "./Loader.css";
import classNames from "classnames";

interface LoaderProps {
  isLoading: boolean;
  structure: { type: string; width: string; height: string }[];
  children: React.ReactNode;
  className: string;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  structure,
  children,
  className,
}) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className={classNames("loader-container", className)}>
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
