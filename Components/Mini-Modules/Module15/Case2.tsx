import { IModule15 } from '@/Types/contentful'
import styled from 'styled-components'

interface Case2Props {
  data: IModule15
}

const Case2:React.FC<Case2Props> = ({ data }) => {

  const { title, description, image, textColor, backgroundColor } = data.fields
  const description2ndParagraph = data.fields?.description2ndParagraph || null
  const description3rdParagraph = data.fields?.description3rdParagraph || null

  return(
    <Wrapper textColor={textColor} bgColor={backgroundColor}>
      <ImageWrapper>
        <CustomImage src={(image.fields.file as any).url}/>
      </ImageWrapper>
      <TextsWrapper>
        <Texts>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
          {description2ndParagraph && 
            <Description>
              {description2ndParagraph}
            </Description>
          }
          {description3rdParagraph && 
            <Description>
              {description3rdParagraph}
            </Description>
          }
        </Texts>
      </TextsWrapper>
    </Wrapper>
  )
}

export default Case2

const Wrapper = styled.div<{textColor: string, bgColor: string}>`
  width: 100%;
  padding: 0;
  display: flex;
    justify-content: center;
  background-color: ${(props) => props.bgColor};

  color: ${(props) => props.textColor};
  align-items: center;

  @media (max-width: 600px) {
    padding: 50px 5vw 50px 5vw;
    text-align: start;
    flex-wrap: wrap;
    justify-content: start;
    gap: 50px;
  }
`

const Title = styled.div`
  font-family: 'Knockout', sans-serif !important;
  max-width: 850px;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: clamp(1rem, 1.6vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  text-transform: uppercase;
`

const TextsWrapper = styled.div`
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
    justify-content: center;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Description = styled.div`
  max-width:600px;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);

  @media (max-width: 1000px) {
    font-size: 1.3vw;
    line-height: 1.8vw;
  }

  @media (max-width: 800px) {
    font-size: 1.3vw;
    line-height: 1.8vw;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
    line-height: 4vw;
    max-width: 100%;
  }
`

const CustomImage = styled.img`
  width: 100%;
`

const Texts = styled.div`
  padding: 0 7vw;
  display: flex;
    flex-direction: column;
    gap: 2vw;

  @media (max-width: 800px) {
    gap: 5vw;
    padding: 0vw 5vw;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`