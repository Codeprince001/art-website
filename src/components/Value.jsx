import React from 'react';
import { Link } from 'react-router-dom';
import { artCard1, artCard2, artCard3 } from '../assets';
import MobileCarousel from './MobileCarousel';


const Value = () => {
  return (
    <div className='bg-[#FFFFFF] rounded-tr-full rounded-tl-full mt-12 pb-12'>
      <div className='lg:flex pt-[20%] m-auto lg:pt-[20%]  md:max-lg:flex-col lg:p-12'>
        <div className='flex flex-col m-auto text-center font-semibold mb-4'>
          <h4 className='text-[#1E073440] hidden lg:block text-[48px] md:max-lg:text-[32px] '>partnerships</h4>
          <h4 className='text-[#1E073480] hidden lg:block text-[48px] md:max-lg:text-[32px]'>Marketplace</h4>
          <div className='w-full text-center '>
            <Link><button className='bg-[#7D2AE7] md:max-lg:text-[22px] text-white rounded-[30px] pr-16 pl-16 pt-4 pb-4 lg:text-[40px] text-[24px] font-light italic mb-1 mt-1 text-center'>
              community</button></Link>
          </div>
          <h4 className='text-[#1E073459] hidden lg:block text-[48px] md:max-lg:text-[32px]'>Metaverse</h4>
        </div>

        <div className='flex flex-col  bg-[#DFCAF9] gap-4 p-4 lg:w-[40%] w-[80%] rounded-xl lg:m-auto m-auto'>
          <h4 className='text-[#1E0734] font-medium lg:text-[32px] text-[24px]'>Discover the Earth Community: A Revolution in the Art World </h4>
          <p className='text-[#7668FD] mb-4 lg:text-[24px] text-[18px]'>Our community shines a spotlight on emerging and established artists alike, ensuring their voices are heard and their creations find the perfect audience. </p>
        </div>
      </div>


      <div className='mt-8'>
        <h4 className='text-[#000] lg:text-[36px] mb-6 lg:ml-12 ml-6 text-[24px] font-medium'>We value</h4>


        <div className='hidden md:block'>
          <div className='flex justify-evenly '>
            <div className='lg:w-[400px] '>
              <img src={artCard1} alt='art card love' className='w-[100%]' />
            </div>
            <div className='lg:w-[400px]'>
              <img src={artCard2} alt='art card love' className='w-[100%]' />
            </div>
            <div className='lg:w-[400px]'>
              <img src={artCard3} alt='art card love' className='w-[100%]' />
            </div>
          </div>
        </div>

        <MobileCarousel />

      </div>
    </div>
  );
};

export default Value;
