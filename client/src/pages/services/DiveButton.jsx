import React from "react";

const DiveButton = ({ bgColor, title, subtitle }) => {
  return (
    <div
      className={`w-96 h-24 ${bgColor} text-[#E0DED2] flex flex-col items-center justify-center gap-1`}
    >
      <div className="text-xl font-semibold">{title}</div>
      <h2 className="text-xs pt-1">{subtitle}</h2>
    </div>
  );
};

export default DiveButton;
