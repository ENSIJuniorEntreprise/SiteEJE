import React, { useState } from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rectangle from './../../assets/ENSIJE.jpg'
import Card from './components/Card.jsx'
import ArchiveCard from './components/ArchiveCard.jsx'
import hackprise from "./../../assets/Rectangle 3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const events = [
  { id: 1, date: "23/24", month: "June", title1: "Hack'prise", title2: "2.0", description: "Our recent was a resounding success! On Saturday, April 15, 2023, Riverside Park transformed into a music lover's paradise", image: hackprise },
  { id: 2, date: "23/24", month: "June", title1: "Hack'prise", title2: "3.0", description: "Our recent was a resounding success! On Saturday, April 15, 2023, Riverside Park transformed into a music lover's paradise", image: hackprise },
  { id: 3, date: "23/24", month: "June", title1: "Hack'prise", title2: "4.0", description: "Our recent was a resounding success! On Saturday, April 15, 2023, Riverside Park transformed into a music lover's paradise", image: hackprise },
  { id: 4, date: "23/24", month: "June", title1: "Hack'prise", title2: "5.0", description: "Our recent was a resounding success! On Saturday, April 15, 2023, Riverside Park transformed into a music lover's paradise", image: hackprise },
  { id: 5, date: "23/24", month: "June", title1: "Hack'prise", title2: "6.0", description: "Our recent was a resounding success! On Saturday, April 15, 2023, Riverside Park transformed into a music lover's paradise", image: hackprise },
  { id: 6, date: "23/24", month: "June", title1: "Hack'prise", title2: "7.0", description: "Our recent was a resounding success! On Saturday, April 15, 2023, Riverside Park transformed into a music lover's paradise", image: hackprise },
]



function Events() {
  const [currentSlide, setCurrentSlide] = useState(Math.floor(events.length));
  const preloadImages = (currentSlide) => {
    const prevIndex = currentSlide === 0 ? events.length - 1 : currentSlide - 1;
    const nextIndex = currentSlide === events.length - 1 ? 0 : currentSlide + 1;
    const imagesToPreload = [events[prevIndex].image, events[nextIndex].image];
    imagesToPreload.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    initialSlide: Math.floor(events.length / 2),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '25%',
        },
      },
    ],
    prevArrow: <FaChevronLeft style={{ color: 'red' }} />,
    nextArrow: <FaChevronRight style={{ color: 'red' }} />,
    afterChange: (index) => {
      if(window.innerWidth>900){
      if (index == events.length-1){
        setCurrentSlide(0)
      }
      else {
        setCurrentSlide(index+1)
      }}
      else{
        setCurrentSlide(index)

      }
      },
  };
  return (
    <div>
      <section className="flex items-center justify-center bg-cover bg-center h-[550px]" style={{ backgroundImage: `url(${Rectangle})` }}>
        <div
          className="w-[100%] h-[100%] flex justify-center items-center md:text-center "
          style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }}
        >
          <div
            className="border  p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] "
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
              vents&nbsp;
            </span>




          </div>
        </div>
      </section>
      <section className="bg-[#1f212d]">
        <div className=' items-center bg-[#e0ded2] pb-12 shadow-cardShadow md:rounded-bl-[150px] xl:rounded-bl-[250px]'>
          <p className='font-proxima-nova-bold pt-12 text-center text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide'>Newest
            <span className='font-proxima-nova-bold text-2xl sm:text-4xl md:text-6xl text-[#1f212d] font-bold ml-3 md:ml-5'>Events</span></p>
          <p className='text-[#1f212d] text-xs md:text-xl pb-4 px-4 text-center md:pb-10 text-medium font-proxima-nova'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>


          <span className='flex xxs:flex-col justify-center items-center md:flex-row xxs:w-[95%] xxs:ml-[2.5%] mmmxs:w-[80%] mmmxs:ml-[10%] md:w-[95%] md:ml-[2.5%] sm:w-[70%] sm:ml-[15%] lg:w-[90%] lg:ml-[5%]'>
            <div className='md:w-[500px] lg:w-[600px]'>
              <img
                alt="gallery"
                className="h-full w-full md:rounded-lg sm:rounded-lg object-cover object-center md:w-full md:h-[413px] lg:ml-[0vw]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>

            <div className='flex justify-center xxs:relative xxs:top-[-30px] mmmxs:top-[-50px] md:top-[0px] md:left-[-70px] md:w-[350px] lg:w-[470px] lg:left-[-30px]'>
              <Card
                title1="GET"
                title2="Entrepreneurial"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                isBlueTitle={true}
              />
            </div>
          </span>



          <div className='flex justify-center xxs:pb-12 xxs:pt-5 mmmxs:pt-0 md:pt-5 md:pb-5'>
            <div className='w-[20%] h-1 bg-beige'></div>
            <div className='w-[80%] h-1 bg-light-blue'></div>

          </div>

          <span className='flex xxs:flex-col justify-center items-center md:flex-row-reverse xxs:w-[95%] xxs:ml-[2.5%] mmmxs:w-[80%] mmmxs:ml-[10%] md:w-[95%] md:ml-[2.5%] sm:w-[70%] sm:ml-[15%] lg:w-[90%] lg:ml-[5%]'>
            <div className='md:w-[500px] lg:w-[600px] '>
              <img
                alt="gallery"
                className="h-full w-full md:rounded-lg sm:rounded-lg object-cover object-center md:w-[500px] lg:w-[600px] md:h-[413px]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>

            <div className='flex justify-center xxs:relative xxs:top-[-30px] mmmxs:top-[-50px] md:top-[0px] md:right-[-70px] md:w-[350px] lg:w-[470px] lg:right-[-30px]'>
              <Card
                title1="Hack'Prise"
                title2="3.0"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                isBlueTitle={false}
              />
            </div>
          </span>
        </div>

      </section>



      <section className="flex flex-col bg-[#1f2029] items-center">
        <span className="flex flex-row items-center pt-8 md:pt-16 pb-10 text-center">
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide'>Event</p>
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#e0ded2] font-bold ml-2 md:ml-5'>Archive</p>
        </span>
        <div className='w-[90%] pb-24'>
          <SlickSlider {...settings} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
            {events.map((event, index) => (
              <div key={event.id} className="w-[90%] ml-[2.5%]">
                <ArchiveCard
                  date={event.date}
                  month={event.month}
                  title1={event.title1}
                  title2={event.title2}
                  description={event.description}
                  image={event.image}
                  isActive={index === currentSlide}
                  />
              </div>
            ))}
          </SlickSlider>
        </div>
      </section>






      <section className="bg-[#1f212d]">
        <div className='flex flex-col bg-[#e0ded2] items-center md:rounded-tr-[150px] xl:rounded-tr-[250px]'>
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide pt-44'>Gallery</p>
          <p className='text-[#1f212d] text-xs md:text-xl pb-10 text-medium font-Montserrat text-center w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Events;




