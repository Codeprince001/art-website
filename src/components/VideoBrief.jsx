import React from 'react';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';

const VideoBrief = () => {
  return (
    <section className="lg:flex flex-col md:flex-col lg:flex-row items-center gap-10 pb-12 bg-[#F3F3F3] lg:bg-[#EDDBFE] bgImg">
      {/* <video width="100%">
        <source src="https://youtu.be/T6DEe8XUzbc" type='video/mp4' />
      </video> */}
      <div className='w-full px-2'>
        <ReactPlayer url='https://youtu.be/T6DEe8XUzbc' width={"100%"} />
      </div>

      <div className='flex flex-col gap-4 font-[400] p-4'>
        <h3 className='text-[24px] text-primary font-[600]'>All New Seasons</h3>
        <h2 className='text-[32px] font-bold text-primary'>Meet the mind</h2>
        <p className='lg:max-w-[50%] text-[1.1rem]'>
          Experience our captivating video series, 'Meet the Mind', which delves into the world of art through the lens of various visual artists.
        </p>

        <p className='text-primary text-[16px] font-[500] underline'>
          <Link>Watch all new seasons!</Link>
        </p>
      </div>
    </section>
  );
};

export default VideoBrief;
