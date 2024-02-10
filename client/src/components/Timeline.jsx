import React from 'react';


const Timeline = () => {
  return (
    
      <section className='flex flex-col h-fit bg-beige rounded-tr-[340] md:flex-row'>
    <div className='bg-light-blue flex flex-col gap-8 pr-20 pl-20 w-[60%]'>
    <h1 className='text-dark-blue flex flex-col gap-4 text-7xl font-Montserrat font-bold mt-56'><span className='text-beige'>Our </span>Achievements</h1>
    <div className='w-[130px] h-[3px] bg-dark-blue'></div>
    <p className='text-beige w-full text-xl font-light opacity-80 font-Montserrat leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
    </div>
    <div className='h-full w-full flex flex-col gap-2 justify-center items-center font-Montserrat p-32'>
      <div className='bg-dark-blue bg-opacity-10 h-fit rounded-tr-full w-[90%] flex gap-5 p-10'>
        <div className='w-[20%]'>
          logo
        </div >
        <div className='flex flex-col gap-3'>
          <h1 className='text-light-blue font-bold text-3xl'>
            2011
          </h1>
          <p className='text-dark-blue font-bold text-3xl '>Cofounding JET</p>
        </div>
      </div>

      <div className='bg-light-blue bg-opacity-10 h-fit w-[90%] flex gap-4 p-10'>
      <div className='w-[20%]'>
          logo
        </div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-light-blue font-bold text-3xl'>
            2012
          </h1>
          <p className='text-dark-blue font-bold text-3xl '>Ascend to the status of an association</p>
        </div> 
      
      </div>

      <div className='bg-dark-blue bg-opacity-10 h-fit w-[90%] flex gap-4 p-10'>
      <div className='w-[20%]'>
          logo
        </div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-light-blue font-bold text-3xl'>
            2020
          </h1>
          <p className='text-dark-blue font-bold text-3xl '>Winning the award of excellence</p>
        </div>
      
      </div>


    </div>
 
  </section>
      
  );
};

export default Timeline;