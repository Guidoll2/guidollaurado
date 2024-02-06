'use client'
import { useEffect, useState } from 'react';

const IconoWp = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setShowArrow(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <a href='#nav' > <img
      src="wpcn.svg"
      width={1000}
      height={1000}
      className={`fixed top-10 animate-[pulse_4s_ease-in-out_infinite] left-5 w-9 z-[100] ${showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 transition-opacity ease-in duration-300'}`}
      alt="Flecha"
    /></a>
  );
};

export default IconoWp;