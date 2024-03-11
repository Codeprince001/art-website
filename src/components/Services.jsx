import React from 'react';
import { Offers } from '../assets/constants';
import { Link } from 'react-router-dom';
import Value from './Value';


const Services = () => {
  return (
    <div className='bg-gradient-to-b  from-[#FAF9FF] to-[#1E0734] text-white id="services" p-16'>
      <div className='bg-gradient-to-br from-[#AB54FD] to-[#260742] w-[95%] md:w-[80%] m-auto text-centre md:p-8 p-6 rounded-bl-full rounded-br-full pb-[15%] md:pb-[15%]'>
        <div className='mt-8 font-medium lg:text-[36px]'>
          <p>Why become</p>
          <p className='lg:ml-16 mt-2 md:ml-8'>an Earthling</p>
        </div>

        <div className=' grid grid-cols-1 lg:grid-cols-2 item-stretch gap-[60px] text-[#e1dfdf] mb-16 mt-8 relative md:p-8 w-full'>

          {Offers.map((offer) => {

            return (
              <div key={offer.title} className=' rounded-lg border-2 border-[#FD8EEA] to-slate-900 p-8'>
                <div className=' bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] rounded-lg blur'></div>
                <div className='flex flex-col md:p-2 flex-1 gap-1'>
                  <div className='md:text-[64px] text-[48px] text-[#FD8EEA] self-end mb-2'>{offer.icon && <offer.icon />}</div>
                  <p className='mb-8 md:w-[70%] text-[#FFF] text-[20px] font-[500]'>{offer.title}</p>
                  <p className='text-lg pb-4 text-[#e1dfdf]'>{offer.description}</p>
                </div>
              </div>
            );
          })}


        </div>

        <div className='w-full text-center'>
          <Link><button className='bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] text-white rounded-[30px] p-4 font-semibold text-center' onClick={{}}>
            Join community</button></Link>
        </div>
      </div>

      <Value />
    </div>
  );
};

export default Services;
