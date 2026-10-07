import styled from "styled-components";
import React from "react";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case3bisProps {
  data: IModuleNine;
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
  } = data.fields;

  const caption = data.fields?.caption || null;

  const imageContents = [
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
  ];

  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      {firstLineTitle && <FirstTitle>{firstLineTitle}</FirstTitle>}

      {secondLineTitle && (
        <SecondTitleSmall>{secondLineTitle}</SecondTitleSmall>
      )}

      {caption && <Caption>{caption}</Caption>}

      {description && <Description>{description}</Description>}

      <ImagesWrapper>
        {images.map((image, index) => {
          const content = imageContents[index];

          return (
            <ImageCard key={index}>
              <CustomImage src={(image.fields.file as any).url} alt="" />

              {content && (
                <ImageContent>
                  {content.title && (
                    <ImageTitle>{content.title}</ImageTitle>
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
        })}
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Case3bis;

const Wrapper = styled.div<{
  marginTop: string;
  marginBottom: string;
}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

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

const ImageCard = styled.div`
  width: 23%;

  display: flex;
  flex-direction: column;

  text-align: left;

  @media (max-width: 600px) {
    width: 48%;
  }
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
  font-family: 'Knockout', sans-serif !important;

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

  font-family: 'Knockout', sans-serif !important;
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