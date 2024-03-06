import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function Number(props) {
  const { number, title } = props;
  const { ref, inView } = useInView({ triggerOnce: true }); 
  const [displayCount, setDisplayCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setDisplayCount(true);
      }, 100);
    }
  }, [inView]);

  return (
    <div className='flex flex-col gap-2 items-center justify-center z-50' ref={ref}>
      {displayCount ? (
        <div className='font-bold font-gilroy-extrabold text-beige text-7xl'>
          +<CountUp end={number} duration={5} />
        </div>
      ) : (
        <div className='font-bold font-gilroy-extrabold text-beige text-7xl'>+{number}</div>
      )}
      <div className='w-2/3 h-[3px] mt-5 mb-5 bg-beige'></div>
      <div className='text-light-blue whitespace-nowrap font-proxima-nova-bold text-3xl'>{title}</div>
    </div>
  );
}

function Numbers() {
  return (
    <section className='h-fit p-20 bg-bd justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
      <Number number={500} title='lorem ipsum' />
      <Number number={500} title='lorem ipsum' />
      <Number number={500} title='lorem ipsum' />
      <Number number={500} title='lorem ipsum' />
    </section>
  );
}

export default Numbers;
