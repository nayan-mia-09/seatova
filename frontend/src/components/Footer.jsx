import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto border-t border-gray-400 px-4 py-4">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5 mb-2">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <h1
            onClick={() => navigate("/")}
            className="text-2xl sm:text-3xl font-bold text-pink-500 cursor-pointer sm:border-r-2 sm:pr-3"
          >
            🎟️SeatOva
          </h1>

          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-pink-500">Terms</a>
            <a href="#" className="hover:text-pink-500">Privacy</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-400 text-sm text-center">
          <p>©2026 SeatOva. All rights reserved.</p>

          <div className="flex gap-4 text-lg">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;