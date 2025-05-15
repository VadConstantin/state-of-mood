import { IModuleEight } from "@/Types/contentful";
import styled from "styled-components";
import FirstTitle from "../FirstTitle";
import SecondTitle from "../SecondTitle";

interface ModuleEightProps {
  data: IModuleEight
}

const ModuleEight:React.FC<ModuleEightProps> = ({ data }) => {

  const { firstLineTitle, secondLineTitle } = data.fields
  const description = data.fields?.description || ''
  const images = data.fields.images || []
  const keyWord1 = data.fields.keyWord1 || ''

  const isImages = !!data.fields.images

  const keyWordsArray = [
    data.fields.keyWord1,
    data.fields.keyWord2,
    data.fields.keyWord3,
    data.fields.keyWord4,
    data.fields.keyWord5
  ].filter((kw) => kw && kw.trim() !== '');

  return(
    <Wrapper isImages={isImages}>
      <TextsWrapper>
        <Title>
          <FirstTitle>
            {firstLineTitle}
          </FirstTitle>
          <SecondTitle>
            {secondLineTitle}
          </SecondTitle>
        </Title>
        {description && <Description>
          {description}
        </Description>}
        {images.length > 0 && <ImagesWrapper>
          {images.map((image, index) => {
            return(
              <CustomImage key={index} src={image.fields.file?.url as any}/>
            )
          })}
        </ImagesWrapper>}
        {keyWord1 && 
          <KeyWordsWrapper>
            <KeyWordsTitle>
              Key Words
            </KeyWordsTitle>
            <KeyWords>
              {keyWordsArray.map((keyWord, i) => {
                return(
                  <KeyWord key={i}>
                    {keyWord}
                  </KeyWord>
                  
                )
              })}
            </KeyWords>
          </KeyWordsWrapper>}
      </TextsWrapper>
    </Wrapper>
  )
}

export default ModuleEight

const Wrapper = styled.div<{isImages: boolean}>`
  width: 100%;
  padding: 60px 50px 100px 50px;
  padding: ${(props) => props.isImages ? '60px 50px 100px 50px' : '60px 50px 60px 50px'};
  text-align: center;

  @media (max-width: 600px) {
    padding: 50px 5vw 50px 5vw;
  }
`

const TextsWrapper = styled.div`
  text-align: center;
  color: black;

  @media (max-width: 600px) {
    text-align: start;
  }
`

const Title = styled.div`

  @media (max-width: 600px) {
    padding-bottom: 25px;
  }
`

const Description = styled.div`
  padding-top: 35px;
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

const KeyWordsWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3vw;
  padding-bottom: 3vw;
  padding-top: 30px;
  text-transform: uppercase;
  
  @media (max-width: 800px) {
    gap: 3vw;
    padding: 6vw 0;
  }
`

const KeyWordsTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 2vw, 5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const KeyWords = styled.div`
  display: flex;
    gap: 3vw;
    justify-content: center;
  
  @media (max-width: 600px) {
    gap: 2vw;
    justify-content: start;
  }
`

const KeyWord = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.8rem, 1vw, 2rem);
  letter-spacing: 2px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 1.5vw;
    letter-spacing: 1px;
  }
`

const ImagesWrapper = styled.div`
  padding: 50px 0 30px 0;
  display: flex;
    gap: 8vw;
    flex-wrap: wrap;
    justify-content: center;
`

const CustomImage = styled.img`
  width: 90px;

  @media (max-width: 800px) {
    width: 60px;
  }
`