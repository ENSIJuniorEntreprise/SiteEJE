import React from "react";

export function RightArticle({
  cover,
  publishedAt,
  title,
  shortDescription,
  reverse,
}) {
  const flexDirectionClass = reverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`w-[70%] content-fit flex flex-col lg:gap-2 lg:flex  ${flexDirectionClass}`}
    >
      {/* Partie gauche (image) */}
      <div className="h-[40vh] lg:h-[350px] xl:h-[400px] lg:w-auto flex-shrink-0 ">
        <img
          src={cover}
          alt="Description de l'image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Partie droite (texte) */}
      <div className="overflow-hidden w-full p-4 bg-[#E0DED3] lg:h-[350px] xl:h-[400px] md:h-[340px]">
        <h2 className="title text-2xl font-semibold text-[#3D3E47] font-montserrat md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  ">
          {title}
        </h2>
        <div className="bg-[#2DA2DD] h-1 w-[150px] mb-4"></div>
        <div className="details text-[#1F2029] opacity-[44%] font-montserrat lg:text-lg md:text-xl xl:text-xl 2xl:text-2xl">
          <span>{publishedAt}</span>
        </div>
        <br />
        <p className="description text-[#1F2029] font-montserrat lg:text-lg md:text-xl xl:text-xl 2xl:text-2xl">
          {shortDescription}
        </p>
        <br />
        <button className="font-montserrat bg-transparent text-center text-[#2DA2DD] font-medium text-lg transition duration-300 z-10 py-2 px-4 border-2 border-[#2DA2DD] hover:text-black hover:bg-[#2DA2DD] lg:relative lg:bottom-4 xl:bottom-0 lg:flex xl:flex-none">
          <span className="text-base ">Learn more</span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-300% bg-[#2DA2DD] transition duration-500 block z-[-1]"></span>
        </button>
      </div>
    </div>
  );
}
