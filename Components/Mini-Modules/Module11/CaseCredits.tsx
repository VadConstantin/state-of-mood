import WorkTogetherButton from "@/Components/WorkTogetherButton"
import { IModuleEleven } from "@/Types/contentful"
import styled from "styled-components"

interface CaseCreditsProps {
  data: IModuleEleven
}

const CaseCredits:React.FC<CaseCreditsProps> = ({ data }) => {

  const { line1, displayButton, marginBottom, marginTop } = data.fields
  const line2 = data.fields?.line2 || ''
  const line3 = data.fields?.line3 || ''
  const line4 = data.fields?.line4 || ''
  const line5 = data.fields?.line5 || ''
  const line6 = data.fields?.line6 || ''
  const line7 = data.fields?.line7 || ''

  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <Title>
        Credits
      </Title>
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
      {displayButton && <ButtonWrapper>
        <WorkTogetherButton color={"black"} text={"Let's Work Together"}/>
      </ButtonWrapper>}
    </Wrapper>
  )
}

export default CaseCredits


const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  padding: 0px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
    padding: 0px 5vw 0px 5vw;
    text-align: start;
  }
`

const Line = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  font-size: clamp(0.7rem, 0.8vw, 2rem);
  letter-spacing: 2px;
  max-width: 900px;
  margin: auto;
  text-transform: uppercase;

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

const Title = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 1.4vw, 2rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 2vw;
  }
`

