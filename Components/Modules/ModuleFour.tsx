import { IModuleFour } from "@/Types/contentful";
import styled from "styled-components";
import WorkTogetherButton from "../WorkTogetherButton";

interface ModuleFourProps {
  moduleFourData: IModuleFour
}

const ModuleFour:React.FC<ModuleFourProps> = ({ moduleFourData }) => {

  function isScreenWidthGreaterThan600() {
    return window.innerWidth > 600;
  }

  const { backgroundColor,
          textColor,
          lineColor,
          leftText,
          rightText,
          firstPartPicture,
          firstPartFirstLineTitle,
          firstPartSecondLineTitle,
          firstPartMiddleTitle,
          firstPartTags,
          firstPartDescription,
          firstPartWorkTogetherLinkSlug,
          firstPartSeeCaseStudyLinkSlug,
          secondPartPicture,
          secondPartFirstLineTitle,
          secondPartSecondLineTitle,
          secondPartMiddleTitle,
          secondPartTags,
          secondPartDescription,
          secondPartWorkTogetherLinkSlug,
          secondPartSeeCaseStudyLinkSlug
        } = moduleFourData.fields
  return(
    <Wrapper backgroundColor={backgroundColor} color={textColor}>
      <FirstTexts>
        <LeftText>
          {leftText}
        </LeftText>
        <RightText>
          {rightText}
        </RightText>
      </FirstTexts>
      <Line color={lineColor}></Line>
      <PartWrapper>
        <Picture src={firstPartPicture.fields.file?.url as any}/>
        <Texts>
          <div>
            <FirstLineTitle>
              {firstPartFirstLineTitle}
            </FirstLineTitle>
            <SecondLineTitle>
              {firstPartSecondLineTitle}
            </SecondLineTitle>
          </div>
          <div>
            <MiddleTitle>
              {firstPartMiddleTitle}
            </MiddleTitle>
            <Tags>
              {firstPartTags}
            </Tags>
          </div>
          <Description>
            {firstPartDescription}
          </Description>
          <WorkTogetherButton color={lineColor} text={"Let's work together"}/>
          <CaseStudyLink href={firstPartSeeCaseStudyLinkSlug}>
            See Case Study
          </CaseStudyLink>
        </Texts>
      </PartWrapper>
      <PartWrapper>
        {!isScreenWidthGreaterThan600() && <SecondPicture src={secondPartPicture.fields.file?.url as any}/>}
        <Texts>
          <div>
            <FirstLineTitle>
              {secondPartFirstLineTitle}
            </FirstLineTitle>
            <SecondLineTitle>
              {secondPartSecondLineTitle}
            </SecondLineTitle>
          </div>
          <div>
            <MiddleTitle>
              {secondPartMiddleTitle}
            </MiddleTitle>
            <Tags>
              {secondPartTags}
            </Tags>
          </div>
          <Description>
            {secondPartDescription}
          </Description>
          <WorkTogetherButton color={lineColor} text={"let's work together"}/>
          <CaseStudyLink href={secondPartSeeCaseStudyLinkSlug}>
            See Case Study
          </CaseStudyLink>
        </Texts>
        {isScreenWidthGreaterThan600() && <SecondPicture src={secondPartPicture.fields.file?.url as any}/>}
      </PartWrapper>
    </Wrapper>
  )
}
export default ModuleFour

const Wrapper = styled.div<{backgroundColor: string, color: string}>`
  padding: 100px 10vw 100px 10vw;
  background-color: ${(props) => props.backgroundColor};
  color: ${({color}) => color};

  @media (max-width: 600px) {
    padding: 50px 5vw 50px 5vw;
  }
`

const FirstTexts = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`

const LeftText = styled.div`
  font-family: 'Americana', sans-serif !important;
  text-transform: uppercase;
  max-width: 650px;
  font-size: clamp(1rem, 1.5vw, 5rem);
  line-height: clamp(1.5rem, 2vw, 2rem);

  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`

const RightText = styled.div`
  max-width: 500px;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
`

const Line = styled.div<{color: string}>`
  margin: 60px 0 40px 0;
  outline: 0.5px solid black;
  outline: ${(props) => `0.5px solid ${props.color}`};
`

const PartWrapper = styled.div`
  display: flex;
    justify-content: start;
    gap: 7vw;
  padding: 60px 0 60px 0;

  @media (max-width: 600px) {
    gap: 5vw;
    flex-wrap: wrap;
  }
`

const Picture = styled.img`
  width: 35vw;
  height: 40vw;

  @media (max-width: 600px) {
    width: 50vw;
    height: 58vw;
  }
`

const SecondPicture = styled.img`
  width: 42vw;
  height: 32vw;

  @media (max-width: 600px) {
    width: 60vw;
    height: 50vw;
  }
`

const Texts = styled.div`
  display: flex;
    flex-direction: column;
    gap: 2vw;

  @media (max-width: 800px) {
    gap: 5vw;
  }
`

const FirstLineTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 3.5vw, 5rem);

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const SecondLineTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 3.5vw, 5rem);

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const MiddleTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.8vw, 0.8vw, 1.5rem);
  padding-bottom: 0.5vw;

  @media (max-width: 800px) {
    font-size: 0.5rem;
  }
`

const Tags = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.5rem, 0.5rem, 1.5rem);
  letter-spacing: 2px;

  @media (max-width: 800px) {
    font-size: 0.4rem;
    letter-spacing: 1.1px;
  }
`

const Description = styled.div`
  max-width: 500px;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  max-width: 300px;
`

const CaseStudyLink = styled.a`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.9rem, 1vw, 2rem);
  font-weight: 900;
  text-decoration: underline;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
