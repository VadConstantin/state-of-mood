import styled from "styled-components";
import FirstTitle from "../FirstTitle";
import SecondTitle from "../SecondTitle";
import WeeklySelectionModule from './WeeklySelectionModule';

interface ModuleTwoProps {
  moduleTwoData: any
}

const ModuleTwo:React.FC<ModuleTwoProps> = ({ moduleTwoData }) => {

  const { description, titleFirstLine, titleSecondLine, weeklySelectionModules, backgroundColor } = moduleTwoData.fields

  return(
    <Wrapper color={backgroundColor}>
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

const Wrapper = styled.div<{color: string}>`
  width: 100%;
  background-color: ${({color}) => color};
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
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.5rem, 0.7vw, 2rem);
  letter-spacing: 1px;
  max-width: 750px;
  margin: auto;
  line-height: 20px;
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
