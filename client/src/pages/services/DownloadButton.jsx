import React from "react";
import { downloadIcon } from "../../assets/file";
const DownloadButton = () => {
  return (
    <div className="w-96 h-24 flex items-center justify-center gap-6 border border-[#1F2029]">
      <img src={downloadIcon} className="w-12 h-12" alt="download icon" />
      <div className="text-[#1F2029] font-semibold text-lg">Download Here</div>
    </div>
  );
};

export default DownloadButton;
