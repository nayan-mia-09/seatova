import { useParams } from "react-router-dom";
import { footballNewsData } from "../assets/assets";

const NewsCardDetails = () => {
  const { id } = useParams();

  const news = footballNewsData.find(
    (item) => item.id === parseInt(id)
  );

  if (!news) {
    return <p className="text-center mt-10 text-xl">News not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      
      {/* Image */}
      <img
        src={news.photo}
        alt={news.title}
        className="w-full h-auto rounded-xl mb-4 object-cover"
      />

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
        {news.title}
      </h1>

      {/* Date */}
      <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-4">
        {news.date}
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg leading-relaxed">
        {news.description}
      </p>

    </div>
  );
};

export default NewsCardDetails;