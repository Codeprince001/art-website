import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Newletter = () => {
  return (
    <>
      <div className=' flex flex-col centre pt-4'>
        <div className='w-full'>
          <h1 className='text-[32px] font-semibold w-[40%] text-primary leading-[50px] '>Did Someone say fun mail?</h1>
          <p className='text-[#1e0734] w-[70%] mt-4 mb-4 leading-[19.69px]'>Sign up now to receive exclusive updates, artist features, exciting events, and special offers straight to your inbox.</p>
        </div>

        <div className='flex flex-col'>
          <div className='pb-4 w-full'>
            <input type='text' required placeholder='First name' className='pr-[150px] pl-4 pt-4 pb-4 rounded-full w-[80%]' />
          </div>
          <div className='pb-4'>
            <input type='email' required placeholder='email' className='pr-[150px] pl-4 pt-4 pb-4 rounded-full w-[80%]' />
          </div>
          <div>

            <Link><button className='bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] text-white rounded-[30px] p-4 font-semibold mb-8 text-center'>
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

export default Newletter;
