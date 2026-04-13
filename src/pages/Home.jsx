import HeroCard from "../components/HeroCard"
import SlideImage from "../components/SlideImage"



const Home = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 mt-10">
      <div>
<SlideImage/>
      </div>
      <div className="grid place-items-center">
          <HeroCard/>
      </div>
      
      
    </div>
  )
}

export default Home
