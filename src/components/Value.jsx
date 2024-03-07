import React from 'react';
import { Link } from 'react-router-dom';
import { artCard1, artCard2, artCard3 } from '../assets';
import MobileCarousel from './MobileCarousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Value = () => {
  return (
    <div className='bg-[#FFFFFF] rounded-tr-full rounded-tl-full mt-12 pb-12'>
      <div className='lg:flex pt-[20%] m-auto lg:pt-[20%]  md:max-lg:flex-col lg:p-12'>
        <div className='flex flex-col m-auto text-center font-semibold mb-4'>
          <h4 className='text-[#1E073440] hidden lg:block text-[48px] md:max-lg:text-[32px] '>partnerships</h4>
          <h4 className='text-[#1E073480] hidden lg:block text-[48px] md:max-lg:text-[32px]'>Marketplace</h4>
          <div className='w-full text-center flex mx-auto items-center flex-1 gap-4 justify-center text-primary'>
            <div className='block lg:hidden border rounded-full p-8 border-[#DBB7FC]'><FaArrowLeft /></div>
            <Link><button className='bg-[#7D2AE7] md:max-lg:text-[22px] text-white rounded-full px-16 py-8 lg:text-[40px] text-[24px] font-light italic mb-1 mt-1 text-center'>
              community</button></Link>
            <div className='block lg:hidden rounded-full p-8 border-[#DBB7FC] text-black'><FaArrowRight /></div>
          </div>
          <h4 className='text-[#1E073459] hidden lg:block text-[48px] md:max-lg:text-[32px]'>Metaverse</h4>
        </div>

        <div className='flex flex-col  bg-[#DFCAF9] gap-4 p-4 lg:w-[40%] w-[70%] pb-8 rounded-xl lg:m-auto m-auto'>
          <h4 className='text-[#1E0734]  lg:text-[32px] text-[24px] py-4 font-[500]'>Discover the Earth Community: A Revolution in the Art World </h4>
          <p className='text-[#7668FD] mb-4 lg:text-[24px] text-[18px] py-4'>Our community shines a spotlight on emerging and established artists alike, ensuring their voices are heard and their creations find the perfect audience. </p>
        </div>
      </div>


      <div className='mt-8'>
        <h4 className='text-[#000] lg:text-[36px] mb-6 lg:ml-12 ml-6 text-[24px] font-medium '>We value</h4>

        <MobileCarousel />

      </div>
    </div>
  );
};

export default Value;
