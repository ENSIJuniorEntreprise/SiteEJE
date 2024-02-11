import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageWithBlock from "./ImageWithBlock2";
import { imageBlocks } from "./BE";

export function BEcarousel() {
  

  const [isMaxXs, setIsMaxXs] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMaxXs(window.innerWidth < 600);
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Detach event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount


  // Style object to conditionally apply styles based on isMaxXs
  

  const slickSettings = {
    dots: true,
    infinite: true,
    
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px", // Adjust this value as needed
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="md:hidden" >
      <Slider {...slickSettings}
        className=" gap-x-20 mt-[80px] w-full md:hidden "
      >
        {imageBlocks.map((block, index) => (
          <div className={`flex items-center justify-center ${index === Math.floor(imageBlocks.length / 2) ? 'mx-4' : ''}`} key={index}>
            <ImageWithBlock {...block} />
          </div>
        ))}
      </Slider>
      <hr
            className="w-[80%] h-[4px] mt-16 right-0  absolute border-none max-md:h-[3px]  "
            style={{ background: "#2DA2DD", zIndex: 1 }}
          />
    </div>
  );
}
