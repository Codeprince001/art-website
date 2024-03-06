import React from 'react';
import { artVideo, videoBg, videoSpace } from '../assets';
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <section className="lg:flex flex-col lg:flex-row items-center gap-10 mb-12 bg-white">
      <img src={videoSpace} className='lg:ml-[58px] ml-[5px] h-[400px]' />


      <div className='flex flex-col gap-4 font-[400] p-4'>
        <h3 className='text-[14px] text-primary font-bold'>All New Seasons</h3>
        <h2 className='text-[24px] font-bold text-primary'>Meet the mind</h2>
        <p className='lg:max-w-[50%] text-[1.1rem]'>
          Experience our captivating video series, 'Meet the Mind', which delves into the world of art through the lens of various visual artists.
        </p>

        <p className='text-primary text-[1.1rem] underline font-bold'>
          <Link>Watch all new seasons!</Link>
        </p>
      </div>
    </section>
  );
};

export default Video;
