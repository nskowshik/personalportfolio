import React from 'react';

const ScrollArrow = ({ targetId, direction = 'down' }) => {
  const isDown = direction === 'down';

  const arrowIcon = isDown ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  );

  return (
    <a 
      href={`#${targetId}`}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cyan-500 hover:text-cyan-500 animate-bounce z-10"
    >
      {arrowIcon}
    </a>
  );
};

export default ScrollArrow;
