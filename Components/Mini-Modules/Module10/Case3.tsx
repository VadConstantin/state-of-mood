import styled from "styled-components";
import React from 'react'
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import FirstTitle from "@/Components/FirstTitle";
import { IModuleNine } from "@/Types/contentful";

interface Case3Props {
  data: IModuleNine
}

const Case3: React.FC<Case3Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle ,images } = data.fields
  const description = data.fields?.description || null 
  const firstPic = images[0]
  const secondPic = images[1] || null
  const thirdPic = images[2] || null
  
  return(
    <Wrapper>
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
      {description && 
        <Description>
          {description}
        </Description>
      }
      <ImagesWrapper>
        <CustomImage src={(firstPic.fields.file as any).url} />
        {secondPic && <CustomImage src={(secondPic.fields.file as any).url} />}
        {thirdPic && <CustomImage src={(thirdPic.fields.file as any).url} />}
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case3

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`

const ImagesWrapper = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    flex-direction: column;
    gap: 30px;

  @media (max-width: 600px) {
    padding-top: 20px;
    gap: 3vw;
  }
`

const CustomImage = styled.img`
  width: 100%;
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