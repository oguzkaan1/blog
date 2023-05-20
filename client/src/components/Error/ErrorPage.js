import React from "react";

export const ErrorPageLayout = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        background: "#1f1e1e",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};
