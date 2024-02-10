import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Sponsors() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className='p-5 lg:p-20 xl:pl-56 xl:pr-56 flex flex-col gap-4 bg-beige'>
      <h1 className='text-dark-blue mt-10 text-7xl font-Montserrat font-medium text-center '><span className='text-light-blue'>They </span>trust us</h1>
      <div>
      <Slider {...settings}>
        <div className='bg-white'>LOGO</div>
        <div className='bg-dark-blue'>LOGO</div>
        <div className='bg-white'>LOGO</div>
        <div className='bg-light-blue'>LOGO</div>
        <div className='bg-white'>LOGO</div>
        <div className='bg-dark-blue'>LOGO</div>
      </Slider>
        
      </div>
      
    </section>
  )
}

export default Sponsors