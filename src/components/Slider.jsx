import { useState, useEffect } from "react";
import sliderData from "../data/sliderData.json";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full h-[300px] relative">
      
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${sliderData.length * 100}%`,
        }}
      >
        {sliderData.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ width: `${100 / sliderData.length}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
