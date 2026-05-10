import React from 'react'
import BuyTicketsSlider from '../components/BuyTicketsSlider'
import { useParams } from 'react-router-dom';
import { matches } from '../assets/assets';

const BuyTickets = () => {
    const {id} = useParams()
     const match = matches.find(
        (item) => item.id === parseInt(id)
      );
    
      if (!match) {
        return <p className="text-center mt-10">Match not found.</p>;
      }
  return (
    <div>
      {/* Hero Section */}
      <div>
          <BuyTicketsSlider/>
      </div>
    </div>
  )
}

export default BuyTickets
