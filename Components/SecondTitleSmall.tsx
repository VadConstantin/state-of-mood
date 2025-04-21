import styled from "styled-components";

interface SecondTitleSmallProps {
  children: any
}

const SecondTitleSmall:React.FC<SecondTitleSmallProps> = ({ children }) => {
  return(
    <SecondTitle>
      {children}
    </SecondTitle>
  )
}

export default SecondTitleSmall

const SecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 2.1vw, 5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`