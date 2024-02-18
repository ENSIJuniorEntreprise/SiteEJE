import React from "react";

const Testemonie = ({ bannerImg, name, description }) => {
  return (
    <div className="flex">
      <img
        src={bannerImg}
        alt=""
        style={{ objectFit: 'cover' }}
        className="w-20 h-20 rounded-full border-8 border-[#2DA2DD]"
      />
      <div className="pl-6  flex flex-col justify-between">
        <p className="text-[#E0DED2] max-w-xs">{description}</p>
        <h1 className="text-[#2DA2DD]">{name}</h1>
      </div>
    </div>
  );
};

export default Testemonie;
