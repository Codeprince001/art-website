import React from 'react';
import Navbar from '../components/Navbar';
import Swiper from '../components/Swiper';

const Home = () => {
  return (
    <div className='bg-[#F3F3F3]  rounded-bl-full rounded-br-full'>

      <div className='text-[#1E0734] text-[72px] font-semibold pt-6'>
        <h1 className=' mr-8 text-center text-[36px] lg:text-[72px]'>Join Our Artistic</h1>
        <h1 className=' ml-[45%] text-[36px] lg:text-[72px]'>Revolution</h1>
      </div>

      <div className='mt-[30px] text-center text-[18px] mb-[60px]'>
        <p>EARTH is on a mission to transform the</p>
        <p>Art world as we know it</p>
      </div>

      <div className='-mb-12'>
        <Swiper />
      </div>
    </div>
  );
};

export default Home;
