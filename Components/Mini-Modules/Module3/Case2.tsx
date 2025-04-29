import { IModuleThree, ICaseStudyPage } from "@/Types/contentful";
import styled from "styled-components";

interface Case2Props {
  moduleThreeData: IModuleThree
}

const Case2:React.FC<Case2Props> = ({ moduleThreeData }) => {

  const { backgroundColor, titleFirstLine, titleSecondLine } = moduleThreeData.fields
  const picture = moduleThreeData.fields?.picture || null

  return(
    <Wrapper backgroundColor={backgroundColor}>
      <TextsWrapper >
        <FirstLine>
          {titleFirstLine}
        </FirstLine>
        {titleSecondLine && 
          <SecondLine>
            {titleSecondLine}
          </SecondLine>
        }
      <CaseStudiesWrapper>
        {(moduleThreeData as IModuleThree).fields.caseStudies.map((caseStudy: ICaseStudyPage, index: any) => {
          return(
            <CaseStudy key={index}>
              <StudyCaseTitle>
                {caseStudy.fields?.name}
              </StudyCaseTitle>
              <LineFiller />
              <SlugLink href={"/case-study/"+caseStudy.fields?.slug}>
                CASE STUDY
              </SlugLink>
            </CaseStudy>
          )
        })}
      </CaseStudiesWrapper>
      </TextsWrapper>
      <Picture src={(picture.fields.file as any).url} />
    </Wrapper>
  )
}

export default Case2

const Wrapper = styled.div<{backgroundColor: string}>`
  width: 100%;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  display: flex;

  justify-content: space-around;
  padding: 100px 50px 100px 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px 8vw 30px 8vw;
  }

  @media (max-width: 600px) {
    padding: 0 5vw 15vw 5vw;
    align-items: start;
  }
`

const CaseStudiesWrapper = styled.div`
  display: flex;
    flex-direction: column;
    gap: 2vw;

    @media (max-width: 600px) {
      gap: 4vw;
    }
`

const CaseStudy = styled.div`
  color: white;
  display: flex;
    justify-content: space-between;
`

const TextsWrapper = styled.div`
  width: 50%;
  padding: 0px 20px 0px 20px;
  text-transform: uppercase;
  font-size: 0.9vw;

  @media (max-width: 1200px) {
    padding: 0px 20px 50px 20px;
  }

  @media (max-width: 800px) {
    width: 90%;
    font-size: 1.7vw;
  }

  @media (max-width: 600px) {
    padding: 50px 0;
    font-size: 1.8vw;
  }
`

const Picture = styled.img`
  width: clamp(300px, 35vw, 500px);
`

const FirstLine = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(5rem, 8vw, 8rem);
  text-transform: uppercase;
`

const SecondLine = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(5rem, 8vw, 8rem);
  text-transform: uppercase;
`

const SlugLink = styled.a`
  color: white;
  font-family: 'Knockout', sans-serif !important;
  text-decoration: underline;
  text-underline-offset: 3px;
`

const StudyCaseTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
`

const LineFiller = styled.div`
  flex: 1;
  height: 1px;
  background-color: white;
  align-self: center;
  margin: 0 10px;
`