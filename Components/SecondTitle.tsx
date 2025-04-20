import styled from "styled-components";

interface FirstTitleProps {
  children: any
}

const SecondTitle:React.FC<FirstTitleProps> = ({ children }) => {
  return(
    <Second>{children}</Second>
  )
}

export default SecondTitle

const Second = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 6vw;
  }
`