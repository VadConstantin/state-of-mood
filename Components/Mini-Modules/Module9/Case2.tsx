import styled from "styled-components";
import React from "react";
import Link from "next/link";

import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case2Props {
  data: IModuleNine;
}

const Case2: React.FC<Case2Props> = ({ data }) => {
  const {
    firstLineTitle,
    secondLineTitle,
    images,
    marginBottom,
    marginTop,
  } = data.fields;

  const lessThan3Images = images.length < 3;

  const getTagFromDescription = (description?: string) => {
    if (!description) return null;

    const match = description.match(/^TAG:\s*(.+)$/i);

    if (!match) return null;

    return match[1].trim();
  };

  const hasJournalLinks = images.some((image) => {
    const description =
      typeof image.fields.description === "string"
        ? image.fields.description
        : undefined;

    return Boolean(getTagFromDescription(description));
  });

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

      <ImagesWrapper lessThan3Images={lessThan3Images}>
        {images.map((image, index) => {
          const imageUrl = (image.fields.file as any)?.url;

          const description =
            typeof image.fields.description === "string"
              ? image.fields.description
              : undefined;

          const tag = getTagFromDescription(description);

          return (
            <ImageCard
              key={index}
              lessThan3Images={lessThan3Images}
            >
              {tag ? (
                <Link
                  href={{
                    pathname: "/reel-stories",
                    query: {
                      tag: tag,
                    },
                  }}
                  passHref
                  legacyBehavior
                >
                  <ImageLink>
                    <CustomImage
                      src={imageUrl}
                      alt=""
                    />
                  </ImageLink>
                </Link>
              ) : (
                <CustomImage
                  src={imageUrl}
                  alt=""
                />
              )}

              {tag && (
                <Tag>
                  {tag}
                </Tag>
              )}
            </ImageCard>
          );
        })}
      </ImagesWrapper>

      {hasJournalLinks && (
        <ExploreWrapper>
          <CustomButton href='/reel-stories' color='black'>
              EXPLORE THE JOURNAL
          </CustomButton>
        </ExploreWrapper>
      )}

    </Wrapper>
  );
};

export default Case2;

const CustomButton = styled.a<{color: string}>`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  width: max-content;
  border-radius: none;
  border: ${(props) => `2px solid ${props.color}`};
  padding: 1vw 1.5vw 1vw 1.5vw;
  font-size: clamp(0.6rem, 0.8vw, 2rem);
  font-weight: 900;
  letter-spacing: 3px;

  @media (max-width: 800px) {
    border: ${(props) => `1px solid ${props.color}`};
    padding: 1.6vw 2.5vw 1.6vw 2.5vw;
  }

  @media (max-width: 600px) {
    border: ${(props) => `1px solid ${props.color}`};
    padding: 2.5vw 3.2vw 2.5vw 3.2vw;
  }
`

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

const ImagesWrapper = styled.div<{
  lessThan3Images: boolean;
}>`
  overflow: hidden;

  padding-top: 50px;

  position: relative;

  width: 100%;

  display: flex;

  justify-content: ${(props) =>
    props.lessThan3Images ? "center" : "space-between"};

  gap: 30px;

  @media (max-width: 600px) {
    justify-content: ${(props) =>
      props.lessThan3Images ? "start" : "space-between"};

    padding-top: 20px;

    gap: 3vw;
  }
`;

const ImageCard = styled.div<{
  lessThan3Images: boolean;
}>`
  width: ${(props) =>
    props.lessThan3Images ? "49%" : "30%"};

  display: flex;
  flex-direction: column;
`;

const ImageLink = styled.a`
  width: 100%;
  display: block;

  cursor: pointer;

  overflow: hidden;
`;

const CustomImage = styled.img`
  width: 100%;
  height: auto;

  display: block;
`;

const Tag = styled.div`
  padding-top: 15px;

  font-family: "KnockoutHTF", sans-serif !important;

  font-size: clamp(0.7rem, 0.8vw, 1.2rem);

  letter-spacing: 3px;

  text-transform: uppercase;

  text-align: center;

  @media (max-width: 600px) {
    padding-top: 10px;

    font-size: 2vw;
    letter-spacing: 1px;
  }
`;

const ExploreWrapper = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: 30px;
    justify-content: flex-start;
  }
`;

const ExploreLink = styled.a`
  width: clamp(250px, 25vw, 400px);

  padding: 18px 30px;

  border: 2px solid black;

  color: black;
  background-color: transparent;

  font-family: "Knockout", sans-serif !important;

  font-size: clamp(0.8rem, 1vw, 1.2rem);

  letter-spacing: 3px;

  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    padding: 15px 20px;

    font-size: 2.5vw;
    letter-spacing: 2px;
  }
`;