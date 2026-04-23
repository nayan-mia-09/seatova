import { useParams } from "react-router-dom";
import { footballNewsData } from "../assets/assets";


const NewsCardDetails = () => {
   const {id} = useParams();

  const news =footballNewsData.find((item)=> item.id === parseInt(id));

  if(!id){
    return <p>News not found.</p>
  }
  return (
    <div className="sm:container sm:mx-auto mt-5">
      <img src={news.photo} alt="" className="mt-2 mb-3"/>
      <p className="sm:text-2xl md:text-3xl font-mono font-bold">{news.title}</p>
      <p className="text-xs font-mono text-gray-500 mt-2 mb-3">{news.date}</p>
      <p className="text-lg">{news.description}</p>
      
    </div>
  )
}

export default NewsCardDetails
