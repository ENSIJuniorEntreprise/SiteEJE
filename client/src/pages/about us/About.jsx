import ImageWithBlock from "./ImageWithBlock";
import eje from "./img/eje1.jpg";
import eje2 from "./img/eje2.png";

export function About() {
  const imageBlocks = [
    {
      imagePath: "Sofiene Trabelsi.png",
      altText: "Sofiene Trabelsi",
      poste: "PRESIDENT",
    },
    {
      imagePath: "Mouna Hachicha.png",
      altText: "Mouna Hachicha",
      poste: "GENERAL SECRETARY",
    },
    {
      imagePath: "Iyadh Gharbi.png",
      altText: "Iyadh Gharbi",
      poste: "HUMAN RESOURCES\nDIRECTOR",
    },
    {
      imagePath: "Selim Ketata.png",
      altText: "Selim Ketata",
      poste: "OPERATION MANAGER",
    },
    {
      imagePath: "Emna Aissaoui.png",
      altText: "Emna Aissaoui",
      poste: "BUSINISS DEVELOPMENT MANAGER",
    },
    {
      imagePath: "Maissa El Hamdi2.png",
      altText: "Maissa El Hamdi",
      poste: "COMMUNICATION & DESIGN MANAGER",
    },
    // Add more image blocks as needed
  ];

  return (
    <div className="w-[100%] h-auto overflow-hidden " style={{ background: "#1F2029" }}>
      <div
        className="w-[100%] h-[660px] sm:max-md:h-[520px] "
        style={{
          backgroundImage: `url(${eje})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[100%] h-[100%] flex justify-center items-center text-center"
          style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }}
        >
          <div
            className="border p-2 pl-8 pr-8"
            style={{ borderColor: "#2DA2DD", borderWidth: "4px", zIndex: 1 }}
          >
            <span
              className="text-[65px] font-bold font-['Montserrat'] sm:max-md:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              E
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] sm:max-md:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              NSI&nbsp;
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] sm:max-md:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              J
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] sm:max-md:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              unior&nbsp;
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] sm:max-md:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              E
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] sm:max-md:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              nterprise
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex  h-[660px] relative rounded-br-[340px] shadow sm:max-md:rounded-br-[280px] sm:max-md:flex-col sm:max-md:justify-center sm:max-md:items-center sm:max-md:h-[920px]"
        style={{ background: "#E0DED2" }}
      >
        <div
          className="w-[490px] top-[100px] left-[160px] relative font-normal font-['Montserrat'] sm:max-md:absolute sm:max-md:left-auto sm:max-md:top-[40px] sm:max-md:w-[80%] "
          style={{ color: "#1F2029" }}
        >
          <div className="w-[357px] h-[83px] mb-4">
            <span
              className=" text-[65px] font-bold font-['Montserrat']"
              style={{ color: "#1F2029" }}
            >
              About
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat']"
              style={{ color: "#2DA2DD" }}
            >
              {" "}
              Us
            </span>
          </div>{" "}
          <hr
            className="w-[146px] h-[4px] border-none my-8"
            style={{ background: "#2DA2DD" }}
          />
          <p className=" text-xl" style={{ color: "#1F2029" }}>
            ENSI Junior Entreprise est une association étudiante affiliée à
            l'école nationale des sciences de l'informatique (ENSI). Notre
            mission est de préparer les étudiants pour le monde de l'entreprise.
            <br />
            <br />
            Depuis 2006, nous avons acquis de l'expérience et de l'expertise,
            toujours tirée par un large éventail du savoir-faire ,des
            compétences et de l'esprit d'entreprise. On a su gagner la
            satisfaction de nos membres et ce à travers des formations
            pédagogiques,des projets techniques et des événements .
          </p>
        </div>
        <div className="relative sm:max-md:w-[100%] sm:max-md:absolute sm:max-md:left-[12%] ">
          <div
            className="w-[470px] h-[330px] top-[200px] left-[400px] absolute sm:max-md:left-auto  sm:max-md:top-[70px] "
            style={{ background: "#2DA2DD" }}
          ></div>
          <div
            className="w-[500px] h-[360px] top-[130px] left-[330px] absolute shadow-lg  sm:max-md:left-[40px] sm:max-md:top-auto  "
            style={{
              backgroundImage: `url(${eje2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div
        className=" flex flex-col items-center pt-12 sm:max-md:h-[1160px] md:h-[90vh] sm:bg-gradient-pattern-sm "
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 50%, rgba(45, 162, 221, 0.2) 0, transparent 60%), radial-gradient(circle at 40% 50%, rgba(45, 162, 221, 0.2) 0, transparent 60%)",
          backgroundSize: "40% 90%, 40% 90%",
          backgroundPosition: "left, right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1F2029",
         
        }}
      >
        <div className="text-center">
          <span
            className="text-[65px] font-bold font-['Montserrat']"
            style={{ color: "#2DA2DD" }}
          >
            Our
          </span>
          <span
            className="text-[65px] font-bold font-['Montserrat']"
            style={{ color: "#E0DED2" }}
          >
            {" "}
            Values
          </span>
        </div>

        <div className="flex justify-center sm:max-md:flex-col mb-4">
          <div
            className="w-[320px] h-[270px] mt-[180px] relative flex flex-col items-center mx-8 sm:max-md:mt-[40px]"
            style={{ background: "#E0DED2" }}
          >
            <div
              className="w-[70px] h-[70px] m-6 shadow-lg"
              style={{ background: "#2DA2DD" }}
            />
            <div
              className=" text-2xl text-center font-bold font-['Qwitcher Grypen']  mb-6"
              style={{ color: "#1F2029" }}
            >
              Creativity
              <hr
                className="w-[240px] h-[4px] left-0 absolute border-none"
                style={{ background: "#2DA2DD", zIndex: 1 }}
              />
            </div>
            <div
              className="w-[297px] h-[89.03px] text-center text-[15px] mb-6 font-normal font-['Montserrat']"
              style={{ color: "#1F2029" }}
            >
              Notre état d'esprit privilégie la légèreté, la flexibilité et la
              souplesse dans le travail pour s'adapter aux changements.
            </div>
          </div>
          <div
            className="w-[320px] h-[270px] mt-[60px] relative flex flex-col items-center mx-8"
            style={{ background: "#2DA2DD" }}
          >
            <div
              className="w-[70px] h-[70px] left-[122px] m-6 shadow-lg"
              style={{ background: "#1F2029" }}
            />
            <div
              className="text-2xl text-center font-bold font-['Qwitcher Grypen']  mb-6"
              style={{ color: "#E0DED2" }}
            >
              Excellence
              <hr
                className="w-[240px] h-[4px] left-0 absolute  border-none"
                style={{ background: "#1F2029", zIndex: 1 }}
              />
            </div>
            <div
              className="w-[297px] h-[89.03px] text-center text-[15px] mb-6 font-normal font-['Montserrat']"
              style={{ color: "#E0DED2" }}
            >
              Notre état d'esprit privilégie la légèreté, la flexibilité et la
              souplesse dans le travail pour s'adapter aux changements.
            </div>
          </div>
          <div
            className="w-[320px] h-[270px] mt-[180px] relative flex flex-col items-center  mx-8 sm:max-md:mt-[60px] "
            style={{ background: "#E0DED2" }}
          >
            <div
              className="w-[70px] h-[70px] left-[122px] m-6 shadow-lg"
              style={{ background: "#2DA2DD" }}
            />
            <div className=" text-2xl text-center font-bold font-['Qwitcher Grypen']  mb-6">
              Professionalism
              <hr
                className="w-[250px] h-[4px] left-0 absolute border-none"
                style={{ background: "#2DA2DD", zIndex: 1 }}
              />
            </div>
            <div className="w-[297px] h-[89.03px] text-center mb-6 text-[15px] font-normal font-['Montserrat']">
              Notre état d'esprit privilégie la légèreté, la flexibilité et la
              souplesse dans le travail pour s'adapter aux changements.
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col items-center p-12 mt-6 rounded-tl-[350px] shadow sm:max-md:rounded-tl-[270px] "
        style={{ background: "#E0DED2" }}
      >
        <div className="text-center">
          <span
            className=" text-[65px] font-bold font-['Montserrat'] "
            style={{ color: "#1F2029" }}
          >
            Executive{" "}
          </span>
          <span
            className=" text-[65px] font-bold font-['Montserrat']"
            style={{ color: "#2DA2DD" }}
          >
            Board
          </span>
          <hr
            className="w-[80%] h-[4px] mt-6 left-0 absolute  border-none "
            style={{ background: "#1F2029", zIndex: 1 }}
          />
          <hr
            className="w-[80%] h-[4px] mt-16 right-0 absolute border-none "
            style={{ background: "#2DA2DD", zIndex: 1 }}
          />
        </div>
        <div className="grid grid-cols-3 gap-x-32 gap-y-20 mt-[140px] sm:max-md:grid-cols-2">
          {imageBlocks.map((block, index) => (
            <ImageWithBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </div>
  );
}
