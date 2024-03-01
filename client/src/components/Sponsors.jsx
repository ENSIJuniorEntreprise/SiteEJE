import React, { useState } from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerB from "./../assets/BannerB.png";
import EJE from "./../assets/EJE.jpg"
import ENSIJE from "./../assets/ENSIJE.jpg"
import Team from "./../assets/team.png"

function Sponsors() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1200,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [hoveredId, setHoveredId] = useState(null);

  const sponsorImages = [
    { id: 1, name: "Sponsor 1", description: "Description du sponsor 1 Description du sponsor 1 Description du sponsor 1 Description du zefni bezfub zhdu zejbf znu izhefi n zjedn nzd kjnzi izenf ie sponsor eandvkenvin ienbfianb zbefu bazfub uzdub zhu u  béhu éhd", link: "https://example.com/sponsor1", image: BannerB },
    { id: 2, name: "Sponsor 2", description: "Description du sponsor 2 Description du sponsor 1 Description du sponsor 1 Description du sponsor 1", link: "https://example.com/sponsor2", image: EJE },
    { id: 3, name: "Sponsor 3", description: "Description du sponsor 3 Description du sponsor 1 Description du sponsor 1 Description du sponsor 1 ", link: "https://example.com/sponsor3", image: ENSIJE },
    { id: 4, name: "Sponsor 4", description: "Description du sponsor 4 Description du sponsor 1 Description du sponsor 1 Description du sponsor 1", link: "https://example.com/sponsor4", image: Team },
    { id: 5, name: "Sponsor 5", description: "Description du sponsor 5 Description du sponsor 1 Description du sponsor 1 Description du sponsor 1", link: "https://example.com/sponsor5", image: BannerB },
    { id: 6, name: "Sponsor 6", description: "Description du sponsor 6 Description du sponsor 1 Description du sponsor 1 Description du sponsor 1 ", link: "https://example.com/sponsor6", image: EJE }
  ];

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-[20%] h-1 bg-beige'></div>
        <div className='w-[80%] h-1 bg-dark-blue'></div>
      </div>
      <section className='xxs:px-[1px] xl:px-[9%] xxs:gap-[10px] pb-[70px] flex flex-col md:gap-[45px] bg-beige'>
        <h1 className='xxs:text-[2.8125rem] mxs:text-6xl text-dark-blue mt-10 md:text-7xl font-proxima-nova-bold font-medium text-center '><span className='text-light-blue font-proxima-nova-bold'>They </span>trust us</h1>
        <div>
          <SlickSlider {...settings}>
            {sponsorImages.map((sponsor, index) => (
              <div key={index} className='slick-slide w-[100%] py-[30px]'>
                <div className='xxs:w-[90%] xxs:ml-[5%] xxs:h-[260px] mxxs:w-[80%] mxxs:ml-[10%] xs:h-[280px] mmxs:h-[350px] xsm:h-[230px] md:h-[280px] dmd:h-[230px] xxxs:w-[70%] xxxs:ml-[15%] lg:h-[280px] pb-11' style={{ backgroundImage: `url(${sponsor.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseEnter={() => setHoveredId(sponsor.id)} onMouseLeave={() => setHoveredId(null)}>
                  {hoveredId === sponsor.id &&
                    <div className='xxs:h-[260px] xs:h-[280px] mmxs:h-[350px] xsm:h-[230px] md:h-[280px] dmd:h-[230px] w-full lg:h-[280px] bg-[#1f2029b9] backdrop-filter backdrop-blur-[3px] p-6'>
                      <div className='text-beige font-gilroy-extrabold text-xl'>{sponsor.name}</div>
                      <div className='w-[50%] h-[0.15rem] bg-light-blue my-1'></div>
                      <div className='text-beige font-proxima-nova-regular overflow-hidden' style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>{sponsor.description}</div>
                      <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className='text-light-blue font-proxima-nova-bold text-lg absolute top-[80%]'>Check our website...</a>
                    </div>
                  }
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
