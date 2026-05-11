import React, { useState } from 'react'

const TicketQty = () => {
    const [ticketQty,setTicketQty] = useState('1')

    const increaseQty = () =>{
        if(ticketQty < 10){
            setTicketQty(ticketQty + 1)
        }
    }
    const decreaseQty = () =>{
        if(ticketQty > 1){
            setTicketQty(ticketQty - 1)
        }
    }
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-mono font-bold'>Number of tickets</h1>
         <div className='flex gap-5 p-4 mt-5 items-center'>

         <button onClick={decreaseQty} className='px-6 py-3 bg-gray-100  rounded-lg cursor-pointer'>➖</button>
         <p className='text-lg px-6 py-3 rounded-lg bg-green-200'>{ticketQty}</p>
         <button onClick={increaseQty} className='px-6 py-3 bg-gray-100  rounded-lg cursor-pointer'>➕</button>
         </div>
    </div>
  )
}

export default TicketQty
