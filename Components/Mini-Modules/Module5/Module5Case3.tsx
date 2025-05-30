import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case3: React.FC<Props> = ({ data }) => {

  const image = data.fields.images[0]
  const textColor = data.fields.textColor || "black"
  const backgroundColor = data.fields.backgroundColorForText || "white"
  const tag = data.fields.tag
  const firstLineTitle = data.fields.firstLineTitle
  const secondLineTitle = data.fields.secondLineTitle
  const middleTitle = data.fields.middleTitle
  const description = data.fields.description
  const pictureHasBorderColor = data.fields.firstImageBackgroundColor || null
  const isTextBefore = data.fields.isTextBefore
  const plainImages = data.fields.plainImages
  const { marginBottom, marginTop } = data.fields
  
  return(
    <Wrapper isTextBefore={isTextBefore as string} marginTop={marginTop} marginBottom={marginBottom}>
      {(pictureHasBorderColor && !plainImages) ? 
          <PictureBorder src={image.fields.file?.url as any} borderColor={pictureHasBorderColor}/> 
        : <Picture src={image.fields.file?.url as any} /> 
      }
      <TextsPart textColor={textColor as any} backgroundColor={backgroundColor}>
        <Texts>
          <Tag>
            {tag}
          </Tag>
          <Titles>
            <FirstLineTitle>
              {firstLineTitle}
            </FirstLineTitle>
            <SecondLineTitle>
              {secondLineTitle}
            </SecondLineTitle>
          </Titles>
          <MiddleTitle>
            {middleTitle}
          </MiddleTitle>
          <Description>
            {description}
          </Description>
        </Texts>
      </TextsPart>
    </Wrapper>
  )
}

export default Module5Case3

const Wrapper = styled.div<{isTextBefore: string, marginTop: string, marginBottom: string}>`
  display: flex;
  flex-direction: ${(props) => props.isTextBefore === "yes" ? 'row-reverse' : 'row'};
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    flex-wrap: wrap;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const Picture = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const PictureBorder = styled.img<{borderColor: string}>`
  width: 50%;
  height: auto;
  padding: 8vw;
  background-color: ${(props) => props.borderColor};

  @media (max-width: 600px) {
    width: 100%;
    padding: 10vw;
  }
`

const TextsPart = styled.div<{backgroundColor: string, textColor: string}>`
  background-color: ${(props) => props.backgroundColor};
  width: 50%;
  color: ${(props) => props.color};
  display: flex;
    justify-content: center;
    align-items: center;
  padding: 50px;

  @media (max-width: 600px) {
    width: 100%;
    min-height: 300px;
    padding: 50px 5vw;
  }
`

const Texts = styled.div`
  width: fit-content;
  margin: auto;
`

const Tag = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.6rem, 0.7rem, 1.5rem);
  letter-spacing: 2px;

  @media (max-width: 800px) {
    font-size: 1vw;
  }
`

const Titles = styled.div`
  display: flex;
    flex-direction: column;
    gap: -10px;
`

const FirstLineTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 3.5vw, 5rem);

  @media (max-width: 800px) {
    font-size: 4vw;
  }

  @media (max-width: 600px) {
    font-size: 6vw;
  }
`

const SecondLineTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 3.5vw, 5rem);

  @media (max-width: 800px) {
    font-size: 4vw;
  }

  @media (max-width: 600px) {
    font-size: 6vw;
  }
`

const MiddleTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 0.9rem, 1.5rem);
  letter-spacing: -0.5px;
  padding-top: 20px;

  @media (max-width: 800px) {
    font-size: 0.4rem;
    letter-spacing: 1.1px;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

const Description = styled.div`
  padding-top: 20px;
  max-width: 500px;
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