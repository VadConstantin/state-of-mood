import styled from "styled-components";
import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case2Props {
  data: IModuleNine
}

const Case2: React.FC<Case2Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images } = data.fields
  
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
      <ImagesWrapper>
        {images.map((image, index) => {
          return(
            <CustomImage src={(image.fields.file as any).url} key={index}/>
          )
        })}
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case2

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
  overflow: hidden;
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    justify-content: space-between;
    gap: 30px;

  @media (max-width: 600px) {
    padding-top: 20px;
    gap: 3vw;
  }
`

const CustomImage = styled.img`
  width: 30%;
`