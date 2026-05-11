import React from 'react'

const OrderSummary = () => {
  return (
    <div className='container mx-auto p-4 mt-5'>
      <h1 className='text-lg sm:text-2xl md:text-2xl font-bold mb-5'>Order Summary</h1>
      <div className='bg-gray-50 p-4 rounded-lg'>

        <div className='flex justify-between mt-5 '>
            <div>
                <p className='text-lg font-bold mb-3'>Premium Box × 1</p>
                <p className='text-md font-light mb-5'>Service fee</p>
            </div>
            <div>
                <p className='font-bold mb-3'>$100</p>
                <p className='font-bold mb-3'>$5</p>
            </div>
        </div>
        <hr className='text-gray-300'/>
        <div className='flex justify-between mt-1'>
            <p className='text-lg font-bold'>Total</p>
            <p className='text-lg font-bold'>$105</p>
        </div>
      </div>

      <div className='mt-5 mb-5'>
        <button className='w-full py-3 bg-emerald-300 hover:bg-emerald-400 cursor-pointer rounded-lg text-lg font-medium'>Book now</button>
      </div>
    </div>
  )
}

export default OrderSummary
