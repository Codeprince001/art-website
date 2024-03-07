import React from 'react';
import { Link } from 'react-router-dom';
import { phone } from '../assets';

const Adverticement = () => {
  return (
    <div className='bg-gradient-to-b from-[#1E0734] to-[#FAF9FF]'>
      <div className='md:flex md:flex-row md:p-12 p-4 md:pt-28 pt-24 flex-col md:justify-between gap-8'>
        <div className='w-[90%] md:w-[40%]'>
          <h2 className='text-[#E1E1E1] md:text-[36px] text-[24px] font-medium mb-4'>Buy and Sell beautiful art works</h2>
          <p className='mb-4 text-[#E1E1E1] text-[14px] pb-10 und'>We are building a place where your art can thrive while cashing out on your talent and artistic skills. A place where buyers can find art they desire and can trust.</p>

          <Link>
            <p className='underline text-[#1E0734] font-bold text-[1rem]'>
              Join the waitlist
            </p></Link>
        </div>

        <div className='mt-12 w-[70%] '>
          <img src={phone} className='' />
        </div>
      </div>
    </div>
  );
};

export default Adverticement;
