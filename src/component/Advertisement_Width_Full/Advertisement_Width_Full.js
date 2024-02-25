import React from 'react';
import master_motor from '../../assets/Master Motor.png'

const Advertisement_Width_Full = () => {
  return (
    <div className='bg-slate-300 max-w-[1440px] sm:h-32 h-20 mx-auto flex justify-center items-center'>
        <img className='w-full object-contain cursor-pointer' src={master_motor} alt="" srcset="" />
    </div>
  );
};

export default Advertisement_Width_Full;