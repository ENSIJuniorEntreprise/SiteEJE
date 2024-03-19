import ImageWithBlock from "./ImageWithBlock";
import { imageBlocks } from "./BE";
import { BEcarousel } from "./BEcarousel";
import eje from "./img/eje1.jpg";
import eje4 from "./img/eje4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Valeur from "./Value";
import Valeurs from "./Valeurs";

export function About() {
  return (
    <div
      className="w-[100%] h-auto overflow-hidden "
      style={{ background: "#1F2029" }}
    >
      <div
        className="w-[100%] h-[600px] dlg:h-[550px] xxs:h-[450px] "
        style={{
          backgroundImage: `url(${eje})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[100%] h-[100%] flex justify-center items-center md:text-center "
          style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }}
        >
          <div
            className="border  p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] w-[600px]"
            style={{
              backgroundColor: "rgba(31, 32, 41, 0.8)",
              borderColor: "#2DA2DD",
              borderWidth: "4px",
              zIndex: 1,
              whiteSpace: "pre-line",
            }}
          >
            <span
              className="text-[65px] font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              E
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              NSI&nbsp;
            </span>

            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              J
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              unior&nbsp;
            </span>
            <br className=" sm:hidden" />
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px] "
              style={{ color: "#2DA2DD" }}
            >
              E
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              nterprise
            </span>
            
          </div>
        </div>
      </div>
      <div
        className="h-[580px] bg-no-repeat relative rounded-br-[340px] shadow xxs:rounded-br-[180px]  xxs:h-[500px] sm:rounded-br-[200px] max-md:bacck md:rounded-br-[240px] md:h-[510px] dlg:rounded-br-[260px] dxl:h-[500px] dxl:rounded-br-[270px]    "
        style={{
          backgroundColor: "#E0DED2",
          backgroundSize: "60%",
          backgroundPosition: "center",
        }}
      >
        <div
          className=" w-[100%] h-[100%]  relative  xxs:items-center xs:flex xs:flex-col xxs:rounded-br-[180px] sm:rounded-br-[200px] md:grid md:grid-cols-2  md:rounded-br-[240px] dlg:rounded-br-[260px] dxl:rounded-br-[270px]        "
          style={{
            backgroundColor: "rgba(224, 222, 210, 0.8)",
          }}
        >
          <div className="w-[100%] h-[100%] flex  items-center justify-around  max-md:hidden">
            
            <div
              className="w-[75%] h-[65%]  shadow-dlg  "
              style={{
                backgroundImage: `url(${eje4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                
              }}
            ></div>
          </div>
          <div className="flex flex-col items-center  md:w-[90%] pl-0 " >
          <div
            className=" h-[100%] flex justify-center items-center font-normal font-['Montserrat'] flex-col max-md:absolute  xxs:w-[80%] xxs:text-center md:w-[100%] md:text-left "
            style={{ color: "#1F2029" }}
          >
            <div className="w-[100%] h-auto xs:mb-[1%] max-xs:text-center  ">
              <span
                className="  font-bold proxima-nova-extrabold xxs:text-[40px] xxs:pb-4 mmxs:text-[46px] mxs:text-[50px] md:border-b-4 md:bor md:text-[44px] dmd:text-[50px] dlg:text-[58px] max-md:bor 2xl:text-[65px] "
                style={{ color: "#1F2029" }}
              >
                About
              </span>
              <span
                className="  font-bold proxima-nova-extrabold xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px]  "
                style={{ color: "#2DA2DD" }}
              >
                {" "}
                Us
              </span>
            </div>
            <hr
              className="border-none my-8 xxs:w-[70%] xxs:mx-8 xxs:my-0 xxs:h-[3px] md:hidden"
              style={{ background: "#2DA2DD" }}
            />
            <p
              className="w-[100%] text-xl xxs:text-[14px] xxs:m-6 mmxs:text-[18px] mxs:text-[22px] md:text-[16px] dmd:text-[19px] dlg:text-[20px] dxl:text-[22px]     "
              style={{ color: "#1F2029" }}
            >
              ENSI Junior Entreprise est une association étudiante affiliée à
              l'école nationale des sciences de l'informatique (ENSI). Notre
              mission est de préparer les étudiants pour le monde de
              l'entreprise.
              <br />
              <br />
              Depuis 2006, nous avons acquis de l'expérience et de l'expertise,
              toujours tirée par un large éventail du savoir-faire ,des
              compétences et de l'esprit d'entreprise. On a su gagner la
              satisfaction de nos membres et ce à travers des formations
              pédagogiques,des projets techniques et des événements .
            </p>
          </div>
          </div>
          
        </div>
      </div>
      <div
        className=" flex flex-col items-center pt-12  mb-2  xxs:h-[800px] md:h-[450px] md:bg-gradient-pattern-sm dmd:h-[530px] dlg:h-[650px]  "
        style={{
          backgroundSize: "40% 90%, 40% 90%",
          backgroundPosition: "left, right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1F2029",
        }}
      >
        <div className="text-center">
          <span
            className=" font-bold proxima-nova-extrabold  xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px] "
            style={{ color: "#2DA2DD" }}
          >
            Our
          </span>
          <span
            className=" font-bold proxima-nova-extrabold xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px]"
            style={{ color: "#E0DED2" }}
          >
            {" "}
            Values
          </span>
        </div>

        <div className="flex justify-center mb-2  max-md:flex-col ">
          {Valeurs.map ((values, index) => (
            <Valeur key={index} {...values} />
          ))}
        </div>
      </div>
      <div
        className="w-full md:flex flex-col items-center justify-center xxs:p-0 xs:p-12 mt-6 shadow xxs:rounded-tl-[180px] xxs:pb-[100px] sm:rounded-tl-[180px] md:rounded-tl-[240px] dlg:rounded-tl-[260px] dxl:rounded-tl-[270px]  "
        style={{ background: "#E0DED2" }}
      >
        <div className="text-center">
          <span
            className=" font-bold proxima-nova-extrabold xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px] "
            style={{ color: "#1F2029" }}
          >
            Executive{" "}
          </span>
          <span
            className=" font-bold proxima-nova-extrabold xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px]"
            style={{ color: "#2DA2DD" }}
          >
            Board
          </span>
          <hr
            className="w-[80%] h-[4px] mt-6 left-0 absolute  border-none max-md:h-[3px] "
            style={{ background: "#1F2029", zIndex: 1 }}
          />
          <hr
            className="w-[80%] h-[4px] mt-16 right-0 absolute border-none max-md:h-[3px] max-md:hidden "
            style={{ background: "#2DA2DD", zIndex: 1 }}
          />
        </div>
        <div className="grid   gap-y-20 mt-[140px] max-md:hidden mxs:grid-cols-2 mxs:gap-x-16 dmd:grid-cols-3 sm:gap-x-20 dlg:gap-x-32">
          {imageBlocks.map((block, index) => (
            <ImageWithBlock key={index} {...block} />
          ))}
        </div>
        <BEcarousel />
      </div>
    </div>
  );
}
