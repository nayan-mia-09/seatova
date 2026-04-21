
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {Autoplay } from 'swiper/modules';
import { topLeaguesData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const TopLeague = () => {
  const navigate = useNavigate(false)
  return (
    <div className='mt-5 mb-5'>
          <div className='mt-5 mb-5'>
            <h1 className='text-2xl md:text-3xl font-mono font-bold'>Top Leagues Around the World</h1>
          </div>
       <Swiper
            slidesPerView={3}
      spaceBetween={30}
      modules={[ Autoplay]}
      autoplay={{
        delay: 2000, // 2 seconds
        disableOnInteraction: false, // keeps sliding after user touch
      }}
      loop={true} // infinite loop
        className="mySwiper"
      >
       <div className=''>
            {
            topLeaguesData.map((item,index)=>(

              <SwiperSlide onClick={()=> navigate(`/league-details/${item.league_rank}`)} key={index} className="bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-center px-4 py-8 cursor-pointer"
                >
              <img src={item.logo} alt="" className="w-20 mx-auto block mb-3"/>
              <p className="font-semibold">{item.name}</p>
              </SwiperSlide>
            ))
          }
       </div>
         
     
       
      </Swiper>
      
    </div>
  )
}

export default TopLeague
