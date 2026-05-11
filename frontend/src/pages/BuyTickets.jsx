import React from 'react'
import BuyTicketsSlider from '../components/BuyTicketsSlider'
import { useParams } from 'react-router-dom';
import { matches } from '../assets/assets';
import SelectSeat from '../components/SelectSeat';
import TicketQty from '../components/TicketQty';
import SeatMap from '../components/SeatMap';
import OrderSummary from '../components/OrderSummary';


const BuyTickets = () => {
    const {id} = useParams()
     const match = matches.find(
        (item) => item.id === parseInt(id)
      );
    
      if (!match) {
        return <p className="text-center mt-10">Match not found.</p>;
      }
  return (
    <div className='container mx-auto'>
      {/* Hero Section */}
      <div>
         <BuyTicketsSlider/>     
     </div>

{/* Match info card 1 */}
     <div className='mt-5  p-4 bg-gray-100 rounded-2xl'>
          <div className='flex justify-around items-center mt-5'> 
            {/* Home team info */}
               <div className='text-center'>
                    <img src={match.homeFlag} alt="Home team flag" className='h-20 w-20 object-cover rounded-full'/>
                    <p className='text-lg font-medium mt-2'>{match.home}</p>
               </div>
            {/* p text */}
             <div className='text-3xl font-serif font-semibold'>
              <p>VS</p>
             </div>

             {/* Away team info */}
             <div className='text-center'>
              <img src={match.awayFlag} alt="Away team flag" className='h-20 w-20 object-cover rounded-full'/>
              <p className='text-lg font-medium mt-2'>{match.away}</p>
             </div>
          </div>
          <hr  className='text-gray-300 mt-5'/>
          <div className='flex gap-5 mt-2 text-sm font-light'>
            <p>📅 {match.date}</p>
            <p>⏱️{match.time}</p>
            <p>📍{match.venue}</p>
          </div>
     </div>
     {/* Seat category card */}
     <SelectSeat/>
     {/* TicketQty card */}
     <TicketQty/>
     {/* Seat Map card */}
     <SeatMap/>
     {/* Order summary card */}
     <OrderSummary/>
    </div>
  )
}

export default BuyTickets
