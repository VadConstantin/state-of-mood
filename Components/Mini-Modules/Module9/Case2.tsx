import styled from "styled-components";
import React from 'react'
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleNine } from "@/Types/contentful";

interface Case2Props {
  data: IModuleNine
}

const Case2: React.FC<Case2Props> = ({ data }) => {

  const { firstLineTitle, secondLineTitle, images, marginBottom, marginTop } = data.fields

  const lessThan3Images: boolean = images.length < 3
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
      <ImagesWrapper lessThan3Images={lessThan3Images}>
        {images.map((image, index) => {
          return(
            <CustomImage src={(image.fields.file as any).url} key={index} lessThan3Images={lessThan3Images}/>
          )
        })}
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Case2

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

const ImagesWrapper = styled.div<{lessThan3Images: boolean}>`
  overflow: hidden;
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    justify-content: ${(props) => props.lessThan3Images ? 'center' : 'space-between'};
    gap: 30px;

  @media (max-width: 600px) {
    justify-content: ${(props) => props.lessThan3Images ? 'start' : 'space-between'};
    padding-top: 20px;
    gap: 3vw;
  }
`

const CustomImage = styled.img<{lessThan3Images: boolean}>`
  width: ${(props) => props.lessThan3Images ? '49%' : '30%'};
`