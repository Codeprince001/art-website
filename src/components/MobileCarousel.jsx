import React from 'react';
import { artCard1, artCard2, artCard3 } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import "swiper/css";

const MobileCarousel = () => {
  return (
    <div className='p-4 mx-auto'>
      <Swiper
        className='bg-white p-4 flex gap-2'
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
            centeredSlidesBounds: true
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      >
        <SwiperSlide><img className='' src={artCard1} /></SwiperSlide>
        <SwiperSlide><img className='' src={artCard2} /></SwiperSlide>
        <SwiperSlide><img className='' src={artCard3} /></SwiperSlide>
      </Swiper>
    </div >

  );
};

export default MobileCarousel;
