import React from "react";
import { mailIcon } from "../../assets/file";

const ContactButton = () => {
  return (
    <div className="w-96 h-24 flex items-center justify-center gap-6 border border-[#2DA2DD]">
      <img src={mailIcon} className="w-12 h-12" alt="mail icon" />
      <div className="text-[#2DA2DD] font-semibold text-lg">
        Get in touch with us
      </div>
    </div>
  );
};

export default ContactButton;
