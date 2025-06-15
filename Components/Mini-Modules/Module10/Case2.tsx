import styled from "styled-components";
import React from 'react'
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import FirstTitle from "@/Components/FirstTitle";
import { IModuleTen } from "@/Types/contentful";

interface Case2Props {
  data: IModuleTen
}

const Case2: React.FC<Case2Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, marginBottom, marginTop } = data.fields
  const description = data.fields?.description || null 
  const video = data.fields?.video || null

  const firstPic = !data.fields.images ? null : data.fields.images[0]
  const secondPic = !data.fields.images ? null : data.fields.images[1]

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
      {(firstPic || secondPic) && 
      <ImagesWrapper>
        <CustomImage src={(firstPic?.fields.file as any)?.url} />
        <CustomImage src={(secondPic?.fields.file as any)?.url} />
      </ImagesWrapper>}

      {video && 
      <VideoWrapper>
        <VideoPlayer 
          src={video.fields.file?.url as any} 
          controls 
          muted 
          playsInline 
          autoPlay
          loop
        />
      </VideoWrapper>}
    </Wrapper>
  )
}

export default Case2

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
    flex-direction: column;
    gap: 30px;

  @media (max-width: 600px) {
    padding-top: 20px;
    gap: 3vw;
  }
`

const VideoWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    max-width: 100%;
    margin-top: 17px;
  }
`

const VideoPlayer = styled.video`
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
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