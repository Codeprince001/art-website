import React from 'react';
import { Link } from 'react-router-dom';
import { phone } from '../assets';
import { LuArrowUpRight } from "react-icons/lu";

const ProductApp = () => {
  return (
    <div className='bg-gradient-to-b from-[#1E0734] to-[#FAF9FF]'>
      <div className='md:flex md:flex-row md:p-12 p-4 md:pt-28 pt-24 flex flex-1 flex-col md:justify-between gap-8 justify-items-stretch'>
        <div className='w-[90%] md:w-[40%] p-8'>
          <h2 className='text-[#E1E1E1] md:text-[36px] text-[24px] font-medium mb-4'>Buy and Sell beautiful art works</h2>
          <p className='mb-4 text-[#E1E1E1] text-[14px] pb-10 und'>We are building a place where your art can thrive while cashing out on your talent and artistic skills. A place where buyers can find art they desire and can trust.</p>

          <div className='flex gap-2'>
            <Link>
              <p className='underline text-[#1E0734] font-bold text-[1rem]'>
                Join the waitlist
              </p>
            </Link>
            <p ><LuArrowUpRight className='text-[#1E0734]' /></p>
          </div>
        </div>

        <div className='md:mt-12  ml-[20%] lg:ml-0 md:ml-0 justify-items-end w-fit'>
          <img src={phone} className='' />
        </div>
      </div>
    </div>
  );
};

export default ProductApp;
