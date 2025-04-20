import styled from "styled-components";

interface MiddleTitleProps {
  children: any
}

const MiddleTitle:React.FC<MiddleTitleProps> = ({ children }) => {
  return(
    <MiddleTitleWrap>
      
    </MiddleTitleWrap>
  )
}

export default MiddleTitle

const MiddleTitleWrap = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 3vw, 5rem);

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`