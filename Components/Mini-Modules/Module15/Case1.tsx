import { IModule15 } from '@/Types/contentful'
import styled from 'styled-components'

interface Case1Props {
  data: IModule15
}

const Case1:React.FC<Case1Props> = ({ data }) => {

  const { title, description, image, marginBottom, marginTop } = data.fields
  const description2ndParagraph = data.fields?.description2ndParagraph || null
  const description3rdParagraph = data.fields?.description3rdParagraph || null
  const description4thParagraph = data.fields?.description4thParagraph || null
  const description5thParagraph = data.fields?.description5thParagraph || null
  const description6thParagraph = data.fields?.description6thParagraph || null
  const description7thParagraph = data.fields?.description7thParagraph || null


  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <TextsWrapper>
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
        {description4thParagraph && 
          <Description>
            {description4thParagraph}
          </Description>
        }
        {description5thParagraph && 
          <Description>
            {description5thParagraph}
          </Description>
        }
        {description6thParagraph && 
          <Description>
            {description6thParagraph}
          </Description>
        }
        {description7thParagraph && 
          <Description>
            {description7thParagraph}
          </Description>
        }
      </TextsWrapper>
      <ImageWrapper>
        <CustomImage src={(image.fields.file as any).url}/>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Case1

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  padding: 0px 8vw;
  display: flex;
    justify-content: center;
    gap: 5vw;
  background-color: white;
  color: black;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0px 5vw 0px 5vw;
    text-align: start;
    flex-wrap: wrap;
    justify-content: start;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const Title = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  max-width: 850px;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: clamp(1rem, 1.6vw, 2rem);
  font-size: clamp(0.8rem, 0.9vw, 2rem);
  text-transform: uppercase;
`

const TextsWrapper = styled.div`
  width: 50%;
  display: flex;
    flex-direction: column;
    gap: 2vw;

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

  @media (max-width: 800px) {
    font-size: 1.5vw;
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