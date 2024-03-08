import React from 'react';
import { IoMdArrowUp } from "react-icons/io";

const Copyright = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='flex justify-between p-12 items-center mt-12 mb-4'>
      <div className='text-[12px]'>© 2024 — Copyright</div>
      <div className='border border-primary rounded-full p-4' onClick={scrollToTop}><IoMdArrowUp /></div>
    </div>
  );
};

export default Copyright;
