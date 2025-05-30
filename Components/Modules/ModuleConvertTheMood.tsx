import { ImoduleConvertTheMood } from '@/Types/contentful'
import styled from 'styled-components'
import React from 'react'
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import FirstTitle from "@/Components/FirstTitle";

interface ModuleConvertTheMoodProps {
  data: ImoduleConvertTheMood
}

const ModuleConvertTheMood:React.FC<ModuleConvertTheMoodProps> = ({ data }) => {
  const { title, secondTitle, description, textColor, backgroundColor, bannerColor, buttonsColor, marginBottom, marginTop } = data.fields
  return(
    <Wrapper bgColor={backgroundColor} fontColor={textColor} marginTop={marginTop} marginBottom={marginBottom}>
      <Title>
        <FirstTitle>
          {title}
        </FirstTitle>
      </Title>
      <Banner bgColor={bannerColor}>
        <BannerTexts>
          <Description >
          {secondTitle}
          </Description>
        </BannerTexts>
      </Banner>
      <TextsBeforeButtons>
        <SecondTitleSmall>
          {description}
        </SecondTitleSmall>
      </TextsBeforeButtons>
      <ButtonsWrap>
        <Buttons>
          <CustomButton textColor={backgroundColor} BgColor={buttonsColor} href='mailto:contact@stateofmood.com'>
            GET IN TOUCH
          </CustomButton>
          <CustomButton textColor={backgroundColor} BgColor={buttonsColor} href="/cases-study">
            SEE CASES STUDY
          </CustomButton>
        </Buttons>
      </ButtonsWrap>
    </Wrapper>
  )
}

export default ModuleConvertTheMood

const Wrapper = styled.div<{bgColor: string, fontColor: string, marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const Title = styled.div`
  padding: 50px 8vw;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`

const Banner = styled.div<{bgColor: string}>`
  background-color: ${(props) => props.bgColor};
`

const BannerTexts = styled.div`
  padding: 50px 8vw;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`

const TextsBeforeButtons = styled.div`
  width: 55%;
  margin: auto;
  padding: 50px 8vw;

  @media (max-width: 800px) {
    width: 80%;
  }


  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
    margin: 0;
    width: 100%;
  }
`

const ButtonsWrap = styled.div`
  padding: 0px 8vw 50px 8vw;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
  }
`

const Description = styled.div`

  font-family: 'Knockout', sans-serif !important;
  width: 70%;
  margin: auto;
  letter-spacing: 1.5px;
  font-weight: 100;
  line-height: clamp(1rem, 1.6vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  text-transform: uppercase;

  @media (max-width: 800px) {
    letter-spacing: 0.5px;
    font-size: 1.5vw;
    line-height: 3vw;
  }

  @media (max-width: 600px) {
    font-size: 1.5vw;
    line-height: 4vw;
    margin: 0;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
    gap: 2vw;
    justify-content: center;

  @media (max-width: 600px) {
    gap: 5vw;
    justify-content: start;
  }
`

const CustomButton = styled.a<{BgColor: string, textColor: string}>`
  text-decoration: none;
  background-color: ${(props) => props.BgColor};
  color: ${(props) => props.textColor};
  border: none;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  padding: 1vw 2vw 1vw 2vw;
  font-size: clamp(0.7rem, 0.9vw, 2rem);
  font-weight: 500;
  letter-spacing: 3px;

  @media (max-width: 1000px) {
    letter-spacing: 1px;
    font-size: 1.5vw;
  }

  @media (max-width: 800px) {
    padding: 1.7vw 3.5vw 1.7vw 3.5vw;
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    padding: 1.7vw 3.5vw 1.7vw 3.5vw;
    font-size: 2.5vw;
  }
`