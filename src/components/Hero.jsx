import HeroCard from "./HeroCard"
import SlideImage from "./SlideImage"


const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
      <div>
       <SlideImage/>
      </div>
      <div className="grid place-items-center">
          <HeroCard/>
      </div>
    </div>
  )
}

export default Hero
