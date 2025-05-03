import styled from "styled-components";
import { useState } from "react";
import { Asset } from "contentful";

interface PortfolioGrid {
  elements: { image: Asset, link: string, firstTitle: string, secondTitle: string }[];
}

const PortfolioGrid: React.FC<PortfolioGrid> = ({ elements }) => {
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(new Set());
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const objects = elements
    .map(el => ({
      imageUrl: el?.image?.fields?.file?.url ?? '',
      link: el.link,
      firstTitle: el.firstTitle,
      secondTitle: el.secondTitle,
    }))
    .filter(obj => obj.imageUrl);

  const handleLoad = (index: number) => {
    setLoadedIndexes(prev => new Set(prev).add(index));
  };

  const handleImageClick = (url: string) => {
    setFullscreenImage(url);
  };

  const handleClose = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Wrapper>
        {objects.map((obj, i) => (
          <ImageCard key={i} isVisible={loadedIndexes.has(i)} clickable={!!obj.link}>
            <img
              src={obj.imageUrl as any}
              alt={`img-${i}`}
              onLoad={() => handleLoad(i)}
              onClick={(e: any) => {
                if (!obj.link) {
                  e.preventDefault();
                  handleImageClick(obj.imageUrl as any);
                }
              }}
            />
            <OverlayText>
              <MediumTexts>
                <MediumTextsFirstTitle>{obj.firstTitle}</MediumTextsFirstTitle>
                <MediumTextsSecondTitle>{obj.secondTitle}</MediumTextsSecondTitle>
                {obj.link && (
                  <MediumTextsLink href={`/cases-study/${obj.link}`}>
                    Get Inspired
                  </MediumTextsLink>
                )}
              </MediumTexts>
            </OverlayText>
          </ImageCard>
        ))}
      </Wrapper>
      {fullscreenImage && (
        <FullscreenOverlay onClick={handleClose}>
          <FullscreenImage src={fullscreenImage} alt="fullscreen" onClick={(e: any) => e.stopPropagation()} />
        </FullscreenOverlay>
      )}
    </>
  );
};

export default PortfolioGrid;

const Wrapper = styled.div`
  width: 100%;
  column-count: 3;
  column-gap: 3vw;

  @media (max-width: 1000px) {
    column-count: 2;
  }

  @media (max-width: 600px) {
    column-count: 2;
  }
`;

const ImageCard = styled.div<{ isVisible: boolean, clickable: boolean }>`
  display: inline-block;
  position: relative;
  break-inside: avoid;
  margin-bottom: 3vw;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;
  cursor: ${(props) => props.clickable ? 'auto' : 'zoom-in'};

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
    z-index: 1;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const MediumTexts = styled.div`
  position: absolute;
  bottom: 2vw;
  left: 2vw;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`;

const MediumTextsFirstTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 2vw, 3.5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 2.3vw;
  }
`;

const MediumTextsSecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 1.6vw, 3rem);
  text-transform: uppercase;
  padding-bottom: 0.7vw;

  @media (max-width: 600px) {
    font-size: 1.8vw;
  }
`;

const MediumTextsLink = styled.a`
  font-size: 1vw;
  text-decoration: underline;
  text-underline-offset: 0.3vw;
  font-family: 'Knockout', sans-serif !important;

  @media (max-width: 800px) {
    font-size: 2.3vw;
  }

  @media (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const FullscreenImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  animation: scaleUp 0.3s ease;

  @keyframes scaleUp {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
