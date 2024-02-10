import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    "title": "Quantum Computing Breakthrough",
    "date": "2023-02-15",
    "description": "Scientists achieve record qubit stability, paving the way for practical quantum computing.",
    "link": "https://example.com/quantum-breakthrough"
  },
  {
    "title": "AI-Powered Medical Diagnostics",
    "date": "2023-03-10",
    "description": "Advanced AI system diagnoses diseases with high accuracy from medical imaging data.",
    "link": "https://example.com/ai-medical-diagnostics"
  },
  {
    "title": "5G Expansion Milestone",
    "date": "2023-04-05",
    "description": "Global deployment of 5G surpasses one billion connections, revolutionizing connectivity.",
    "link": "https://example.com/5g-expansion"
  },
  {
    "title": "Augmented Reality Revolution",
    "date": "2023-05-20",
    "description": "AR technology transforms industries, from gaming to education and healthcare.",
    "link": "https://example.com/ar-revolution"
  },
  {
    "title": "Cybersecurity Advancements",
    "date": "2023-06-15",
    "description": "New encryption protocol enhances data security, mitigating cyber threats effectively.",
    "link": "https://example.com/cybersecurity-advancements"
  },
  {
    "title": "SpaceX Mars Mission Update",
    "date": "2023-07-02",
    "description": "Elon Musk announces successful testing of the Starship prototype for the Mars mission.",
    "link": "https://example.com/spacex-mars-update"
  },
  {
    "title": "Robotics in Industry 4.0",
    "date": "2023-08-18",
    "description": "Smart robots optimize manufacturing processes in the era of Industry 4.0.",
    "link": "https://example.com/robotics-industry4"
  },
  {
    "title": "Blockchain for Sustainable Supply Chains",
    "date": "2023-09-12",
    "description": "Blockchain technology ensures transparency and sustainability in global supply chains.",
    "link": "https://example.com/blockchain-supplychains"
  },
  {
    "title": "Neural Interface Breakthrough",
    "date": "2023-10-25",
    "description": "Brain-computer interfaces enable seamless communication between humans and machines.",
    "link": "https://example.com/neural-interface"
  },
  {
    "title": "Renewable Energy Tech Innovation",
    "date": "2023-11-08",
    "description": "New breakthroughs in renewable energy tech promise efficient and eco-friendly solutions.",
    "link": "https://example.com/renewable-energy-innovation"
  }
];


function News() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <section className='p-5 lg:p-20 xl:pl-56 xl:pr-56 bg-beige font-Montserrat flex flex-col gap-5'>
      <h1 className='text-dark-blue mt-10 text-7xl font-Montserrat font-medium text-center '><span className='text-light-blue'>Latest</span> Events & News</h1>
      <div className='grid md:grid-cols-2 gap-2'></div>
      <div className='gap-3'>
      <Slider {...settings}>
      {data.map((item)=>(
       <div className='bg-white shadow-lg'>
            <div className='bg-[#cfcaca] w-full h-40'></div>
            <div className='p-10 flex flex-col gap-3'>
              <div className='text-dark-blue font-bold text-xl'>{item.title}</div>
              <div className='h-[2px] w-[60px] bg-light-blue'></div>
              <div className='text-dark-blue opacity-60'>{item.date}</div>
              <div className='opacity-80 leading-relaxed'>{item.description}</div>
              <div>{item.link}</div>
              <div><button className='text-light-blue border-light-blue border-[2px] p-4 font-medium text-sm w-2/4  '>Learn more</button></div>
            </div>
       </div> 
      ))}
      </Slider>
      </div>
    </section>
  )
}

export default News