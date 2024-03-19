import { bannerImg } from "../../assets/file";

function Banner() {
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
  };
  return (
    <div className="bg-[#1F2029]">
      <div className="relative w-[100%] flex items-center justify-center md:h-[550px] xxs:h-[450px]">
        <div
          className="opacity-100"
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
                  <div
          className="w-[100%] h-[100%] flex justify-center items-center md:text-center "
          style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }}
        >
          <div
            className="border  p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] w-[600px] md:w-[600px] xxs:w-[90vw] mmmxs:w-[80vw] h-28 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(31, 32, 41, 0.8)",
              borderColor: "#2DA2DD",
              borderWidth: "4px",
              zIndex: 1,
              whiteSpace: "pre-line",
            }}
          >
            <span
              className="text-[65px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl"
              style={{ color: "#2DA2DD" }}
            >
              N
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl"
              style={{ color: "#E0DED2" }}
            >
              ews&nbsp;
            </span>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
