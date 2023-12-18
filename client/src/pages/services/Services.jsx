import { useState } from "react";
import { bannerImg } from "../../assets/file";
import Testemonie from "./Testemonie";
import ServiceComponent from "./ServiceComponent";
import DiveButton from "./DiveButton";
import DownloadButton from "./DownloadButton";
import ContactButton from "./ContactButton";
export function Services() {
  // Background pour le banner //
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
  };

  const Services = [
    { text: "web development" },
    { text: "mobile development" },
    { text: "Chat bot" },
    { text: "Desktop application" },
  ];

  const onHover = (event) => {
    event.currentTarget.style.flex = "2";
    // event.currentTarget.querySelector("span").style.transform = "rotate(0)";
  };

  const onHoverOut = (event) => {
    event.currentTarget.style.flex = "1";
    // event.currentTarget.querySelector("span").style.transform =
    //   "rotate(-90deg)";
  };

  const [selectedParagraph, setSelectedParagraph] = useState(1);

  const onClickP = (index) => {
    setSelectedParagraph((prevSelected) =>
      prevSelected === index ? index : index
    );
  };

  const data = [
    {
      title: "FEW WORDS ABOUT WEB DEVELOPMENT",
      subtitle: "We Are Leaders in Web Development",
      content:
        "Aliquam a diam gravida, pretium justo non, facilisis eros. Integer posuere semper condimentum. Praesent tortor dui, auctor a condimentum vitae, aliquam at quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat lacus a sapien pretium, sit amet finibus ex.",
      image: bannerImg,
    },
    {
      title: "ANOTHER TITLE",
      subtitle: "Subtitle for Another Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel felis nec urna hendrerit iaculis. Nullam ut mauris eget nunc gravida tristique eu a libero.",
      image: bannerImg,
    },
    {
      title: "YET ANOTHER TITLE",
      subtitle: "Subtitle for Yet Another Title",
      content:
        "Sed euismod orci nec tellus tristique aliquet. Maecenas sit amet orci at dui tincidunt fermentum. Vestibulum auctor ligula et magna varius, vel fringilla justo malesuada.",
      image: "f",
    },
    {
      title: "A NEW TITLE",
      subtitle: "Subtitle for A New Title",
      content:
        "Vivamus eget facilisis justo. Proin in felis eu elit lacinia feugiat. Ut vitae felis a justo tincidunt volutpat. Duis nec justo et dui tincidunt finibus a non mi.",
      image: bannerImg,
    },
  ];
  const testemonieParts = [
    {
      bannerImg: bannerImg,
      name: "Name1",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      bannerImg: bannerImg,
      name: "Name1",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      bannerImg: bannerImg,
      name: "Name1",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      bannerImg: bannerImg,
      name: "Name2",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      bannerImg: bannerImg,
      name: "Name3",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      bannerImg: bannerImg,
      name: "Name4",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];

  return (
    <div className="bg-[#1F2029]">
      <div
        className=" h-[400px] w-[100%] flex items-center justify-center "
        style={divStyle}
      >
        <div className="border-4 border-[#2DA2DD] md:w-[40vw] flex justify-center items-center ">
          <div className="text-[#E0DED2] text-5xl font-semibold p-4  ">
            <span className="text-[#2DA2DD]">What </span> We do
          </div>
        </div>
      </div>
      {/*  done*/}

      <div className="bg-[#E0DED2] lg:rounded-br-[300px]  sm:rounded-br-[250px] rounded-br-[150px] pb-11">
        <div className=" flex flex-col p-4  items-center ">
          <div className="md:text-5xl text-4xl  font-semibold text-[#1F2029]">
            <span className="text-[#2DA2DD]">Our&nbsp;</span>Services
          </div>
          {/* <h2 className="text-xl font-extralight text-[#1F2029] pt-1">
            Discover the core of our services
          </h2> */}
        </div>

        {/* done */}

        <div className="border-t-2 border-black w-9/12"></div>
        {/* partie services */}
        <div className="lg:flex  justify-center gap-32">
          <ServiceComponent
            paragraphs={Services}
            onClickP={onClickP}
            onHover={onHover}
            onHoverOut={onHoverOut}
            selectedParagraph={selectedParagraph}
          />

          <div className=" ">
            {data.map((item, index) => (
              <div
                className=" flex-col items-center justify-center gap-7 pl-10 pr-10 mt-10 "
                style={{
                  display: selectedParagraph === index + 1 ? "flex" : "none",
                }}
              >
                <div className="pt-1 relative">
                  <div className="bg-[#2DA2DD] sm:w-[450px] w-72 h-60 absolute  sm:right-[-20px] right-[-10px] "></div>
                  <img
                    src={item.image}
                    alt="Banner"
                    className="sm:w-[450px] w-72 h-60 relative top-3"
                  />
                </div>
                <div key={index} className="flex-col sm:w-[500px]">
                  <h2 className="pb-4 text-[#2DA2DD] font-bold ">
                    {item.title}
                  </h2>
                  <h1 className="font-extrabold text-[#1F2029] pb-3 ">
                    {item.subtitle}
                  </h1>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* partie temoignages */}

      <div className=" flex flex-col justify-center items-center ">
        {/* titre  */}
        <div className=" flex text-center justify-center mt-6">
          <div className="sm:text-5xl text-4xl font-semibold text-[#2DA2DD]">
            Testimonials
          </div>
        </div>
        <div className=" sm:grid justify-center mt-20 gap-20 sm:grid-cols-2 flex flex-col px-5">
          {testemonieParts.map((part, index) => (
            <Testemonie
              key={index}
              bannerImg={part.bannerImg}
              name={part.name}
              description={part.description}
            />
          ))}
        </div>
      </div>

      {/* partie contact */}
      <div className="bg-[#E0DED2] rounded-tl-[350px] mt-24 pt-4 pb-16">
        {/* titre */}
        <div className="flex flex-col items-center">
          <div className="text-5xl  font-semibold text-[#1F2029]">
            <span className="text-[#2DA2DD]">Dive </span>Deeper
          </div>
          <h2 className="text-xl  font-semibold text-[#1F2029] pt-1">
            Discover the core of our service
          </h2>
        </div>

        {/* 2éme partie */}
        <div className=" flex justify-center items-center mt-12">
          <div className="inline-grid grid-cols-2 gap-3 items-center text-center ">
            <DiveButton
              bgColor="bg-[#1F2029]"
              title="Our Portfolio"
              subtitle="Discover the core of our services"
            />
            <DiveButton
              bgColor="bg-[#2DA2DD]"
              title="Work With Us"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing"
            />
            <DownloadButton />
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
}
