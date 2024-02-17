import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image from "./../assets/team.png"

function Carousel() {

  const images = [
    image,
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];

  const settings = {
    dots: true, // Activer les points indicateurs par défaut
    infinite: true,
    slidesToShow: 1, // Afficher une seule image à la fois
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Augmentez la vitesse d'autoplay
    arrows: false, // Masquer les flèches de navigation
    pauseOnHover: false, // Continuer à défiler même lorsque le curseur est au-dessus
    appendDots: dots => (
      <div style={{ position: "absolute", top: "80%", left: "10%", transform: "translate(-50%, -50%)", }}>
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
    <section className='w-full h-full carousel-container'>
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'relative' }} className='image-container'/>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
