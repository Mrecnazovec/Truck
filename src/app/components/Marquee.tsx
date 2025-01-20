'use client'

import { useEffect, useRef } from "react";

interface MarqueeProps {
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ reverse = false }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
	const logos = [
		'/svg/gazprom.svg',
		'/svg/lukoil.svg',
		'/svg/rjd.svg',
		'/svg/gazprom.svg',
		'/svg/lukoil.svg',
		'/svg/rjd.svg',
		'/svg/gazprom.svg',
		'/svg/lukoil.svg',
		'/svg/rjd.svg',
	]

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    let animation: NodeJS.Timeout;
    let currentPosition = 0;

    const startAnimation = () => {
      animation = setInterval(() => {
        
        currentPosition += reverse ? 1 : -1;

        if (Math.abs(currentPosition) >= marquee.scrollWidth / 2) {
          currentPosition = 0; 
        }

        marquee.style.transform = `translateX(${currentPosition}px)`;
      }, 16); 
    };

    startAnimation();

    return () => {
      clearInterval(animation); 
    };
  }, [reverse]); // Следим за изменением направления

  return (
    <div className="overflow-hidden py-4">
      <div
        ref={marqueeRef}
        className="flex gap-8 whitespace-nowrap"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 w-auto"
          />
        ))}
        {/* Дублируем логотипы для бесконечного эффекта */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Logo Duplicate ${index + 1}`}
            className="h-16 w-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
