import styled from "styled-components";

interface FirstTitleProps {
  children: any
}

const FirstTitle:React.FC<FirstTitleProps> = ({ children }) => {
  return(
    <First>{children}</First>
  )
}

export default FirstTitle

const First = styled.div`
  font-family: 'Knockout', sans-serif !important;
    font-size: clamp(1rem, 3.5vw, 5rem);
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 6vw;
    }
`
