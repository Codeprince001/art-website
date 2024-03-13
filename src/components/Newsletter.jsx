import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Newsletter = () => {
  return (
    <>
      <div className=' flex flex-col centre pt-4'>
        <div className='w-full'>
          <h1 className='text-[32px] font-semibold lg:w-[40%]  text-primary leading-[50px] '>Did Someone say fun mail?</h1>
          <p className='text-[#1e0734] lg:w-[70%] mt-4 mb-4 leading-[19.69px]'>Sign up now to receive exclusive updates, artist features, exciting events, and special offers straight to your inbox.</p>
        </div>

        <div className='flex flex-col'>
          <div className='pb-4 w-full'>
            <input type='text' required placeholder='First name' className='pr-[150px] pl-4 py-6 rounded-full lg:w-[80%] w-full' />
          </div>
          <div className='pb-4'>
            <input type='email' required placeholder='email' className='pr-[150px] pl-4 py-6 rounded-full lg:w-[80%] w-full' />
          </div>
          <div>

            <Link><button className='w-full md:w-[20%] bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] text-white rounded-[30px] py-6 font-semibold mb-8 text-center'>
              submit</button></Link>
          </div>
        </div>

      </div>
      <div className=''>
        <Footer />
      </div>
    </>

  );
};

export default Newsletter;
