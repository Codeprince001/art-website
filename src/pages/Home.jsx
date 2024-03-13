import React from 'react';
import Navbar from '../components/Navbar';
import Swiper from '../components/Swiper';
import { About, Copyright, FAQ, Newsletter, ProductApp, Services, VideoBrief } from '../components';

const Home = () => {
  return (
    <div>

      <div className='bg-[#F3F3F3]  rounded-bl-full rounded-br-full'>
        <Navbar />

        <div className='text-[#1E0734] text-[72px] font-semibold pt-6'>
          <h1 className=' mr-8 text-center text-[32px] lg:text-[72px]'>Join Our Artistic</h1>
          <h1 className=' ml-[45%] text-[32px] lg:text-[72px]'>Revolution</h1>
        </div>

        <div className='mt-[30px] text-center text-[18px] mb-[60px]'>
          <p>EARTH is on a mission to transform the</p>
          <p>Art world as we know it</p>
        </div>

        <div className='-mb-8'>
          <Swiper />
        </div>
      </div>
      <About />
      <VideoBrief />
      <Services />
      <ProductApp />
      <div className='bg-gradient-to-b  from-[#1E0734] to-[#FAF9FF]'>
        <FAQ />
        <Newsletter />
        <Copyright />
      </div>
    </div>
  );
};

export default Home;
