import { IModule15 } from '@/Types/contentful'
import styled from 'styled-components'

interface Case2Props {
  data: IModule15
}

const Case2:React.FC<Case2Props> = ({ data }) => {

  const { title, description, image, textColor, backgroundColor, marginBottom, marginTop, photoOnTheLeft  } = data.fields
  const secondTitle = data.fields?.secondTitle || null
  const thirdTitle = data.fields?.thirdTitle || null
  const fourthTitle = data.fields?.fourthTitle || null
  const fifthTitle = data.fields?.fifthTitle || null
  const sixthTitle = data.fields?.sixthTitle || null
  const seventhTitle = data.fields?.seventhTitle || null
  const description2ndParagraph = data.fields?.description2ndParagraph || null
  const description3rdParagraph = data.fields?.description3rdParagraph || null
  const description4thParagraph = data.fields?.description4thParagraph || null
  const description5thParagraph = data.fields?.description5thParagraph || null
  const description6thParagraph = data.fields?.description6thParagraph || null
  const description7thParagraph = data.fields?.description7thParagraph || null

  return(
    <Wrapper textColor={textColor} bgColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom} photoOnTheLeft={photoOnTheLeft}>
      <TextsWrapper>
        <Texts>
        <div>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
        </div>

        {description2ndParagraph && <div>
          {secondTitle && 
          <Title>
            {secondTitle}
          </Title>
          }
          {description2ndParagraph && 
            <Description>
              {description2ndParagraph}
            </Description>
          }
        </div>}
        
        {description3rdParagraph && <div>
          {thirdTitle && 
          <Title>
            {thirdTitle}
          </Title>
          }
          {description3rdParagraph && 
            <Description>
              {description3rdParagraph}
            </Description>
          }
        </div>}

        {description4thParagraph && <div>
          {fourthTitle && 
          <Title>
            {fourthTitle}
          </Title>
          }
          {description4thParagraph && 
            <Description>
              {description4thParagraph}
            </Description>
          }
        </div>}

        {description5thParagraph && <div>
          {fifthTitle && 
          <Title>
            {fifthTitle}
          </Title>
          }
          {description5thParagraph && 
            <Description>
              {description5thParagraph}
            </Description>
          }
        </div>}

        {description6thParagraph && <div>
          {sixthTitle && 
            <Title>
              {sixthTitle}
            </Title>
            }
          {description6thParagraph && 
            <Description>
              {description6thParagraph}
            </Description>
          }
        </div>}

        {description7thParagraph && <div>
          {seventhTitle && 
            <Title>
              {seventhTitle}
            </Title>
          }
          {description7thParagraph && 
            <Description>
              {description7thParagraph}
            </Description>
          }
        </div>}
        </Texts>
      </TextsWrapper>
      <ImageWrapper>
        <CustomImage src={(image.fields.file as any).url}/>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Case2

const Wrapper = styled.div<{textColor: string, bgColor: string, marginTop: string, marginBottom: string, photoOnTheLeft: boolean}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  flex-direction: ${(props) => props.photoOnTheLeft ? 'row-reverse' : 'row'};
  width: 100%;
  padding: 0;
  display: flex;
    justify-content: center;
  background-color: ${(props) => props.bgColor};

  color: ${(props) => props.textColor};
  align-items: center;

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
    padding: 0px 5vw 0px 5vw;
    text-align: start;
    flex-wrap: wrap;
    justify-content: start;
    gap: 50px;
  }
`

const Title = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  max-width: 850px;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: clamp(1rem, 1.6vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  text-transform: uppercase;
  padding-bottom: 20px;
  padding-top: 20px;
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
  margin-top: 50px;
  margin-bottom: 50px;
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