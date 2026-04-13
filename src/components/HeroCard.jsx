

const HeroCard = () => {
  return (
    <div className='mt-5 p-2'>
        <div className=" grid place-items-center">
            <p className="text-6xl text-center items-center font-bold mb-2">Grab Your Seat for <br /> the Big Game!</p>
            <button className="border px-4 py-2 bg-white mt-5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">Get Tickets</button>
        </div>
    </div>
  )
}

export default HeroCard
