
import { topClubsData } from "../assets/assets"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {Autoplay } from 'swiper/modules';
import { topLeaguesData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const TopClub = () => {
  const navigate = useNavigate(false)
  return (
    <div className="mt-5 mb-3 container mx-auto">
      <h1 className="sm:text-2xl md:text-3xl font-mono font-bold">Top Football Clubs</h1>

      <Swiper
            slidesPerView={3}
      spaceBetween={30}
      modules={[ Autoplay]}
      autoplay={{
        delay: 4000, // 2 seconds
        disableOnInteraction: false, // keeps sliding after user touch
      }}
      loop={true} // infinite loop
        className="mySwiper mt-5"
      >
       <div className='mt-5'>
            {
            topClubsData.map((item,index)=>(

              <SwiperSlide onClick={()=> navigate(`/club-details/${item.league_rank}`)} key={index} className="bg-blue-100 rounded-2xl flex flex-col items-center justify-center text-center px-2 py-18 cursor-pointer"
                >
              <img src={item.logo} alt="" className="w-30 mx-auto block mb-3"/>
              <p className="font-semibold">{item.name}</p>
              </SwiperSlide>
            ))
          }
       </div>
         
     
       
      </Swiper>
    </div>
  )
}

export default TopClub
