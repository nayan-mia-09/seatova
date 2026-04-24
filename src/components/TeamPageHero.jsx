import React from "react";

const TeamPageHero = () => {
  return (
    <div className="container mx-auto px-4 mt-5">
      
      <div
        className="bg-[url('/photo.webp')] bg-cover bg-center bg-no-repeat rounded-xl flex items-center"
      >
        <div className="py-6 px-6 m-10">
         <span className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold text-white ">Meet the Teams</span> <br /> <br />
         <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white">Competing in FIFA 2026</span>
        </div>
      </div>

    </div>
  );
};

export default TeamPageHero;