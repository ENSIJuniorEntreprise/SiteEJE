import React from "react";
import { mailIcon } from "../../assets/file";

const ContactButton = () => {
  const borderStyle = {
    borderImage: 'linear-gradient(to bottom, rgba(45, 162, 221, 1) 0%, rgba(45, 162, 221, 0) 100%)',
    borderImageSlice: '1'
  };

  return (
    <div className="lg:w-96 h-24 flex items-center justify-center gap-6 border-[3px] sm:w-[37vw]" style={borderStyle}>
      <img src={mailIcon} className="w-12 h-12" alt="mail icon" />
      <div className="text-[#2DA2DD] font-semibold text-lg">
        Get in touch with us
      </div>
    </div>
  );
};

export default ContactButton;
