import styled from "styled-components";
import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import { IModuleTwelve } from "@/Types/contentful";
import SecondTitle from "@/Components/SecondTitle";

interface Case3Props {
  data: IModuleTwelve
}

const Case3: React.FC<Case3Props> = ({ data }) => {

  const { backgroundColor, images, fontColor, marginBottom, marginTop } = data.fields
  const firstLineTitle = data.fields?.firstLineTitle || null
  const secondLineTitle = data.fields?.secondLineTitle || null
  const firstPic = images[0]
  const secondPic = images[1]
  const thirdPic = images[2]
  const description = data.fields?.description || null
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <TopWrapper fontColor={fontColor}>
        {firstLineTitle && 
          <FirstTitle>
            {firstLineTitle}
          </FirstTitle>
        }
        {secondLineTitle && 
          <SecondTitle>
            {secondLineTitle}
          </SecondTitle>
        }
        {description && 
          <Description>
            {description}
          </Description>
        }
      </TopWrapper>
      <BottomWrapper bgColor={backgroundColor}>
        <ImagesWrapper>
          <FirstImage src={(firstPic.fields.file as any).url} />
          <SecondImage src={(secondPic.fields.file as any).url} />
          <ThirdImage src={(thirdPic.fields.file as any).url} />
        </ImagesWrapper>
      </BottomWrapper>
    </Wrapper>
  )
}

export default Case3

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
    text-align: start;
  }
`

const TopWrapper = styled.div<{fontColor: string}>`
  color: ${(props) => props.fontColor} !important;
  @media (max-width: 600px) {
    padding: 0px 5vw;
    text-align: start;
  }
`

const BottomWrapper = styled.div<{bgColor: string}>`
  background-color: ${(props) => props.bgColor} !important;
  padding: 30px 0;
  margin-top: 50px;
`

const ImagesWrapper = styled.div`
  padding: 7vw 5vw 7vw 5vw;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
    justify-content: center;
    gap: 2vw;

  @media (max-width: 600px) {
    padding: 0px 5vw 0px 5vw;
  }
`

const FirstImage = styled.img`
  width: 42%;
`
const SecondImage = styled.img`
  width: 22%;
`
const ThirdImage = styled.img`
  width: 32%;
`

const Description = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  padding-top: 40px;
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
    font-size: 2vw;
    line-height: 3vw;
  }
`



