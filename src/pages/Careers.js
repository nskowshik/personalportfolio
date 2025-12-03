import React, { useState, useRef, useEffect } from "react";
import { WORK_EXPERIANCE } from "../constants";
import { TextStyle } from "../components";

const Careers = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // 20% of the section needs to be visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-full flex justify-center items-center px-20">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl bg-gray-900/50 px-20 py-[120px] rounded-xl">
        <div className="md:col-span-1 overflow-hidden">
          <div className="flex flex-wrap">
            {['I\'ve', 'extensive', 'experience', 'working', 'with'].map((word, index) => (
              <div 
                key={index}
                className={`fade-in-left mr-3 ${isVisible ? 'visible' : ''}`}
                style={{ 
                  transitionDelay: `${0.1 + index * 0.15}s`
                }}
              >
                <TextStyle size="42" className="font-bold">
                  {word}
                </TextStyle>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="md:col-span-2 grid grid-cols-2 gap-x-8 gap-y-12">
            {WORK_EXPERIANCE.map((el) => (
              <div
                key={el.companyName}
                className="relative flex flex-col justify-center items-center h-24 w-40"
                onMouseEnter={() => setHoveredCompany(el.companyName)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <img
                  src={el.logo.url}
                  alt={el.companyName}
                  className={`max-h-16 w-auto object-contain transition-all duration-300 ease-in-out ${
                    hoveredCompany === el.companyName || el.isPresent ? "" : "grayscale"
                  }`}
                />
                {el.isPresent && (
                  <span className="bg-green-700 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                    Present
                  </span>
                )}
                {hoveredCompany === el.companyName && (
                  <div className="z-10 flex flex-col justify-center items-center bg-black bg-opacity-80 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2">
                      <p className="font-semibold text-sm text-white">
                        {el.companyName}
                      </p>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">
                      {el.startDate} -{" "}
                      {el.endDate || (el.isPresent && "Present")}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
