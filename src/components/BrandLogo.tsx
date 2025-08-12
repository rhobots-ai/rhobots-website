import React from 'react';

type BrandLogoVariant = 'sm' | 'lg';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  label?: string;
  align?: 'start' | 'center';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'lg', className = '', label = 'Rhobots', align = 'center' }) => {
  const imageSizeClass = variant === 'sm' ? 'w-10 h-10' : 'w-20 h-20';
  const justificationClass = align === 'start' ? 'justify-start' : 'justify-center';

  return (
    <div className={`flex items-center ${justificationClass} group ${className}`}>
      <div className="relative">
        {/* soft glowing aura */}
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-400/25 to-purple-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* gradient ring wrapper */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 group-hover:from-blue-400 group-hover:to-purple-400 transition-colors duration-500">
          <div className="rounded-2xl bg-gray-900/80 p-2 backdrop-blur-sm">
            <img
              src="/images/icon.png"
              alt="Rhobots Logo"
              className={`${imageSizeClass} rounded-xl ring-2 ring-white/10 shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
            />
          </div>
        </div>
      </div>
      <span className="ml-4 text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {label}
      </span>
    </div>
  );
};

export default BrandLogo;


