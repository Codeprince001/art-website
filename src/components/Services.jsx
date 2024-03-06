import React from 'react';
import { Offers } from '../assets/constants';
import { Link } from 'react-router-dom';
import Video from './Video';
import Value from './Value';

const Services = () => {
  return (
    <div className='bg-gradient-to-b  from-[#FAF9FF] to-[#1E0734] text-white'>
      <div className='bg-gradient-to-br from-[#AB54FD] to-[#260742] w-[80%] m-auto text-centre p-16 rounded-bl-full rounded-br-full pb-[15%]'>
        <div className='mt-8 font-medium lg:text-[36px]'>
          <p>Why become</p>
          <p className='lg:ml-16 mt-2'>an Earthling</p>
        </div>

        <div className=' grid grid-cols-1 lg:grid-cols-2 item-stretch gap-[60px] text-[#e1dfdf] mb-16 mt-8 relative'>

          {Offers.map((offer) => {
            return (
              <div className=' rounded-lg border-2 border-[#FD8EEA] to-slate-900'>
                <div className=' bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] rounded-lg blur'></div>
                <div className='flex flex-col b p-4 '>
                  <p className='mb-8 w-[50%] text-[#FFF]'>{offer.title}</p>
                  <p className='text-sm text-[#e1dfdf]'>{offer.description}</p>
                </div>
              </div>
            );
          })}


        </div>

        <div className='w-full text-center'>
          <Link><button className='bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] text-white rounded-[30px] p-4 font-semibold text-center'>
            Join community</button></Link>
        </div>
      </div>

      <Value />
    </div>
  );
};

export default Services;
