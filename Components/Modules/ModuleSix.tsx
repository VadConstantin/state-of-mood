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
          picture9,
          picture10, 
          picture11,
          picture12,
          marginTop,
          marginBottom
        } = data.fields

  const allPictures = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture10,
    picture11,
    picture12,
  ].filter(Boolean)

  function splitIntoBalancedColumns<T>(pictures: T[], columnCount: number): T[][] {
    const total = pictures.length;
    const baseSize = Math.floor(total / columnCount);
    const remainder = total % columnCount;
  
    const columns: T[][] = []
    let index = 0
  
    for (let i = 0; i < columnCount; i++) {
      const extra = i === columnCount - 1 ? remainder : 0
      const count = baseSize + (i < columnCount - 1 ? 0 : extra)
      columns.push(pictures.slice(index, index + count))
      index += count
    }
  
    return columns;
  }
  
  
  const columns = splitIntoBalancedColumns(allPictures, 3);

  const keyWord1 = data.fields.keyWord1 || ''

  const keyWordsArray = [
    data.fields.keyWord1,
    data.fields.keyWord2,
    data.fields.keyWord3,
    data.fields.keyWord4,
    data.fields.keyWord5
  ].filter((kw) => kw && kw.trim() !== '');
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}> 
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
        {columns.map((column, i) => (
          <Row key={i}>
            {column.map((pic, j) => (
              <Picture1 key={j} src={pic.fields.file.url} />
            ))}
          </Row>
        ))}
      </PicturesWrapper>
    </Wrapper>
  )
}

export default ModuleSix

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  width: 100%;
  background-color: ${({color}) => color};
  padding: 0px 50px 0px 50px;
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    padding: 0px 5vw 0vw 5vw;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const TextsWrapper = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: black;

  @media (max-width: 600px) {

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
  padding-bottom: 3vw;

  @media (max-width: 600px) {
    line-height: 4vw;
    letter-spacing: 0.1px;
    font-size: 2vw;
  }
`

const KeyWordsWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3vw;
  padding-bottom: 3vw;
  
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

const PicturesWrapper = styled.div`
  padding: 0px 100px 0px 100px;
  display: flex;
    gap: 3vw;
  
  @media (max-width: 600px) {
    padding: 0;
    justify-content: space-between;
  }
`

const Row = styled.div`
  width: 30%;
  display: flex;
    flex-direction: column;
    gap: 3vw;
`

const Picture1 = styled.img`
  width: 100%;
`