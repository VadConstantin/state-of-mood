import { IModule14 } from "@/Types/contentful"
import styled from "styled-components"
import FirstTitle from "../FirstTitle"
import SecondTitleSmall from "../SecondTitleSmall"

interface Module14Props {
  data: IModule14
}

const Module14:React.FC<Module14Props> = ({ data }) => {

  const { 
    firstLineTitle, 
    secondLineTitle, 
    image1, 
    image2, 
    image3, 
    image4, 
    image5, 
    image6,
    image1Caption,
    image2Caption,
    image3Caption,
    image4Caption,
    image5Caption,
    image6Caption } = data.fields

    const description = data.fields?.description || null

  return(
    <Wrapper>
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
        <Row>
        <ImageAndCaptionWrapper>
            <CustomImage src={image1.fields.file?.url as any}/>
            <Caption> {image1Caption} </Caption>
          </ImageAndCaptionWrapper>
          <ImageAndCaptionWrapper>
            <CustomImage src={image2.fields.file?.url as any}/>
            <Caption> {image2Caption} </Caption>
          </ImageAndCaptionWrapper>
        </Row>
        <Row2>
        <ImageAndCaptionWrapper>
            <CustomImage src={image3.fields.file?.url as any}/>
            <Caption> {image3Caption} </Caption>
          </ImageAndCaptionWrapper>
          <ImageAndCaptionWrapper>
            <CustomImage src={image4.fields.file?.url as any}/>
            <Caption> {image4Caption} </Caption>
          </ImageAndCaptionWrapper>
        </Row2>
        <Row>
        <ImageAndCaptionWrapper>
            <CustomImage src={image5.fields.file?.url as any}/>
            <Caption> {image5Caption} </Caption>
          </ImageAndCaptionWrapper>
          <ImageAndCaptionWrapper>
            <CustomImage src={image6.fields.file?.url as any}/>
            <Caption> {image6Caption} </Caption>
          </ImageAndCaptionWrapper>
        </Row>
      </ImagesWrapper>
    </Wrapper>
  )
}

export default Module14

const Wrapper = styled.div`
  padding: 50px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    padding: 50px 5vw 20px 5vw;
    text-align: start;
  }
`

const Description = styled.div`
  padding-top: 20px;
  max-width: 450px;
  margin: auto;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);

  @media (max-width: 800px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
    margin: 0;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
    line-height: 4vw;
    margin: 0;
  }
`

const ImagesWrapper = styled.div`
  padding-top: 50px;
  display: flex; 
    justify-content: space-between;
    gap: 7vw;
`

const Row = styled.div`
  width: 25%;
  display: flex;
    flex-direction: column;
    gap: 10vw;
`

const Row2 = styled.div`
  margin-top: 10vw;
  width: 30%;
  display: flex;
    flex-direction: column;
    gap: 10vw;
`

const CustomImage = styled.img`
  width: 100%;
`

const ImageAndCaptionWrapper = styled.div`
  display: flex;
    flex-direction: column;
    gap: 1vw;
`

const Caption = styled.div`
  font-size: 0.8vw;

  @media (max-width: 1000px) {
    font-size: 1.2vw;
  }

  @media (max-width: 600px) {
    font-size: 1.8vw;
  }
`
