

const SeatMap = () => {
  return (
    <div>
      <h1>Seat map</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 items-center p-4'>
        <div className='bg-green-100 p-4 rounded-2xl hover:cursor-pointer hover:bg-green-200 items-center text-center'>
            <p className='text-md sm:text-lg md:text-2xl font-medium mb-2'>VIP Box</p>
            <p>Front row</p>
        </div>
        <div className='bg-amber-100 p-4 rounded-2xl hover:cursor-pointer hover:bg-amber-200 items-center text-center'>
            <p className='text-md sm:text-lg md:text-2xl font-medium mb-2'>Premium</p>
            <p>Mid tier</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-2xl hover:cursor-pointer hover:bg-gray-200 items-center text-center'>
            <p className='text-md sm:text-lg md:text-2xl font-medium mb-2'>General</p>
            <p>Upper tier</p>
        </div>
      </div>
    </div>
  )
}

export default SeatMap
