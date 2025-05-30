import styled from "styled-components";
import React from 'react'
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import FirstTitle from "@/Components/FirstTitle";
import { IModuleNine } from "@/Types/contentful";

interface Case4Props {
  data: IModuleNine
}

const Case4: React.FC<Case4Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images, marginBottom, marginTop } = data.fields
  const description = data.fields?.description || null 
  const firstPic = images[0]
  const secondPic = images[1]
  const thirdPic = images[2]
  const fourthPic = images[3]
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
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
        <CustomImage src={(secondPic.fields.file as any).url} />
        <CustomImage src={(thirdPic.fields.file as any).url} />
        <CustomImage src={(fourthPic.fields.file as any).url} />
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case4

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  padding: 0px 8vw;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
    padding: 0px 5vw 0px 5vw;
    text-align: start;
  }
`

const ImagesWrapper = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    gap: 3vw;
    flex-wrap: wrap;

  @media (max-width: 600px) {
    padding-top: 20px;
    gap: 3vw;
  }
`

const CustomImage = styled.img`
  width: 48.2%;
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