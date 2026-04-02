import React from 'react'

const SkillBox = ({ image, title, Description, proficiency }) => {
  return (
    <article className="relative group p-6 sm:p-8 h-full min-h-[380px] flex flex-col items-center text-center
                        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
                        hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500">
      
      {/* Category Icon */}
      <figure className="relative z-10 mb-6 transform group-hover:scale-110 transition-transform duration-500">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
      </figure>

      {/* Main Service Title */}
      <header className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        {/* Specific Skills/Tools List */}
        <p className="text-gray-400 text-sm sm:text-base mb-6 italic">
          {Description}
        </p>
      </header>
      
      {/* Proficiency Progress Bar (Matching your reference image) */}
      <div className="w-full mt-auto relative z-10">
        <div className="flex justify-between items-center mb-2 text-xs sm:text-sm font-medium">
          <span className="text-gray-500 uppercase tracking-widest">Proficiency</span>
          <span className="text-purple-400">{proficiency}%</span>
        </div>
        
        <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden border border-white/5">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>

      {/* Bottom Glow Accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 group-hover:w-full transition-all duration-700"></div>
    </article>
  );
};

export default SkillBox
