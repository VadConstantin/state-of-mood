import styled from "styled-components";
import React from 'react'
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import FirstTitle from "@/Components/FirstTitle";
import { IModuleTwelve } from "@/Types/contentful";

interface Case1Props {
  data: IModuleTwelve
}

const Case1: React.FC<Case1Props> = ({ data }) => {

  const { backgroundColor, images, fontColor, marginBottom, marginTop } = data.fields
  const firstLineTitle = data.fields?.firstLineTitle || null
  const secondLineTitle = data.fields?.secondLineTitle || null
  const firstPic = images[0]
  const description = data.fields?.description || null
  
  return(
    <Wrapper bgColor={backgroundColor} fontColor={fontColor} marginTop={marginTop} marginBottom={marginBottom}>
      {firstLineTitle && 
        <FirstTitle>
          {firstLineTitle}
        </FirstTitle>
      }
      {secondLineTitle && 
        <SecondTitleSmall>
          {secondLineTitle}
        </SecondTitleSmall>
      }
      <ImagesWrapper>
        <CustomImage src={(firstPic.fields.file as any).url} />
      </ImagesWrapper>
      {description && 
        <Description>
          {description}
        </Description>
      }
    </Wrapper>
  )
}

export default Case1

const Wrapper = styled.div<{bgColor: string, fontColor: string, marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  padding: 50px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`

const ImagesWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  width: 100%;
  display: flex;
    justify-content: center;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`

const CustomImage = styled.img`
  width: 80%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Description = styled.div`
  font-family: 'Knockout', sans-serif !important;
  padding-top: 80px;
  max-width: 850px;
  margin: auto;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: clamp(1rem, 1.6vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  text-transform: uppercase;

  @media (max-width: 800px) {
    letter-spacing: 0.5px;
    font-size: 1.5vw;
    line-height: 3vw;
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    font-size: 1.5vw;
    line-height: 4vw;
  }
`