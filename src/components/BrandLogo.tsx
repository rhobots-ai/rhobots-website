import React from 'react';

type BrandLogoVariant = 'sm' | 'lg';
type BrandLogoTheme = 'light' | 'dark';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  theme?: BrandLogoTheme;
  className?: string;
  label?: string;
  align?: 'start' | 'center';
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'lg',
  theme = 'light',
  className = '',
  label = 'Rhobots',
  align = 'center'
}) => {
  const imageSizeClass = variant === 'sm' ? 'w-8 h-8' : 'w-12 h-12';
  const textSizeClass = variant === 'sm' ? 'text-xl' : 'text-2xl';
  const justificationClass = align === 'start' ? 'justify-start' : 'justify-center';

  // Theme-specific styles
  const isLight = theme === 'light';
  const hoverShadowClass = isLight
    ? 'bg-blue-500/5'
    : 'bg-blue-500/10';
  const borderClass = isLight
    ? 'bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-blue-200 group-hover:to-cyan-200'
    : 'bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-gray-600 group-hover:to-gray-700';
  const bgClass = isLight ? 'bg-white' : 'bg-gray-900';
  const textClass = isLight
    ? 'text-gray-900 group-hover:text-blue-600'
    : 'text-white group-hover:text-blue-400';

  return (
    <div className={`flex items-center ${justificationClass} group ${className}`}>
      <div className="relative">
        {/* Subtle shadow on hover */}
        <div className={`absolute -inset-2 rounded-xl ${hoverShadowClass} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        {/* Simple border wrapper */}
        <div className={`relative p-[1px] rounded-xl ${borderClass} transition-colors duration-300`}>
          <div className={`rounded-xl ${bgClass} p-1.5`}>
            <img
              src="/images/icon.png"
              alt="Rhobots Logo"
              className={`${imageSizeClass} rounded-lg transition-transform duration-300 group-hover:scale-105`}
            />
          </div>
        </div>
      </div>
      <span className={`ml-3 ${textSizeClass} font-bold ${textClass} transition-colors duration-300`}>
        {label}
      </span>
    </div>
  );
};

export default BrandLogo;


