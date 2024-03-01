import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function Number(props) {
  const { number, title } = props;
  const { ref, inView } = useInView();
  const visibleOnce = useRef(false);
  const [displayCount, setDisplayCount] = useState(false); // Commencez par false

  useEffect(() => {
    if (inView) {
      // Marquez la visibilité une fois qu'elle est dans la vue
      visibleOnce.current = true;
    }
    if (visibleOnce.current) {
      // Si c'est visible et que c'est la première fois
      setTimeout(() => {
        // Délai pour commencer le comptage
        setDisplayCount(true); // Mettez le comptage à true
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
