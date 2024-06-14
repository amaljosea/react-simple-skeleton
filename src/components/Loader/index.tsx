import React from "react";
import "./Loader.css";
import classNames from "classnames";

interface LoaderProps {
  isLoading: boolean;
  structure: { id: string; style: React.CSSProperties }[];
  children: React.ReactNode;
  className?: string;
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

  console.log({ structure });

  return (
    <div className={classNames("loader-container", className)}>
      {structure.map((item) => {
        const { style, id } = item;
        return (
          <div
            key={id}
            className="loader-item"
            style={{ borderRadius: style.height, ...style }}
          />
        );
      })}
    </div>
  );
};

export default Loader;
