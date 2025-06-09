import { IModuleTwo } from "@/Types/contentful";
import styled from "styled-components";
import FirstTitle from "../FirstTitle";
import SecondTitle from "../SecondTitle";
import WeeklySelectionModule from './WeeklySelectionModule';

interface ModuleTwoProps {
  moduleTwoData: IModuleTwo
}

const ModuleTwo:React.FC<ModuleTwoProps> = ({ moduleTwoData }) => {

  const { weeklySelectionModules, backgroundColor, marginBottom, marginTop } = moduleTwoData.fields

  const description =  moduleTwoData.fields?.description || ''
  const titleFirstLine = moduleTwoData.fields?.titleFirstLine || ''
  const titleSecondLine = moduleTwoData.fields?.titleSecondLine || ''

  return(
    <Wrapper color={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
      <TextsWrapper>
        <Title>
          <FirstTitle>
            {titleFirstLine}
          </FirstTitle>
          {titleSecondLine && 
            <SecondTitle>
              {titleSecondLine}
            </SecondTitle>
          }
        </Title>
        <Description>
          {description}
        </Description>
      </TextsWrapper>
      <WeeklyModulesWrapper>
        {weeklySelectionModules.map((module: any, index: any) => {
          return(
            <WeeklySelectionModule weeklyModuleData={module} key={index}/>
          )
        })}
      </WeeklyModulesWrapper>
    </Wrapper>
  )
}

export default ModuleTwo

const Wrapper = styled.div<{color: string, marginTop: string, marginBottom: string}>`
  width: 100%;
  background-color: ${({color}) => color};
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
`

const TextsWrapper = styled.div`
  padding: 60px 0 100px 0;
  text-transform: uppercase;
  text-align: center;
  color: black;

  @media (max-width: 600px) {
    padding: 50px 0 50px 0;
  }
`

const Title = styled.div`
  padding-bottom: 35px;

  @media (max-width: 600px) {
    padding-bottom: 25px;
  }
`

const Description = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  font-size: 0.8rem;
  letter-spacing: 2px;
  max-width: 750px;
  margin: auto;
  line-height: 20px;

  @media (max-width: 600px) {
    margin: 0;
    padding: 0 5vw 15vw 5vw;
  }
`

const WeeklyModulesWrapper = styled.div`
  display: flex;
    flex-wrap: wrap;
    padding: 0 5vw 100px 12vw;
    gap: 10vw;
    justify-content: start;

  @media (max-width: 600px) {
    justify-content: center;
    padding: 0 5vw 15vw 5vw;
  }
`
