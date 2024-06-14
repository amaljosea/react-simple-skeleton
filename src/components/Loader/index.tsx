import React from "react";
import { loaderConfig } from "./loaderConfigs";
import "./Loader.css";
import classNames from "classnames";

interface LoaderProps {
  isLoading: boolean;
  structure: { id: string; style: React.CSSProperties }[];
  children: React.ReactNode;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
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
        const { style } = item;
        return (
          <div
            key={index}
            className="loader-item"
            style={{ borderRadius: style.height, ...style }}
          />
        );
      })}
    </div>
  );
};

export { loaderConfig };
