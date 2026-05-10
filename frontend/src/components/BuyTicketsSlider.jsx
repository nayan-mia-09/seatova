import React, { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { stadium } from '../assets/assets'

const BuyTicketsSlider = () => {
  const progressContent = useRef(null)

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  return (
    <div className="container mx-auto p-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full max-w-5xl mx-auto"
      >
        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.usa_stadium_1}
            alt="usa_stadium_1"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.usa_stadium_2}
            alt="usa_stadium_2"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.usa_stadium_3}
            alt="usa_stadium_3"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.canada_stadium_3}
            alt="usa_stadium_1"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.canada_stadium_1}
            alt="usa_stadium_2"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.canada_stadium_3}
            alt="usa_stadium_3"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.mexico_stadium_1}
            alt="usa_stadium_1"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.mexico_stadium_3}
            alt="usa_stadium_2"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center items-center">
          <img
            src={stadium.mexico_stadium_1}
            alt="usa_stadium_3"
            className="w-full h-55 sm:h-80 md:h-112.5 object-contain rounded-xl"
          />
        </SwiperSlide>

        <div className="autoplay-progress text-end" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default BuyTicketsSlider