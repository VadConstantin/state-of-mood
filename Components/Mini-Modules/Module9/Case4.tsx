import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import styled from "styled-components";
import SecondTitleSmall from '@/Components/SecondTitleSmall';
import { IModuleNine } from '@/Types/contentful';

interface Case4Props {
  data: IModuleNine
}

const Case4: React.FC<Case4Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images, description } = data.fields
  const firstPic = images[0]
  const secondPic = images[1]
  const thirdPic = images[2]
  const fourthPic = images[3]
  const fifthPic = images[4]

  return(
    <Wrapper>
        <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
      <Description>
        {description}
      </Description>
      <ImagesWrapper>
      <FirstRow>
          <CustomPic src={(firstPic.fields.file as any).url}/>
          <CustomPic src={(secondPic.fields.file as any).url}/>
        </FirstRow>
        <SecondRow>
          <CustomPic src={(thirdPic.fields.file as any).url}/>
          <CustomPic src={(fourthPic.fields.file as any).url}/>
        </SecondRow>
        <ThirdRow>
          <CustomPic src={(fifthPic.fields.file as any).url}/>
        </ThirdRow>
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case4

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
    gap: 1.5vw;
    justify-content: space-between;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`

const FirstRow = styled.div`
  width: 25%;
  display: flex;
    flex-direction: column;
    gap: 1vw;
`

const SecondRow = styled.div`
  width: 31%;
  display: flex;
    flex-direction: column;
    gap: 1vw;
`

const ThirdRow = styled.div`
  width: 40.7%;
`

const CustomPic = styled.img`
  width: 100%;
`