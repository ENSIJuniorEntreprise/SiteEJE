import React from 'react'
//bc= border colour
//tc= text colour
//bgc=  background colour
function Button(props) {
  const { bc, tc, bgc, children, className } = props;
  return (
    <div className={`border-[3px] border-solid ${bc} ${tc} ${bgc} ${className} flex justify-center items-center text-center font-medium px-8 py-5 w-50 md:w-80 md:px-14 md:text-xl lg:w-96 lg:px-16`}>{children}</div>
  )
}
export default Button

      {/* <div className='font-bold text-beige text-[4em] text-center leading-tight md:text-left md:text-8xl lg:text-[7em] xl:text-[8em] xl:w-4/6 '><span className='text-light-blue'>ENSI</span> Junior Entreprise</div>
      <div className=' flex gap-4 mt-10 flex-col md:flex-row'>
        <Button bc='border-none'tc='text-dark-blue' bgc='bg-beige' className='group-hover:text-beige group-hover:border-beige group-hover:bg-transparent group-hover:cursor-pointer hover:ease-in'>Submit a request for proposal</Button>
        <Button bc='border-black' tc='text-white' bgc='bg-blue-400' className='group-hover:bg-beige group-hover:text-dark-blue '>Download our brochure </Button></div> */}