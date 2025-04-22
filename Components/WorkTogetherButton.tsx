import styled from "styled-components"

interface WorkTogetherButtonProps {
  color: any
  text: string
}

const WorkTogetherButton:React.FC<WorkTogetherButtonProps> = ({ color, text }) => {
  return(
    <CustomButton color={color} href='mailto:contact@stateofmood.com'>
      {text}
    </CustomButton>
  )
}

export default WorkTogetherButton

const CustomButton = styled.a<{color: string}>`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  width: max-content;
  border-radius: none;
  border: ${(props) => `2px solid ${props.color}`};
  padding: 1vw 1.5vw 1vw 1.5vw;
  font-size: clamp(0.6rem, 0.8vw, 2rem);
  font-weight: 900;
  letter-spacing: 3px;

  @media (max-width: 800px) {
    border: ${(props) => `1px solid ${props.color}`};
    padding: 1.6vw 2.5vw 1.6vw 2.5vw;
  }

  @media (max-width: 600px) {
    border: ${(props) => `1px solid ${props.color}`};
    padding: 2.5vw 3.2vw 2.5vw 3.2vw;
  }
`

