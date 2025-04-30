import styled from "styled-components";

interface MiddleTitleProps {
  children: any
}

const MiddleTitleSmall:React.FC<MiddleTitleProps> = ({ children }) => {
  return(
    <MiddleTitleWrap>
      {children}
    </MiddleTitleWrap>
  )
}

export default MiddleTitleSmall

const MiddleTitleWrap = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(0.8rem, 0.9vw, 2rem);
  text-transform: uppercase;
  padding-top: 1vw;

  @media (max-width: 900px) {
    font-size: 1.5vw;
  }


  @media (max-width: 700px) {
    max-width: 400px;
    margin: auto;
  }

  @media (max-width: 600px) {
    max-width: 200px;
    font-size: 1.8vw;
    margin: 0;
  }

  @media (max-width: 430px) {
    max-width: 100px;
    font-size: 1.8vw;
    margin: 0;
  }
`