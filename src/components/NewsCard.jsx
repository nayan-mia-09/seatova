import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { footballNewsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NewsCard = () => {
  const navigate = useNavigate(false)
  return (
    <div className="mb-5">
      <h1 className="sm:text-2xl font-bold mb-5">Latest Football News</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={50} 
        className="mySwiper cursor-pointer"
      >
        {footballNewsData.map((item, index) => (
          <SwiperSlide key={index} onClick={()=> navigate(`/news-details/${item.id}`)}>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600 mt-2">{item.shortDes}</p>
              <p className="text-xs text-gray-400 mt-3">{item.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCard;