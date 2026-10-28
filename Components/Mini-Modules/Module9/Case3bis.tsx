import styled from "styled-components";
import React, { useEffect, useState } from "react";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case3bisProps {
  data: IModuleNine;
}

interface ImageContent {
  title?: string;
  description?: string;
  link?: string;
}

interface CarouselItem {
  image: any;
  content?: ImageContent;
  originalIndex: number;
}

const Case3bis: React.FC<Case3bisProps> = ({ data }) => {
  const {
    firstLineTitle,
    secondLineTitle,
    images,
    description,
    marginBottom,
    marginTop,

    case3bis1stImageTitle,
    case3bis1stImageDescription,
    case3bis1stImageLink,

    case3bis2ndImageTitle,
    case3bis2ndImageDescription,
    case3bis2ndImageLink,

    case3bis3rdImageTitle,
    case3bis3rdImageDescription,
    case3bis3rdImageLink,

    case3bis4thImageTitle,
    case3bis4thImageDescription,
    case3bis4thImageLink,

    case3bis5thImageTitle,
    case3bis5thImageDescription,
    case3bis5thImageLink,

    case3bis6thImageTitle,
    case3bis6thImageDescription,
    case3bis6thImageLink,

    case3bis7thImageTitle,
    case3bis7thImageDescription,
    case3bis7thImageLink,

    case3bis8thImageTitle,
    case3bis8thImageDescription,
    case3bis8thImageLink,
  } = data.fields;

  const caption = data.fields?.caption || null;

  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const isCarousel = images.length > 4;

  const imageContents: ImageContent[] = [
    {
      title: case3bis1stImageTitle,
      description: case3bis1stImageDescription,
      link: case3bis1stImageLink,
    },
    {
      title: case3bis2ndImageTitle,
      description: case3bis2ndImageDescription,
      link: case3bis2ndImageLink,
    },
    {
      title: case3bis3rdImageTitle,
      description: case3bis3rdImageDescription,
      link: case3bis3rdImageLink,
    },
    {
      title: case3bis4thImageTitle,
      description: case3bis4thImageDescription,
      link: case3bis4thImageLink,
    },
    {
      title: case3bis5thImageTitle,
      description: case3bis5thImageDescription,
      link: case3bis5thImageLink,
    },
    {
      title: case3bis6thImageTitle,
      description: case3bis6thImageDescription,
      link: case3bis6thImageLink,
    },
    {
      title: case3bis7thImageTitle,
      description: case3bis7thImageDescription,
      link: case3bis7thImageLink,
    },
    {
      title: case3bis8thImageTitle,
      description: case3bis8thImageDescription,
      link: case3bis8thImageLink,
    },
  ];

  const items: CarouselItem[] = images.map((image, index) => ({
    image,
    content: imageContents[index],
    originalIndex: index,
  }));


  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 600 ? 2 : 4);
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);


  useEffect(() => {
    if (!isCarousel) return;

    setTransitionEnabled(false);
    setCurrentIndex(visibleCount);
  }, [visibleCount, isCarousel]);

  const carouselItems = isCarousel
    ? [
        ...items.slice(-visibleCount),
        ...items,
        ...items.slice(0, visibleCount),
      ]
    : items;

  const nextSlide = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const previousSlide = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (!isCarousel) return;

    if (currentIndex >= items.length + visibleCount) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleCount);
      return;
    }

    if (currentIndex < visibleCount) {
      setTransitionEnabled(false);
      setCurrentIndex(items.length + currentIndex);
    }
  };

  const renderCard = (
    item: CarouselItem,
    key: string | number
  ) => {
    const { image, content } = item;

    return (
      <ImageCard key={key}>
        <CustomImage
          src={(image.fields.file as any).url}
          alt=""
        />

        {content && (
          <ImageContent>
            {content.title && (
              <ImageTitle>
                {content.title}
              </ImageTitle>
            )}

            {content.description && (
              <ImageDescription>
                {content.description}
              </ImageDescription>
            )}

            {content.link && (
              <ImageLink href={content.link}>
                Meet
              </ImageLink>
            )}
          </ImageContent>
        )}
      </ImageCard>
    );
  };

  return (
    <Wrapper
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {firstLineTitle && (
        <FirstTitle>
          {firstLineTitle}
        </FirstTitle>
      )}

      {secondLineTitle && (
        <SecondTitleSmall>
          {secondLineTitle}
        </SecondTitleSmall>
      )}

      {caption && (
        <Caption>
          {caption}
        </Caption>
      )}

      {description && (
        <Description>
          {description}
        </Description>
      )}

      {isCarousel ? (
        <CarouselWrapper>
          <PreviousButton
            type="button"
            onClick={previousSlide}
            aria-label="Previous"
          >
            ‹
          </PreviousButton>

          <CarouselViewport>
            <CarouselTrack
              $index={currentIndex}
              $visibleCount={visibleCount}
              $transitionEnabled={transitionEnabled}
              onTransitionEnd={handleTransitionEnd}
            >
              {carouselItems.map((item, index) => (
                <CarouselSlide
                  key={`${item.originalIndex}-${index}`}
                  $visibleCount={visibleCount}
                >
                  {renderCard(item, index)}
                </CarouselSlide>
              ))}
            </CarouselTrack>
          </CarouselViewport>

          <NextButton
            type="button"
            onClick={nextSlide}
            aria-label="Next"
          >
            ›
          </NextButton>
        </CarouselWrapper>
      ) : (
        <ImagesWrapper>
          {items.map((item, index) =>
            renderCard(item, index)
          )}
        </ImagesWrapper>
      )}
    </Wrapper>
  );
};

export default Case3bis;

const Wrapper = styled.div<{
  marginTop: string;
  marginBottom: string;
}>`
  margin-top: ${(props) =>
    props.marginTop + "px"};

  margin-bottom: ${(props) =>
    props.marginBottom + "px"};

  width: 100%;
  padding: 0 8vw;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  @media (max-width: 600px) {
    margin-top: ${(props) =>
      parseInt(props.marginTop, 10) / 2 + "px"};

    margin-bottom: ${(props) =>
      parseInt(props.marginBottom, 10) / 2 + "px"};

    padding: 0 5vw;

    text-align: start;
  }
`;

const Description = styled.div`
  padding-top: 30px;

  max-width: 750px;
  margin: auto;

  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);

  @media (max-width: 800px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
    line-height: 4vw;
  }
`;


const ImagesWrapper = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
  gap: 2vw;

  @media (max-width: 600px) {
    padding-top: 20px;
    flex-wrap: wrap;
    gap: 30px 4%;
  }
`;



const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50px;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`;

const CarouselViewport = styled.div`
  width: 100%;

  overflow: hidden;
`;

const CarouselTrack = styled.div<{
  $index: number;
  $visibleCount: number;
  $transitionEnabled: boolean;
}>`
  width: 100%;

  display: flex;

  transform: translateX(
    ${({ $index, $visibleCount }) =>
      `-${$index * (100 / $visibleCount)}%`}
  );

  transition: ${({ $transitionEnabled }) =>
    $transitionEnabled
      ? "transform 0.5s ease-in-out"
      : "none"};
`;

const CarouselSlide = styled.div<{
  $visibleCount: number;
}>`
  flex: 0 0
    ${({ $visibleCount }) =>
      `${100 / $visibleCount}%`};

  padding: 0 1vw;

  @media (max-width: 600px) {
    padding: 0 2vw;
  }
`;

const PreviousButton = styled.button`
  position: absolute;
  left: -4vw;
  top: 50%;
  transform: translateY(-20%);
  z-index: 5;
  border: none;
  background: transparent;
  padding: 10px;
  color: black;
  font-size: 30px;
  font-family: Arial, sans-serif;

  cursor: pointer;

  @media (max-width: 600px) {
    left: -5vw;

    font-size: 24px;
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: -4vw;
  top: 50%;
  transform: translateY(-20%);
  z-index: 5;
  border: none;
  background: transparent;
  padding: 10px;
  color: black;
  font-size: 30px;
  font-family: Arial, sans-serif;

  cursor: pointer;

  @media (max-width: 600px) {
    right: -5vw;

    font-size: 24px;
  }
`;


const ImageCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  text-align: left;
`;

const CustomImage = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  display: block;
  object-fit: cover;
  object-position: center;
`;

const ImageContent = styled.div`
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageTitle = styled.div`
  font-family: "Knockout", sans-serif !important;
  font-size: clamp(0.4rem, 1vw, 1.7rem);
  letter-spacing: 4px;
  line-height: 1;
  text-transform: uppercase;

  @media (max-width: 800px) {
    letter-spacing: 2px;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const ImageDescription = styled.div`
  margin-top: 6px;
  font-size: clamp(0.7rem, 0.75vw, 1.3rem);
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
`;

const ImageLink = styled.a`
  margin-top: 8px;
  color: inherit;
  font-family: "Knockout", sans-serif !important;
  font-size: clamp(0.9rem, 0.8vw, 1.5rem);
  letter-spacing: 2px;
  text-decoration: underline;
  text-underline-offset: 3px;

  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const Caption = styled.div`
  padding-top: 30px;
  font-family: "KnockoutHTF", sans-serif !important;
  font-size: clamp(1rem, 1vw, 2rem);
  letter-spacing: 3px;
  max-width: 800px;
  text-transform: uppercase;
  margin: auto;
  line-height: 25px;

  @media (max-width: 800px) {
    font-size: 1.5vw;
    letter-spacing: 2px;
  }

  @media (max-width: 600px) {
    line-height: 20px;
  }
`;