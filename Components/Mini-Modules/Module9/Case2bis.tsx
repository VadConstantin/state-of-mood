import styled from "styled-components";
import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case2bisProps {
  data: IModuleNine
}

const Case2bis: React.FC<Case2bisProps> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images, marginBottom, marginTop } = data.fields
  const description = data.fields?.description || null
  const firstPic = images[0]
  const secondPic = images[1]
  const thirdPic = images[2]
  
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
      </Description>}
      <ImagesWrapper>
        <FirstImage src={(firstPic.fields.file as any).url}/>
        <SecondImage src={(secondPic.fields.file as any).url}/>
        <ThirdImage src={(thirdPic.fields.file as any).url}/>
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case2bis

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  padding: 0px 8vw;
  width: 100%;
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
  overflow: hidden;
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    justify-content: space-between;
    gap: 10px;

  @media (max-width: 600px) {
    padding-top: 20px;
    gap: 1vw;
  }
`

const FirstImage = styled.img`
  width: 25%;
`
const SecondImage = styled.img`
  width: 35%;
`
const ThirdImage = styled.img`
  width: 40%;
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
    max-width: 500px;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
    line-height: 4vw;
  }
`