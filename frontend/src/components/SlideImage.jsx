import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import { heroImg } from '../assets/assets';

const SlideImage = () => {
  return (
    <Swiper
      slidesPerView={1} // ✅ only one image
      spaceBetween={0}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper w-full"
    >
      {heroImg.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
          src={item.photo} alt="" className="w-full h-[200px] md:h-[400px] object-cover"/>
            <button className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-white text-sm md:text-xl font-bold bg-gray-500 px-4 py-2 rounded">{item.name}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideImage;