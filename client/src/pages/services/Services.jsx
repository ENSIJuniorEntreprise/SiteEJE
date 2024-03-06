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
    backgroundPosition: "center"
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
      id: "1",
      title: "FEW WORDS ABOUT WEB DEVELOPMENT",
      subtitle: "We Are Leaders in Web Development",
      content:
        "Aliquam a diam gravida, pretium justo non, facilisis eros. Integer posuere semper condimentum. Praesent tortor dui, auctor a condimentum vitae, aliquam at quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat lacus a sapien pretium, sit amet finibus ex.",
      image: bannerImg,
    },
    {
      id: "2",
      title: "Mobillllllllllllllle",
      subtitle: "Subtitle for Another Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel felis nec urna hendrerit iaculis. Nullam ut mauris eget nunc gravida tristique eu a libero.",
      image: bannerImg,
    },
    {
      id: "3",
      title: "chatbooooooooooot",
      subtitle: "Subtitle for Yet Another Title",
      content:
        "Sed euismod orci nec tellus tristique aliquet. Maecenas sit amet orci at dui tincidunt fermentum. Vestibulum auctor ligula et magna varius, vel fringilla justo malesuada.",
      image: "f",
    },
    {
      id: "4",
      title: "destopppppppppp",
      subtitle: "Subtitle for A New Title",
      content:
        "Vivamus eget facilisis justo. Proin in felis eu elit lacinia feugiat. Ut vitae felis a justo tincidunt volutpat. Duis nec justo et dui tincidunt finibus a non mi.",
      image: bannerImg,
    },
  ];
  const testemonieParts = [
    {
      id: "1",
      bannerImg: bannerImg,
      name: "Name1",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: "2",
      bannerImg: bannerImg,
      name: "Name1",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: "3",
      bannerImg: bannerImg,
      name: "Name1",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: "4",
      bannerImg: bannerImg,
      name: "Name2",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: "5",
      bannerImg: bannerImg,
      name: "Name3",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: "6",
      bannerImg: bannerImg,
      name: "Name4",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];

  return (
    <div className="bg-[#1F2029]">
      <div
        className=" h-[550px] w-[100%] flex items-center justify-center "
        style={divStyle}
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
              W
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              hat&nbsp;
            </span>

            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#2DA2DD" }}
            >
              W
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              e&nbsp;
            </span>
            <br className=" sm:hidden" />
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px] "
              style={{ color: "#2DA2DD" }}
            >
              D
            </span>
            <span
              className="text-[65px]  font-bold proxima-nova-extrabold xxs:text-[50px]"
              style={{ color: "#E0DED2" }}
            >
              o
            </span>
            
          </div>
        </div>
      </div>
      {/*  done*/}

      <div className="bg-[#E0DED2] xxs:rounded-br-[80px] md:rounded-br-[150px] xl:rounded-br-[250px] pb-11">
        <div className=" flex flex-col p-4  items-center ">
          <div className="md:text-5xl text-4xl font-semibold text-[#1F2029]">
            <span className="text-[#2DA2DD]">Our&nbsp;</span>Services
          </div>
          {/* <h2 className="text-xl font-extralight text-[#1F2029] pt-1">
            Discover the core of our services
          </h2> */}
        </div>

        {/* done */}

        <div className="border-t-[3px] border-black w-9/12"></div>


        {/* partie services */}
        <div className="lg:flex justify-center lg:gap-8 xl:gap-32 ">
          <ServiceComponent
            paragraphs={Services}
            onClickP={onClickP}
            onHover={onHover}
            onHoverOut={onHoverOut}
            parag={data[selectedParagraph]}
          />

          <div className="xxs:hidden sm:block">
            {data.map((item, index) => (
              <div
                className=" flex-col items-center justify-center gap-7 pl-10 pr-10 mt-10 "
                style={{
                  display: selectedParagraph === index ? "flex" : "none",
                }}
              >
                <div className="pt-1 relative">
                  <div className="bg-[#2DA2DD] sm:w-[450px] w-72 h-60 absolute  sm:right-[-20px] right-[-10px] "></div>
                  <img
                    src={item.image}
                    style={{ objectFit: 'cover' }}
                    alt="Banner"
                    className="sm:w-[450px] w-72 h-60 relative top-[25px] right-[30px]" />
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
        <div className=" sm:grid justify-center mt-20 gap-20 xl:gap-x-44 xl:gap-y-16 sm:grid-cols-2 flex flex-col px-5">
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
      <div className="bg-[#E0DED2] mt-24 pt-10 pb-16 xxs:rounded-tl-[80px] md:rounded-tl-[150px] xl:rounded-tl-[250px]" >
        {/* titre */}
        <div className="flex flex-col items-center">
          <div className="xxs:mt-[20px] sm:text-5xl text-4xl  font-semibold text-[#1F2029]">
            <span className="text-[#2DA2DD]">Dive </span>Deeper
          </div>
          <h2 className="xxs:text-lg text-xl  font-semibold text-[#1F2029] pt-1">
            Discover the core of our service
          </h2>
        </div>

        {/* 2éme partie */}

        <section className=' xl:w-[90%] xl:ml-[5%] flex flex-col justify-center font-proxima-nova items-center bg-beige h-fit gap-16 p-4'>
          <div className='grid md:grid-cols-2 gap-2'>
            <div className='bg-dark-blue flex flex-col justify-center items-center gap-3 text-beige p-4 lg:p-8'><h1 className='text-3xl'>Our Portfolio</h1>
              <p className='opacity-90 text-center'>Discover the core of our services</p>
            </div>

            <div className=' border-[3px] border-gradient-dark-blue flex justify-center items-center gap-5 px-8 font-medium md:row-start-2'>
            <DownloadButton />
            </div>

            <div className='bg-light-blue flex flex-col justify-center items-center gap-3 text-beige p-4 lg:p-8'>
              <h1 className='text-3xl'>Work With Us</h1>
              <p className='opacity-90 text-center'>Lorem ipsum dolor sit amet</p>
            </div>

            <div className=' border-[3px] border-gradient-blue flex items-center justify-center gap-5 px-8 font-medium'>
              <ContactButton />

            </div>

          </div>
        </section>
      </div>
    </div>
  );
}


