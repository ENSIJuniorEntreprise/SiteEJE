import React from 'react'
import Button from "../components/Button";
import pic from "../assets/team.png";
function Who() {
  return (
    <div className='dark-blue-gradient h-fit w-full px-12 py-32 grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-5'>
      <div className=' flex justify-center m-4 row-start-2 md:row-start-1 scale-150'>
        <img src={pic} width={500} alt='EJE' />
      </div>
      <div className='flex flex-col gap-7 p-8'>
        <h1 className='text-beige text-4xl font-Montserrat font-bold xl:text-7xl'><span className='text-light-blue'>Who</span> are we ?</h1>
        <div className='w-[100px] h-[3px] bg-light-blue'></div>
        <p className='text-beige opacity-80 text-md font-extralight font-Montserrat mb-2 mt-2 w-3/4 md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
        o laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button bc="border-beige" tc="text-beige">Learn more</Button>
        </div>
    </div>

  )
}

export default Who