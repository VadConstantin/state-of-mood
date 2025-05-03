import styled from "styled-components";
import { useEffect, useState } from "react";
import { Asset } from "contentful";
import Link from "next/link"; 

interface PortfolioGrid {
  elements: { image: Asset, link: string, firstTitle: string, secondTitle: string }[]
}

const PortfolioGrid:React.FC<PortfolioGrid> = ({ elements }) => {
  const [loaded, setLoaded] = useState<boolean[]>([]);

  const objects = elements.map(el => ({
    imageUrl: el?.image?.fields?.file?.url ?? '',
    link: el.link,
    firstTitle: el.firstTitle,
    secondTitle: el.secondTitle
  })).filter(obj => obj.imageUrl);

  useEffect(() => {
    setLoaded(new Array(objects.length).fill(false));
  }, []);

  const handleLoad = (index: number) => {
    setLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <Wrapper>
      {objects.map((obj, i) => (
        <CustomLink href={"/cases-study/" + obj.link} clickable={!!obj.link}>
                  {obj.firstTitle}
          <ImageCard key={i} isVisible={loaded[i]}>
            <img
              src={obj.imageUrl as any}
              alt={`img-${i}`}
              loading="lazy"
              onLoad={() => handleLoad(i)}
            />
          </ImageCard>
        </CustomLink>
        
      ))}
    </Wrapper>
  );
};

export default PortfolioGrid;

const Wrapper = styled.div`
  column-count: 3;
  column-gap: 3vw;

  @media (max-width: 1000px) {
    column-count: 2;
  }

  @media (max-width: 600px) {
    column-count: 1;
  }
`;

const ImageCard = styled.div<{ isVisible: boolean }>`
  break-inside: avoid;
  margin-bottom: 30px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const CustomLink = styled.a<{clickable: boolean}>`
  cursor: ${(props) => props.clickable ? 'pointer' : 'auto'};
`

