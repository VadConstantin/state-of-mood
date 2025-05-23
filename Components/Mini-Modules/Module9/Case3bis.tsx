import styled from "styled-components";
import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case3bisProps {
  data: IModuleNine
}

const Case3bis: React.FC<Case3bisProps> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images, description } = data.fields
  
  return(
    <Wrapper>
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
      <Description>
        {description}
      </Description>
      <ImagesWrapper>
        {images.map((image, index) => {
          return <CustomImage src={(image.fields.file as any).url} key={index}/>
        })}
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case3bis

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 8vw;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`

const Description = styled.div`
  padding-top: 20px;
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
`

const ImagesWrapper = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    gap: 2vw;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`

const CustomImage = styled.img`
  width: 23%;
`