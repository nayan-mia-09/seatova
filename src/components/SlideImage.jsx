


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import assets from '../assets/assets';



const SlideImage = () => {
    const images = [
        assets.fifa_photo_1,
        assets.fifa_photo_2,
        assets.fifa_photo_3,
    ];

    return (
        <div className='mt-5 p-2 '>
    <Slide>
            <div className="each-slide-effect text-end">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
                <button className="border px-4 py-2 bg-white mt-5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">USA</button>
            </div>
            <div className="each-slide-effect text-end">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    
                </div>
                <button className="border px-4 py-2 bg-white mt-5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">Canada</button>
            </div>
            <div className="each-slide-effect text-end">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
                <button className="border px-4 py-2 bg-white mt-5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">Mexico</button>
            </div>
        </Slide>

        </div>
        
    );
};

export default SlideImage;
