import SecondTitleSmall from "@/Components/SecondTitleSmall"
import WorkTogetherButton from "@/Components/WorkTogetherButton"
import { IModuleEleven } from "@/Types/contentful"
import styled from "styled-components"

interface CaseCreditsProps {
  data: IModuleEleven
}

const CaseCredits:React.FC<CaseCreditsProps> = ({ data }) => {

  const { line1 } = data.fields
  const line2 = data.fields?.line2 || ''
  const line3 = data.fields?.line3 || ''
  const line4 = data.fields?.line4 || ''
  const line5 = data.fields?.line5 || ''
  const line6 = data.fields?.line6 || ''
  const line7 = data.fields?.line7 || ''

  return(
    <Wrapper>
      <SecondTitleSmall>
        Credits
      </SecondTitleSmall>
      <LinesWrapper>
        <Line>
          {line1}
        </Line>
        {line2 && 
        <Line>
          {line2}
        </Line>}
        {line3 && 
        <Line>
          {line3}
        </Line>}
        {line4 && 
        <Line>
          {line4}
        </Line>}
        {line5 && 
        <Line>
          {line5}
        </Line>}
        {line6 && 
        <Line>
          {line6}
        </Line>}
        {line7 && 
        <Line>
          {line7}
        </Line>}

      </LinesWrapper>
      <ButtonWrapper>
        <WorkTogetherButton color={"black"} text={"Let's Work Together"}/>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default CaseCredits


const Wrapper = styled.div`
  padding: 50px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`

const Line = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.5rem, 0.7vw, 2rem);
  letter-spacing: 1px;
  max-width: 900px;
  margin: auto;

  line-height: 25px;

  @media (max-width: 600px) {
    line-height: 4vw;
    letter-spacing: 0.1px;
    font-size: 2vw;
    margin: 0;
  }
`

const LinesWrapper = styled.div`
  padding-top: 2vw;
  display: flex;
    flex-direction: column;
    gap: 0.2vw;
`

const ButtonWrapper = styled.div`
  padding-top: 4vw;
  margin: auto;

  @media (max-width: 600px) {
    padding-top: 7vw;
    margin: 0;
  }
`

