import React, { useState } from 'react'
import TicketCard, { filterMatches, GROUPS, sortMatches } from './TicketCard';
import { matches } from '../assets/assets';


const TicketsPage = () => {
  const [activeGroup,setActiveGroup] = useState("all");
  const [searchQuery,setSearchQuery] = useState("");
  const [sortBy,setSortBy] = useState("data");

  const filtered = filterMatches(matches,activeGroup,searchQuery);
  const sorted = sortMatches(filtered,sortBy);
  const availableCount = sorted.filter((m)=> m.status !== "sold").length;

  return (
    <div className='max-w-6xl mx-auto px-6 py-10 font-sans'>
      {/* Header */}
      <header className='mb-8'>
        <p className='text-[11px] font-medium tracking-widest uppercase  mb-1'> FIFA World Cup 2026 · USA · Canada · Mexico</p>
        <h1 className='font-mono text-6xl tracking-wider leading-none mb-2  '>World Cup Tickets</h1>
        <p className='text-[13px] '>June 11 – July 19, 2026 · 48 teams · 12 groups · 104 matches</p>
      </header>

      {/* Status Bar */}
      <div className='flex flex-wrap gap-2.5 mb-7'>
        {[
          {label: "matches shown", value: sorted.length},
          {label: "available", value: availableCount},
          {label: "nations", value: 48},
          {label: "venues", value: 16}
        ].map(({label,value})=>(
          <div key={label} className='border border-black/10 rounded-full px-4 py-1 text-xs'>
            <strong className=' font-medium'>{value}</strong> {label}

          </div>
        ))}
      </div>

      {/* Controls */}
       <div className='flex flex-wrap gap-3 items-center mb-8'>

        {/* Group Tabs */}
        <div className='flex flex-wrap border border-black/10 rounded-xl p-1 gap-1'>
        {
          GROUPS.map((g)=>(
            <button key={g}
            onClick={()=>setActiveGroup(g)}              className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer transition-colors ${
                activeGroup === g
                  ? "bg-[#1d9e75] text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-white dark:hover:bg-neutral-800"
              }`}
              >{g=== "all" ? "all" : g}</button>
          ))
        }
        </div>
        {/* Search */}
                <input
          type="text"
          placeholder="Search team or venue…"
          className="flex-1 min-w-44 max-w-xs border border-black/10   rounded-lg px-3.5 py-2 text-sm     transition-colors"
          aria-label="Search matches"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
             
         {/* Sort */}

        <select
          className="border border-black/10   rounded-lg px-3.5 py-2 text-sm  cursor-pointer outline-none transition-colors"
          aria-label="Sort matches"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by date</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="group">Sort by group</option>
        </select>
        </div>  

          {/*Ticket Grid*/}
          <main>
            {
              sorted.length === 0 ? (
                <div className='text-center py-20 text-gray-400' role='status'>
                  <strong className='block text-sm text-gray-500'>No matches found</strong>
                  <p className='text-sm mt-1'>Try a different group or search term.</p>

                </div>
              ) : (
                <div className='grid gap-4'  style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }} role='list' aria-label='Matches tickets'>
                  {
                    sorted.map((match)=>(
                      <TicketCard key={match.id} match={match} />
                    ))
                  }
                </div>
              )
            }
          </main>
    </div>
  )
}

export default TicketsPage
