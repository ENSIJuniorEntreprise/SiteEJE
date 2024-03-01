import React from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team from "./../assets/team.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    "title": "Quantum Computing Breakthrough",
    "date": "2023-02-15",
    "description": "Scientists achieve record qubit stability, paving the way for practical quantum computing.",
    "link": "https://example.com/quantum-breakthrough",
    "image": team,
  },
  {
    "title": "AI-Powered Medical Diagnostics",
    "date": "2023-03-10",
    "description": "Advanced AI system diagnoses diseases with high accuracy from medical imaging data.",
    "link": "https://example.com/ai-medical-diagnostics",
    "image": team,
  },
  {
    "title": "5G Expansion Milestone",
    "date": "2023-04-05",
    "description": "Global deployment of 5G surpasses one billion connections, revolutionizing connectivity.",
    "link": "https://example.com/5g-expansion",
    "image": team,
  },
  {
    "title": "Augmented Reality Revolution",
    "date": "2023-05-20",
    "description": "AR technology transforms industries, from gaming to education and healthcare.",
    "link": "https://example.com/ar-revolution",
    "image": team,
  },
  {
    "title": "Cybersecurity Advancements",
    "date": "2023-06-15",
    "description": "New encryption protocol enhances data security, mitigating cyber threats effectively.",
    "link": "https://example.com/cybersecurity-advancements",
    "image": team,
  },
  {
    "title": "SpaceX Mars Mission Update",
    "date": "2023-07-02",
    "description": "Elon Musk announces successful testing of the Starship prototype for the Mars mission.",
    "link": "https://example.com/spacex-mars-update",
    "image": team,
  },
  
];

function News(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          pauseOnHover: false,
          arrows: false,
          autoplaySpeed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow:<FaChevronLeft style={{ color: 'red' }} />,
    nextArrow: <FaChevronRight style={{ color: 'red' }} />
  };

  return (
    <div>
      <section className='xs:px-[2%] py-[50px] mxms:px-[4%] md:px-[9%] ddmd:px-[5%] dlg:px-[9%] bg-beige font-Montserrat flex flex-col gap-[45px]'>
        <h1 className='xxs:text-[2.6rem] text-dark-blue md:text-7xl font-medium text-center font-proxima-nova-bold' style={{ lineHeight: '1' }}>
          <span className='text-light-blue font-proxima-nova-bold'>Latest</span> Events <span className='text-light-blue font-proxima-nova-bold'>&</span> News
        </h1>
        <div className='slick-slider-container'>
          <SlickSlider {...settings}>
            {data.map((item, index) => (
              <div key={index} className='slick-slide pb-[30px]'>
                <div className='xxs:w-[90%] xxs:ml-[5%] mxxs:w-[80%] mxxs:ml-[10%] mmxs:w-[70%] mmxs:ml-[15%] mxms:w-[90%] mxms:ml-[5%] ddmd:w-[90%] ddmd:ml-[5%] bg-white shadow-lg w-[85%] ml-[7.5%] '>
                  <div className='xxs:h-[200px] mxxs:h-[250px] mxms:h-[230px] bg-[#cfcaca] w-full h-[250px]'>
                    <div className='xxs:h-[200px] mxxs:h-[250px] mxms:h-[230px]  w-full md:h-[250px] bg-[#cfcaca]' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} ></div>
                  </div>
                  <div className='xxs:p-3 md:p-6 md:pt-8 flex flex-col gap-1'>
                    <div className='text-dark-blue font-bold text-xl overflow-hidden' style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{item.title}</div>
                    <div className='h-[2px] w-[60px] bg-light-blue'></div>
                    <div className='text-dark-blue opacity-60'>{item.date}</div>
                    <div className='opacity-80 leading-relaxed overflow-hidden' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: '2.5em' }}>{item.description}<br /></div>
                    <a href={item.link} className='text-light-blue border-light-blue border-[2px] p-3 mt-3 font-medium text-llg w-2/4 ddmd:w-3/4 lg:w-2/4 font-proxima-nova-bold whitespace-normal'>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </section>
    </div>
  );
}

export default News;
