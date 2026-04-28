import React from 'react'
import { worldCupGroups } from '../assets/assets'

const GroupStage = () => {
  return (
    <div className='container mx-auto p-4'>
      
      <div className='mb-6'>
        <p className='tracking-[3px] font-medium'>Group Stage</p>
        <p className='text-3xl md:text-4xl font-serif font-bold'>
          Groups
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        
        {worldCupGroups.map((group, index) => (
          <div
            key={index}
            className='border rounded-xl p-5 shadow-sm'
          >
            {/* Group Name */}
            <p className='text-xl font-bold mb-4'>
              {group.group}
            </p>

            {/* Teams */}
            <div className='space-y-3'>
              {group.teams.map((team, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 border-b pb-2 hover:bg-blue-100 cursor-pointer'
                >
                  <img
                    src={team.flag}
                    alt={team.name}
                    className='w-8 h-8 rounded-full'
                  />

                  <div>
                    <p className='font-medium'>{team.name}</p>
                    <p className='text-sm text-gray-500'>{team.code}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default GroupStage