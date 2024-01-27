import ImageWithBlock from "./ImageWithBlock";
import eje from "./img/eje1.jpg";
import eje4 from "./img/eje4.jpg" ;
import eje3 from "./img/eje3.png";


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
    <div className="w-[100%] h-auto overflow-hidden " style= {{ background: "#1F2029" }} >
      <div
        className="w-[100%] h-[600px] max-xs:h-[450px] "
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
            className="border p-[2%] pl-4 pr-4"
            style={{ backgroundColor: "rgba(31, 32, 41, 0.8)", borderColor: "#2DA2DD", borderWidth: "4px", zIndex: 1, whiteSpace: "pre-line" }}
          >
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              E
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              NSI&nbsp;
            </span>
            
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              J
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              unior&nbsp;
            </span>
            <br className=" md:hidden"  />
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px] "
              style={{ color: "#2DA2DD" }}
            >
              E
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              nterprise
            </span>
          </div>
        </div>
      </div>
      <div
        className="h-[660px] bg-no-repeat relative rounded-br-[340px] shadow  max-xs:rounded-br-[180px]  max-xs:h-[500px]"style={{
          backgroundColor: "#E0DED2",
          backgroundImage: `url(${eje3})`,
          backgroundSize: "60%",
          backgroundPosition: "center",
        }}
        
      >
        <div className=" w-[100%] h-[100%] rounded-br-[340px] relative grid grid-cols-2  max-xs:flex max-xs:flex-col items-center  max-xs:rounded-br-[180px]  " style={{
          backgroundColor: "rgba(224, 222, 210, 0.8)"
        }}>
        <div
          className="w-[100%] h-[100%] flex justify-center items-center font-normal font-['Montserrat'] flex-col max-xs:absolute  max-xs:w-[80%] max-xs:text-center "
          style={{ color: "#1F2029" }}
        >
          <div className="w-[80%] h-auto xs:mb-[1%] max-xs:text-center  ">
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px] xs:border-b-4 xs:pb-4 "
              style={{ color: "#1F2029", borderBlockColor: "#2DA2DD",  }}
            >
              About
            </span>
            <span
              className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px] "
              style={{ color: "#2DA2DD" }}
            >
              {" "}
              Us
            </span>
            
          </div>
          <hr
            className="w-[30px] h-[4px] border-none my-8 max-xs:w-[80%] max-xs:mx-8 max-xs:my-0 max-xs:h-[3px] md:hidden"
            style={{ background: "#2DA2DD" }}
          />
          <p className="xs:w-[80%] text-xl xs:mt-8 max-xs:text-[15px] max-xs:mt-6  " style={{ color: "#1F2029" }}>
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
        <div className="w-[100%] h-[100%] flex justify-center items-center max-xs:w-[80%] max-xs:mt-[40%]  ">
          <div
            className="w-[470px] h-[330px]  max-xs:top-auto max-xs:w-[300px] max-xs:h-[250px] hidden "
            style={{ background: "#2DA2DD" }}
          ></div>
          <div
            className="w-[500px] h-[360px] shadow-lg  max-xs:w-[300px] max-xs:h-[250px] max-xs:hidden "
            style={{
              backgroundImage: `url(${eje4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: ""
            }}
          ></div>
        </div>
        </div>
      </div>
      <div
        className=" flex flex-col items-center pt-12 max-xs:h-[950px] md:h-[90vh] sm:bg-gradient-pattern-sm "
        style={{
          
          backgroundSize: "40% 90%, 40% 90%",
          backgroundPosition: "left, right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1F2029",
         
        }}
      >
        <div className="text-center">
          <span
            className="text-[65px] font-bold font-['Montserrat']  max-xs:text-[50px] "
            style={{ color: "#2DA2DD" }}
          >
            Our
          </span>
          <span
            className="text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px]"
            style={{ color: "#E0DED2" }}
          >
            {" "}
            Values
          </span>
        </div>

        <div className="flex justify-center  mb-4 max-xs:flex-col ">
          <div
            className="w-[320px] h-[270px] mt-[180px] relative flex flex-col items-center mx-8 max-xs:w-[260px] max-xs:h-[230px] max-xs:mt-[10%] max-xs:mx-1 max-xs:mb-6"
            style={{ background: "#E0DED2" }}
          >
            <div
              className="w-[70px] h-[70px] m-6 shadow-lg max-xs:w-[50px] max-xs:h-[50px] max-xs:m-4"
              style={{ background: "#2DA2DD" }}
            />
            <div
              className=" text-2xl text-center font-bold font-['Qwitcher Grypen']  mb-6 max-xs:text-[19px]"
              style={{ color: "#1F2029" }}
            >
              Creativity
              <hr
                className="w-[80%] h-[4px] left-0 absolute border-none "
                style={{ background: "#2DA2DD", zIndex: 1 }}
              />
            </div>
            <div
              className="w-[90%] h-[89.03px] text-center text-[15px] mb-6 font-normal font-['Montserrat'] max-xs:text-[14px] "
              style={{ color: "#1F2029" }}
            >
              Notre état d'esprit privilégie la légèreté, la flexibilité et la
              souplesse dans le travail pour s'adapter aux changements.
            </div>
          </div>
          <div
            className="w-[320px] h-[270px] xs:mt-[60px] relative flex flex-col items-center mx-8 max-xs:w-[260px] max-xs:h-[230px] max-xs:mx-1 max-xs:mb-6 "
            style={{ background: "#2DA2DD" }}
          >
            <div
              className="w-[70px] h-[70px] left-[122px] m-6 shadow-lg max-xs:w-[50px] max-xs:h-[50px] max-xs:m-4"
              style={{ background: "#1F2029" }}
            />
            <div
              className="text-2xl text-center font-bold font-['Qwitcher Grypen']  mb-6 max-xs:text-[19px]"
              style={{ color: "#E0DED2" }}
            >
              Excellence
              <hr
                className="w-[80%] h-[4px] left-0 absolute  border-none max-xs:h-[3px]"
                style={{ background: "#1F2029", zIndex: 1 }}
              />
            </div>
            <div
              className="w-[90%] h-[89.03px] text-center text-[15px] mb-6 font-normal font-['Montserrat'] max-xs:text-[14px]"
              style={{ color: "#E0DED2" }}
            >
              Notre état d'esprit privilégie la légèreté, la flexibilité et la
              souplesse dans le travail pour s'adapter aux changements.
            </div>
          </div>
          <div
            className="w-[320px] h-[270px] xs:mt-[180px] relative flex flex-col items-center  mx-8  max-xs:w-[260px] max-xs:h-[230px]  max-xs:mx-1"
            style={{ background: "#E0DED2" }}
          >
            <div
              className="w-[70px] h-[70px] left-[122px] m-6 shadow-lg max-xs:w-[50px] max-xs:h-[50px] max-xs:m-4"
              style={{ background: "#2DA2DD" }}
            />
            <div className=" text-2xl text-center font-bold font-['Qwitcher Grypen']  mb-6 max-xs:text-[19px]" style={{whiteSpace: "pre-line"}}>
              Professiona-lism
              <hr
                className="w-[80%] h-[4px] left-0 absolute border-none max-xs:h-[3px]"
                style={{ background: "#2DA2DD", zIndex: 1 }}
              />
            </div>
            <div className="w-[90%] h-[89.03px] text-center mb-6 text-[15px] font-normal font-['Montserrat'] max-xs:text-[14px]">
              Notre état d'esprit privilégie la légèreté, la flexibilité et la
              souplesse dans le travail pour s'adapter aux changements.
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col items-center p-12 mt-6 rounded-tl-[350px] shadow max-xs:rounded-tl-[180px] "
        style={{ background: "#E0DED2" }}
      >
        <div className="text-center">
          <span
            className=" text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px] "
            style={{ color: "#1F2029" }}
          >
            Executive{" "}
          </span>
          <span
            className=" text-[65px] font-bold font-['Montserrat'] max-xs:text-[50px] "
            style={{ color: "#2DA2DD" }}
          >
            Board
          </span>
          <hr
            className="w-[80%] h-[4px] mt-6 left-0 absolute  border-none max-xs:h-[3px] "
            style={{ background: "#1F2029", zIndex: 1 }}
          />
          <hr
            className="w-[80%] h-[4px] mt-16 right-0 absolute border-none max-xs:h-[3px] "
            style={{ background: "#2DA2DD", zIndex: 1 }}
          />
        </div>
        <div className="grid grid-cols-3 gap-x-32 gap-y-20 mt-[140px] max-xs:grid-cols-1">
          {imageBlocks.map((block, index) => (
            <ImageWithBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </div>
  );
}
