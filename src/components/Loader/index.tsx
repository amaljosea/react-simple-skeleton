import React from "react";
import { loaderConfig } from "./loaderConfigs";
import "./Loader.css";

interface LoaderProps {
  loading: boolean;
  structure: React.CSSProperties[];
  children: React.ReactNode;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  loading,
  structure,
  children,
  className,
}) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className={className}>
      {structure.map((style, index) => {
        return <span key={index} className="loader-item" style={style} />;
      })}
    </div>
  );
};

export { loaderConfig };
