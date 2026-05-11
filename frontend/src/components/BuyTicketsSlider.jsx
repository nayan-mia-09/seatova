import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { stadium } from '../assets/assets'

const slides = [
  { src: stadium.usa_stadium_1,    alt: 'USA Stadium 1',    label: 'MetLife Stadium',      city: 'New Jersey, USA' },
  { src: stadium.usa_stadium_2,    alt: 'USA Stadium 2',    label: 'SoFi Stadium',         city: 'Los Angeles, USA' },
  { src: stadium.usa_stadium_3,    alt: 'USA Stadium 3',    label: 'AT&T Stadium',         city: 'Dallas, USA' },
  { src: stadium.canada_stadium_1, alt: 'Canada Stadium 1', label: 'BC Place',             city: 'Vancouver, Canada' },
  { src: stadium.canada_stadium_2, alt: 'Canada Stadium 2', label: 'BMO Field',            city: 'Toronto, Canada' },
  { src: stadium.canada_stadium_3, alt: 'Canada Stadium 3', label: 'Commonwealth Stadium', city: 'Edmonton, Canada' },
  { src: stadium.mexico_stadium_1, alt: 'Mexico Stadium 1', label: 'Estadio Azteca',       city: 'Mexico City, Mexico' },
  { src: stadium.mexico_stadium_2, alt: 'Mexico Stadium 2', label: 'Estadio BBVA',         city: 'Monterrey, Mexico' },
  { src: stadium.mexico_stadium_3, alt: 'Mexico Stadium 3', label: 'Estadio Akron',        city: 'Guadalajara, Mexico' },
]

const BuyTicketsSlider = () => {
  const progressRef = useRef(null)

  const onAutoplayTimeLeft = (_s, timeLeft) => {
    if (progressRef.current) {
      progressRef.current.textContent = `${Math.ceil(timeLeft / 1000)}s`
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-5">
      {/* Outer wrapper — no overflow-hidden so badge isn't clipped */}
      <div className="relative w-full max-w-5xl mx-auto">

        {/* Countdown badge — outside the clipping div */}
        <div className="absolute top-3 right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/40 bg-black/30">
          <span ref={progressRef} className="text-white text-xs font-medium">3s</span>
        </div>

        {/* Slider container — overflow-hidden only here for rounded corners */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden">
          <Swiper
            effect="fade"
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, EffectFade]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-full [&_.swiper-pagination]:bottom-2 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet]:opacity-60 [&_.swiper-pagination-bullet-active]:opacity-100"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                {/* Responsive height: 200px mobile → 320px tablet → 450px desktop */}
                <div className="relative w-full h-[200px] sm:h-[320px] md:h-[450px]">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient stops higher so dots aren't covered */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  {/* Label — responsive text size, safe bottom margin for dots */}
                  <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-5 text-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium leading-tight">
                      {slide.label}
                    </h3>
                    <p className="text-[11px] sm:text-xs opacity-70 mt-0.5">{slide.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default BuyTicketsSlider