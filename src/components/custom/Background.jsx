import React from "react";

const Background = ({ backgroundImage, children }) => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-cover bg-center bg-fixed text-slate-100"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="absolute inset-0 bg-slate-950/30" />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
