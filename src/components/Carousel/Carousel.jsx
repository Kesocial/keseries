"use client"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import './carousel.css';
import 'swiper/css/navigation';

export function Carousel({items,component:Component}){
  const indexActive = items?.findIndex(item=>item.active)  
  return (
   <div className='w-full mt-5'>
     <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      navigation={true}
      slidesPerView={'auto'}
      onSwiper={(swiper) => swiper.slideTo(indexActive)}
      className='mySwiper'
    >
      {items?.map(item=><SwiperSlide className="w-[200px]" key={crypto.randomUUID()}><Component {...item}/></SwiperSlide>)}
    </Swiper>
   </div>
  );
}