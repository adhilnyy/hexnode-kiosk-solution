import { useState, useEffect } from "react";
import sliderData from "../data/sliderData.json";

const Slider = () => {
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(-5);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setTranslateX((prev) => {
          if (prev <= -100) {
            setDirection(5);
          } else if (prev >= 0) {
            setDirection(-5); 
          }
          return prev + direction;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [direction, isPaused]); 

  return (
    <div
      className="py-4 z-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)} 
    >
      <div
        className="flex w-[100%] transition-transform duration-700"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {sliderData.concat(sliderData).map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="w-[200px] h-[100px] object-cover p-5 bg-transparent"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
