import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverFlow,Pagination,Navigation} from 'swiper';

import Rectangle from './../../assets/Rectangle.png'
import Card from './components/Card.jsx'
import ArchiveCard from './components/ArchiveCard.jsx'

function Events() {
  return (
    <div>
      <section className="flex items-center justify-center bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${Rectangle})` }}>
        <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 border-4 border-500 border-[#2DA2DD] p-4 text-center">
          <h2 className='text-2xl sm:text-3xl md:text-5xl font-Montserrat font-semibold md:leading-[4rem] tracking-wider text-[#e0ded2] "'>Events</h2>
        </div>
      </section>
      <section className="bg-[#1f212d]">
        <div className='flex flex-col items-center bg-[#e0ded2] pb-72 md:pb-48 shadow-cardShadow rounded-bl-[360px]'>
        <span className="flex flex-row items-center justify-between pb-3 pt-6 md:pt-10">
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide'>Newest</p>
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#1f212d] font-bold ml-3 md:ml-5'>Events</p>
        </span>
        <p className='text-[#1f212d] text-xs md:text-xl pb-4 px-4 text-center md:pb-10 text-medium font-Montserrat'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <span className='flex flex-wrap md:flex-row justify-center'>
          <div className='md:mr-[550px]'>
          <img
            alt="gallery"
            className="h-full w-full md:rounded-lg sm:rounded-lg object-cover object-center md:w-[534px] md:h-[413px]"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" 
            />
          </div>
          <div className='absolute md:left-[606px] left-12 mt-12'  >
          <Card 
            title1="GET" 
            title2="Entrepreneurial"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod"
            isBlueTitle={true}>
          </Card>
          </div>
        </span>
        <hr className='border-t-4 border-[rgb(45,162,221)] w-96 sm:w-[500px] md:w-10/12 ml-auto mr-0 my-10 mt-20 shadow-lineShadow'/>
        <span className='flex flex-row items-center'>
          <div className='md:left-[161px] absolute left-20 mt-20'>
          <Card 
            title1="Hack'Prize" 
            title2="3.0"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod"
            isBlueTitle={false}>
          </Card>
          </div>
          <div className='md:ml-[700px]'>
          <img
            alt="gallery"
            className="h-full w-full md:rounded-lg sm:rounded-lg object-cover object-center md:w-[534px] md:h-[413px]"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
          />
          </div>
        </span>
        </div>
      </section>
      <section className="flex flex-col bg-[#1f2029] items-center ">
        <span  className="flex flex-row items-center pt-8 md:pt-16 pb-10 text-center">
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide'>Event</p>
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#e0ded2] font-bold ml-2 md:ml-5'>Archive</p>
        </span>
        <div className="flex md:flex-row items-center space-x-8">
        <Swiper
          effect={'coverflow'}
          grabCursor={ true }
          centeredSlides={ true }
          loop={ true }
          spaceBetween={0}
          slidesPerView={3}
          coverflowEffect={
            {
              rotate: 0 ,
              stretch:0,
              depth: 100,
              modifier:2.5

            }
          }
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><ArchiveCard></ArchiveCard></SwiperSlide>
          <SwiperSlide><ArchiveCard></ArchiveCard></SwiperSlide>
          <SwiperSlide><ArchiveCard></ArchiveCard> </SwiperSlide>
        </Swiper>           
        </div>
      </section>
      <section className="bg-[#1f212d]">
        <div className='flex flex-col bg-[#e0ded2] items-center rounded-tr-[360px]'>
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




