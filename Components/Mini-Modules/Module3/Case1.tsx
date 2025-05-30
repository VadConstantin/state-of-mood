import { IModuleThree } from "@/Types/contentful";
import styled from "styled-components";

interface Case1Props {
  moduleThreeData: IModuleThree
}

const Case1:React.FC<Case1Props> = ({ moduleThreeData }) => {

  const { backgroundColor, titleFirstLine, titleSecondLine, marginBottom, marginTop } = moduleThreeData.fields
  const tag = moduleThreeData.fields?.tag || null
  const picture = moduleThreeData.fields?.picture || null
  const description = moduleThreeData.fields?.description || null
  const linkTitle = moduleThreeData.fields?.linkTitle || null
  const linkSlug = moduleThreeData.fields?.linkSlug || null

  return(
    <Wrapper backgroundColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
      <TextsWrapper>
        {tag && 
          <Tag>
            {tag}
          </Tag>
        }
        <FirstLine>
          {titleFirstLine}
        </FirstLine>
        {titleSecondLine && 
          <SecondLine>
            {titleSecondLine}
          </SecondLine>
        }
        {description && 
        <Description>
          {description}
        </Description>
        }
        {linkTitle && linkSlug && 
          <CustomLink href={linkSlug as any}>
            {linkTitle}
          </CustomLink>
        }
      </TextsWrapper>
      {picture && <Picture src={(picture.fields.file as any).url} />}
    </Wrapper>
  )
}

export default Case1

const Wrapper = styled.div<{backgroundColor: string, marginTop: string, marginBottom: string}>`
  width: 100%;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  display: flex;
    flex-wrap: wrap;
  justify-content: space-around;
  padding: 100px 50px 100px 50px;
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    padding: 0 5vw 15vw 5vw;
    justify-content: start;
  }
`

const TextsWrapper = styled.div`
  padding: 0px 20px 0px 20px;

  @media (max-width: 1200px) {
    padding: 0px 20px 50px 20px;
  }

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`

const Picture = styled.img`
  width: clamp(300px, 35vw, 500px);
`

const Tag = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.4rem, 0.6vw, 1rem);
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 15px 0 5px 0;

  @media (max-width: 600px) {
    font-size: 0.4rem;
  }
`

const FirstLine = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  text-transform: uppercase;
`

const SecondLine = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  text-transform: uppercase;
`

const Description = styled.div`
  font-size: clamp(0.7rem, 0.8vw, 2rem);
  padding-top: 20px;
  line-height: 22px;
  max-width: 630px;
  letter-spacing: 0.8px;
  padding-bottom: 30px;
`

const CustomLink = styled.a`
  font-family: 'Knockout', sans-serif !important;
  text-decoration: underline;
  font-size: clamp(1rem, 1.2vw, 2rem);
`