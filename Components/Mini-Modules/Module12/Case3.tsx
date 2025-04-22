import styled from "styled-components";
import React from 'react'
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import FirstTitle from "@/Components/FirstTitle";
import { IModuleNine } from "@/Types/contentful";

interface Case3Props {
  data: IModuleNine
}

const Case3: React.FC<Case3Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images } = data.fields
  const firstPic = images[0]
  const secondPic = images[1]
  const thirdPic = images[2]
  
  return(
    <Wrapper>
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
      <ImagesWrapper>
        <FirstImage src={firstPic.fields.file?.url as any} />
        <OtherImagesWrapper>
          <SecondImage src={secondPic.fields.file?.url as any} />
          <ThirdImage src={thirdPic.fields.file?.url as any} />
        </OtherImagesWrapper>
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case3

const Wrapper = styled.div`
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

const FirstImage = styled.img`
  width: 100%;
`
const SecondImage = styled.img`
  width: 50%;
`
const ThirdImage = styled.img`
  width: 50%;
`

const OtherImagesWrapper = styled.div`
  display: flex;
    justify-content: center;
    gap: 30px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 600px) {
    gap: 3vw;
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

