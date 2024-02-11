import { bannerImg } from "../../assets/file";

function Banner() {
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
  };
  return (
    <div className="bg-[#1F2029]">
      <div className="relative h-[300px] w-[100%] flex items-center justify-center 2xl:h-[500px] xl:h-[500px] lg:h-[400px] md:h-[400px] sm:h-[300px] yxs:h-[250px]">
        <div
          className="opacity-30"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundPosition: "center",

            top: 0,
            left: 0,
          }}
        >
          {/* Image content */}
        </div>
        <div className="border-4 border-[#2DA2DD]  w-[350px]  yxs:w-[300px] sm:w-[400px] md:w-[500px] xl:w-[500px] 2xl:w-[600px] flex justify-center items-center relative">
          <div className="text-2xl text-black yxs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl  font-semibold p-8">
            <span className="text-[#DFDED2] font-montserrat ">News </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
