import { bannerImg, image } from "../../assets/file";

function FirstHighLight({ cover, publishedAt, title, shortDescription }) {
  return (
    <div className="h-auto w-[100%]  flex flex-col-reverse bg-[#E0DED2] rounded-bl-[200px] overflow-hidden justify-center items-center lg:flex-row lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] ">
      {/* Partie gauche (texte) */}
      <div className="flex flex-col w-full px-[10%] pb-[10%] bg-[#E0DED3]  lg:justify-start lg:items-start lg:w-[50%] lg:p-[5%] justify-center items-center font-montserrat">
        <div className="text-xl md:text-3xl  lg:text-2xl xl:text-3xl 2xl:text-4xl sm:text-2xl   text-[#2DA2DD] font-montserrat">
          On the front page
        </div>
        <h2 className="title text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl   font-semibold  border-[#2eaded] font-montserrat text-[#1F2029] ">
          {title}
        </h2>
        <div className="bg-[#2DA2DD] h-1 w-[15vw] mb-4"></div>

        <div className="details text-[#1F2029] opacity-[78%] font-montserrat text-lg md:text-xl xl:text-2xl">
          <span>{publishedAt}</span>
        </div>
        <br />
        <p className="description text-[#1F2029]  sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-montserrat ">
          {shortDescription}
        </p>
        <br />
        <button className="relative overflow-hidden bg-transparent text-center text-[#1F2029] font-bold text-lg lg:text-xl transition duration-300 z-10 py-2 px-4 border-2 border-[#1F2029] hover:text-black hover:bg-[#2eaded] font-montserrat">
          Learn more
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-300% bg-[#2eaded] transition duration-500 block z-[-1]"></span>
        </button>
      </div>

      {/* Partie droite (image) */}
      <div className="bg-[#E0DED2] w-full h-full py-6 px-6 yxs:py-0 yxs:px-0 sm:py-8 sm:px-8 md:py-14 md:px-14 lg:py-0 lg:px-0 yxs:h-full sm:h-[60vh] md:h-[80vh] lg:h-full lg:flex-1">
        <img
          src={cover}
          alt="Description de l'image"
          className="w-full  h-full object-cover"
        />
      </div>
    </div>
  );
}

export default FirstHighLight;
