import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./../assets/team.png";
import Button from './Button';

function Carousel() {
  const secondSectionRef = useRef(null);

  const handleButtonClick = () => {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    image,
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <div style={{ position: "absolute", top: "90%", left: "12%", transform: "translate(-50%, -50%)", }}>
        <ul style={{ display: "inline-block", paddingLeft: 0 }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ display: "inline-block", margin: "0 5px" }}>
              <button style={{
                width: 15,
                height: 15,
                backgroundColor: dot.props.className.includes("slick-active") ? "#2DA2DD" : "#e0ded2",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer"
              }} />
            </li>
          ))}
        </ul>
      </div>
    )
  };

  return (
    <section className='w-full h-full carousel-container relative'>
      <div>
        <div className="text-center w-[88%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className='font-bold text-beige text-[4em] leading-tight md:text-left md:text-8xl lg:text-[7em] xl:text-[8em] xl:w-4/6 '>
            <span className='text-light-blue'>ENSI</span> Junior Entreprise
          </div>
          <div className='flex gap-4 mt-10 flex-col md:flex-row'>
            <Button bc='border-none' tc='text-dark-blue' bgc='bg-beige' className='group-hover:text-beige group-hover:border-beige group-hover:bg-transparent group-hover:cursor-pointer hover:ease-in'>
              Submit a request for proposal
            </Button>
            <Button bc='border-black' tc='text-white' bgc='bg-blue-400' className='group-hover:bg-beige group-hover:text-dark-blue '>Download our brochure </Button>
          </div>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className='image-container' style={{ width: '100%', height: '100vh', background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button onClick={handleButtonClick} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Go to Second Section</button>
        </div>
        <div ref={secondSectionRef} className="w-full h-full" style={{ position: "absolute", top: "100%" }}></div>
      </div>
    </section>
  );
}

export default Carousel;