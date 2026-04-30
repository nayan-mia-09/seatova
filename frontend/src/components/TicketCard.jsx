import React from 'react'

// Constants

export const GROUPS = ["all","A","B","C","D","E","F","G","H","I","J","K","L"];
 
// Helpers
function getStatusLabel(s) {
  return { available: "Available", few: "Few left", sold: "Sold out" }[s] ?? s;
}

function getStatusClass(s){
    if(s === "Available") return "bg-emerald-50 text-emerald-800"
    if(s==="few") return "bg-amber-50 text-amber-700"
    return "bg-gray-100 text-gray-500"
}

export const filterMatches = (list,group,query) =>{
    return list.filter((m)=>{
        const groupOk = group === "all" || m.group === group
        const q = query.toLowerCase().trim();
        const searchOk = !q || m.home.toLowerCase().includes(q) || m.away.toLowerCase().includes(q) || m.venue.toLowerCase().includes(q) || m.city.toLowerCase().includes(q);
        return groupOk && searchOk;
    });
}

export const sortMatches = (list,sortBy)=>{
    const copy = [...list]
    if(sortBy === "price-asc") return copy.sort((a,b)=>a.price - b.price);
    if(sortBy === "price-desc") return copy.sort((a,b)=>b.price - a.price);
    if(sortBy === "group") return copy.sort((a,b)=>a.group.localeCompare(b.group));
    return copy.sort((a,b)=>a.id - b.id);
}

function FlagImage({src,alt}){
    return (<img src={src} alt={alt} 
        className='w-6 h-4 object-cover rounded-sm shadow-sm shrink-0'/>);
}


const TicketCard = ({match,onBuy}) => {
    const { group, home, homeFlag, away, awayFlag, date, time, venue, city, section, row, price, status } = match;
    const sold= status === "sold";

  return (
    <article className={`flex flex-col rounded-2xl border border-black/10 dark:border-white/10  overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 ${sold ? "opacity-60" : ""}`} 
    role='listitem'
    aria-label={`${home} vs ${away}`}>
        {/* Top */}
        <div className='relative flex-1 p-4 pb-5'>
            {/* Group Badge + status */}
            <div className='flex justify-between items-center mb-3'>
             <span className='text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded'>Group {group}</span>
             <span className={`text-sm font-medium px-2 py-1 rounded ${getStatusClass(status)}`}>{getStatusLabel(status)}</span>
            </div>

            {/* Team Row */}
            <div className='flex flex-wrap items-center text-center gap-2 mb-2'>
                <FlagImage src={homeFlag} alt={home}/>
                <span className='text-sm font-medium text-gray-900'>{home}</span>
                <span className='text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded'>VS</span>
                <FlagImage src={awayFlag} alt={away}/>
                <span className='text-sm  font-medium text-gray-900'>{away}</span>
            </div>
            {/* Match info */}
            <div className='flex flex-wrap gap-1.5 items-center text-[11px] text-gray-500'>
                <span>{date}</span>
                <span className='w-1 h-1 rounded-full bg-gray-300 inline-block ' aria-hidden = "true"/>
                <span>{time}</span>
                <span className='w-1 h-1 rounded-full bg-gray-300 inline-block ' aria-hidden = "true"/>
                <span>{city}</span>
            </div>
            {/* Stub punch holes */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none" aria-hidden="true">
           <div className="w-2.5 h-1.5 bg-gray-100 dark:bg-neutral-950 rounded-b-md" />
           <div className="w-2.5 h-1.5 bg-gray-100 dark:bg-neutral-950 rounded-b-md" />
          </div>
        </div>

       {/* Dashed tear-off line */}
       <div className="border-t border-dashed border-black/12 dark:border-white/10" />
      {/* Bottom */}
      <div className='flex justify-between items-center px-4 py-3'>
        <div className='text-[11px] text-gray-500 leading-snug'>
            <strong className='block text-xs font-medium text-gray-900 '>{section}</strong>
            {row} . {venue}
        </div>
        <div className='text-right'>
          <div className='font-mono text-2xl leading-none'>
            {price}
          </div>
          <div className='text-[9px] text-gray-400 uppercase tracking-wider'>per ticket</div>
        </div>
      </div>
      {/* Buy Button */}
        <button     className={`w-full py-2.5 text-xs font-medium tracking-wide text-white transition-colors duration-150 ${
          sold
            ? "bg-gray-200 dark:bg-neutral-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
            : "bg-[#1d9e75] hover:bg-[#0f6e56] hover:cursor-pointer"
        }`}
        disabled = {sold}
        aria-disabled ={sold}
        onClick={()=>!sold && onBuy(match)}>
            {sold? "sold out" : "Get tickets"}
        </button>
    </article>
  );
}

export default TicketCard
