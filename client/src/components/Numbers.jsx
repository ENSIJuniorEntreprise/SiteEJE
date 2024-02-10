import React from 'react'

function Number(props){
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
    <div className='font-bold font-Montserrat text-beige text-7xl '>+{props.number}</div>
    <div className='w-2/3 h-[3px] mt-5 mb-5 bg-beige'></div>
    <div className='text-light-blue font-Montserrat text-3xl'>{props.title}</div>
    </div> 
  )
}

function Numbers() {
  return (
    <section className='h-fit p-20 landing-bg justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
      <Number number='500' title='lorem ipsum'/>
      <Number number='500' title='lorem ipsum'/>
      <Number number='500' title='lorem ipsum'/>
      <Number number='500' title='lorem ipsum'/>
    </section>
  )
}
export default Numbers

