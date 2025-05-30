import styled from "styled-components";
import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import { IModuleFive } from "@/Types/contentful";
import SecondTitleSmall from "@/Components/SecondTitleSmall";

interface Case6Props {
  data: IModuleFive
}

const Module5Case6: React.FC<Case6Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, textColor, plainImages, marginBottom, marginTop } = data.fields
  const image1 = data.fields.images[0]
  const image2 = data.fields.images[1]
  const description = data.fields?.description || null
  const borderColorImage1 = data.fields.firstImageBackgroundColor
  const borderColorImage2 = data.fields.secondImageBackgroundColor
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <TopWrapper textColor={textColor as any}>
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
      </TopWrapper>
      <BottomWrapper>
        {!plainImages && 
          <ImagesWrapper>
            <Picture1 src={image1.fields.file?.url as any} borderColor={borderColorImage1 as any}/>
            <Picture2 src={image2.fields.file?.url as any} borderColor={borderColorImage2 as any}/>
          </ImagesWrapper>
        }
        {plainImages && 
          <ImagesWrapper>
            <Picture1Plain src={image1.fields.file?.url as any}/>
            <Picture2Plain src={image2.fields.file?.url as any}/>
          </ImagesWrapper>
        }
      </BottomWrapper>
    </Wrapper>
  )
}

export default Module5Case6

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    text-align: start;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const TopWrapper = styled.div<{textColor: string}>`
  color: ${(props) => props.textColor};
  @media (max-width: 600px) {
    padding: 0px 5vw;
    text-align: start;
  }
`

const BottomWrapper = styled.div`
  padding: 30px 0;
  margin-top: 50px;

  @media (max-width: 600px) {
    padding: 0px;
    text-align: start;
    margin-top: 0;
    padding-top: 20px;
  }
`

const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

const Picture1 = styled.img<{borderColor: string}>`
  width: 50%;
  height: auto;
  padding: 8vw;
  background-color: ${(props) => props.borderColor};

  @media (max-width: 600px) {
    width: 100%;
    padding: 10vw;
  }
`

const Picture2 = styled.img<{borderColor: string}>`
  width: 50%;
  height: auto;
  padding: 8vw;
  background-color: ${(props) => props.borderColor};

  @media (max-width: 600px) {
    width: 100%;
    padding: 10vw;
  }
`

const Picture1Plain = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Picture2Plain = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 600px) {
    width: 100%;
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



