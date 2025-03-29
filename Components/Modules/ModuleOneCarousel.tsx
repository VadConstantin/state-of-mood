import { useEffect, useRef, useState } from "react";
import ModuleOne from "./ModuleOne";
import styled from "styled-components";

interface ModuleOneCarouselProps {
  modulesOneData: any;
}

const ModuleOneCarousel: React.FC<ModuleOneCarouselProps> = ({ modulesOneData }) => {
  const totalSlides = modulesOneData.length;
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index === totalSlides + 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(1);
      }, 600); 
    }
    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(totalSlides);
      }, 600);
    }
  }, [index, totalSlides]);

  const handleDotClick = (i: number) => {
    setIsAnimating(true);
    setIndex(i + 1); 
  };

  const slides = [
    modulesOneData[totalSlides - 1], 
    ...modulesOneData,
    modulesOneData[0],
  ];

  return (
    <CarouselWrapper>
      <Track $index={index} $animate={isAnimating} ref={trackRef}>
        {slides.map((module, i) => (
          <Slide key={i}>
            <ModuleOne moduleOneData={module} />
          </Slide>
        ))}
      </Track>
      <Dots>
        {modulesOneData.map((_: any, i:any) => (
          <Dot
            key={i}
            isActive={index === i + 1}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </Dots>
    </CarouselWrapper>
  );
};

export default ModuleOneCarousel;


const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Track = styled.div<{ $index: number; $animate: boolean }>`
  display: flex;
  width: 100%;
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  transition: ${({ $animate }) => ($animate ? "transform 0.6s ease-in-out" : "none")};
`;

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const Dot = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "white" : "rgba(255,255,255,0.4)")};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
