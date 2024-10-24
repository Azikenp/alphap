import { useState, useEffect } from "react";
import { carousel } from "./data"; // Importing the carousel data
import { nextBtn, prevBtn } from "./Svgs";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const interval = 6000; // Define interval for auto-slide

  // Function to move to the previous slide
  const prevSlide = () => {
    if (!isSliding) {
      setIsSliding(true);
      setProgress(0); // Reset progress
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
      );
    }
  };

  // Function to move to the next slide
  const nextSlide = () => {
    if (!isSliding) {
      setIsSliding(true);
      setProgress(0); // Reset progress
      setCurrentIndex((prevIndex) =>
        prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Auto-slide effect with progress bar
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextSlide(); // Move to the next slide when progress reaches 100%
          return 0;
        }
        return prevProgress + 100 / (interval / 100); // Update progress
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  // Reset sliding state after the transition
  useEffect(() => {
    const resetSliding = setTimeout(() => {
      setIsSliding(false);
    }, 500); // Match the CSS transition duration (500ms)

    return () => clearTimeout(resetSliding);
  }, [currentIndex]);

  return (
    <div className="px-5 flex-1">
      {/* Display the current item */}
      <div className="h-[320px] lg:h-[299px] w-full shrink-0 relative overflow-hidden">
        {carousel.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0" // Current image stays
                : index < currentIndex
                ? "-translate-x-full" // Slide out to the left
                : "translate-x-full" // Slide in from the right
            }`}
          >
            <img
              className="h-full w-full object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}

        {/* prev and next buttons */}
        <div className="absolute top-[148px] flex items-center justify-between p-4 w-full">
          <div
            onClick={prevSlide}
            className="flex items-center justify-center w-6 h-6 gap-1 rounded-full bg-[#fff] border border-[#E2E8F0] cursor-pointer"
          >
            {prevBtn}
          </div>
          <div
            onClick={nextSlide}
            className="flex items-center justify-center w-6 h-6 gap-1 rounded-full bg-[#fff] border border-[#E2E8F0] cursor-pointer"
          >
            {nextBtn}
          </div>
        </div>

        <div className="absolute top-[189px] flex flex-col p-4 w-full gap-2 bg-custom-gradient h-[131px]">
          <h3 className="text-[#ffffff] text-[12px] font-semibold leading-4">
            {carousel[currentIndex].title}
          </h3>
          <p className="text-[#ffffff] text-[12px] font-normal leading-4">
            {carousel[currentIndex].text}
          </p>

          <div className="flex justify-center gap-1">
            {carousel.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setProgress(0); // Reset progress when manually selecting
                }}
                className={`w-3 h-[3px] rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#fff]"
                    : "bg-[#fff] opacity-[0.3]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
