import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { customerReview } from "../assets/assets";

const ReviewPost = () => {
  return (
    <div>
       <h1 className="sm:text-2xl md:text-3xl font-mono font-bold mt-5 mb-5">What fans say about SeatOva</h1>

       <Swiper
               slidesPerView={3}
               spaceBetween={50} 
               className="mySwiper cursor-pointer"
             >
               {customerReview.map((item, index) => (
                 <SwiperSlide key={index}>
                   <div className="bg-yellow-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                     <div className="flex justify-between mb-5">
                        <p className="text-2xl text-amber-400">{item.rating}</p>
                        <p className="text-gray-600 text-sm">{item.date}</p>
                     </div>
                     <p className="text-xl font-mono mb-5">{item.firstImpression}</p>
                     <p className="text-sm text-gray-500 mb-5">{item.description}</p>
                     <p className="text-md font-mono font-bold mask-linear-from-neutral-200">{item.name}</p>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
    </div>
  )
}

export default ReviewPost
