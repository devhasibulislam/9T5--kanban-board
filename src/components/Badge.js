import React from "react";

const Badge = ({ children }) => {
  return (
    <>
      <span class={`${children === "Female" ? "bg-indigo-200 text-indigo-800" : "bg-purple-200 text-purple-800"} text-xs mr-2 px-1 py-0.5 rounded`}>
        {children}
      </span>
    </>
  );
};

export default Badge;
