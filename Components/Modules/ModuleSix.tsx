import { IModuleSix } from "@/Types/contentful"
import styled from "styled-components";
import FirstTitle from "../FirstTitle";
import SecondTitle from "../SecondTitle";

interface ModuleSixProps {
  data: any
}

const ModuleSix:React.FC<ModuleSixProps> = ({ data }) => {
  const { firstLineTitle, 
          secondLineTitle, 
          description,
          picture1,
          picture2,
          picture3,
          picture4,
          picture5,
          picture6,
          picture7,
          picture8,
          picture9
        } = data.fields

  const keyWord1 = data.fields.keyWord1 || ''

  const keyWordsArray = [
    data.fields.keyWord1,
    data.fields.keyWord2,
    data.fields.keyWord3,
    data.fields.keyWord4,
    data.fields.keyWord5
  ].filter((kw) => kw && kw.trim() !== '');
  
  return(
    <Wrapper> 
      <TextsWrapper>
        <Title>
          <FirstTitle>
            {firstLineTitle}
          </FirstTitle>
          <SecondTitle>
            {secondLineTitle}
          </SecondTitle>
        </Title>
        <Description>
          {description}
        </Description>
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
      <PicturesWrapper>

      </PicturesWrapper>
    </Wrapper>
  )
}

export default ModuleSix

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({color}) => color};

  @media (max-width: 600px) {
    padding: 0 5vw 15vw 5vw;
  }
`

const TextsWrapper = styled.div`
  padding: 60px 50px 100px 50px;
  text-transform: uppercase;
  text-align: center;
  color: black;

  @media (max-width: 600px) {
    padding: 50px 0 50px 0;
    text-align: start;
  }
`

const Title = styled.div`
  padding-bottom: 35px;

  @media (max-width: 600px) {
    padding-bottom: 25px;
  }
`

const Description = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.5rem, 0.7vw, 2rem);
  letter-spacing: 1px;
  max-width: 750px;
  margin: auto;
  line-height: 25px;

  @media (max-width: 600px) {
    line-height: 4vw;
    letter-spacing: 0.1px;
    font-size: 2vw;
  }
`

const KeyWordsWrapper = styled.div`
  padding: 3vw 0;
  display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3vw;
  
  @media (max-width: 800px) {
    gap: 5vw;
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

const PicturesWrapper = styled.div`

`