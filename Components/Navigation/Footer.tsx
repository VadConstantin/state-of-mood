import styled from "styled-components";
import NewsletterForm from "../NewsletterForm";

interface FooterProps {
  bottomFixed?: boolean
}

const Footer:React.FC<FooterProps> = ({ bottomFixed }) => {
  return(
    <Wrapper bFixed={bottomFixed as boolean}>
      <About>
        <Title>
          About
        </Title>
        <Links>
          <a href="/what-we-do">What we do</a>
          <a href="/contact">Contact us</a>
        </Links>
      </About>
      <Studio>
        <Title>
          Studio
        </Title>
        <Links>
          <a href="/cases-study">Cases Study</a>
          <a href="/custom-design">Custom design</a>
        </Links>
      </Studio>
      <Social>
        <Title>
          Social
        </Title>
        <Links>
          <a href="www.instagram.com/state_of_moods">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">LinkedIn</a>
        </Links>
      </Social>
      <NewsLetter>
        <Title>
          Get inspired with the monthly newsletter
        </Title>
        <NewsletterForm />
      </NewsLetter>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div<{bFixed: boolean}>`
  position: ${(props) => props.bFixed ? 'fixed' : 'auto'};
  bottom: 0;
  width: 100%;
  padding: 50px 5vw 50px 5vw;
  background-color: white;
  display: flex;
    justify-content: center;
    gap: 10vw;
    flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 5vw;
  }
  
  @media (max-width: 600px) {
    padding: 5vw 5vw 15vw 5vw;
    justify-content: space-around;
    gap: 5vw;
  }
`

const About = styled.div`
  min-width: 100px;

  @media (max-width: 600px) {
    padding-left: 6vw;
  }
`

const Studio = styled.div`
  min-width: 100px;
`

const Social = styled.div`
  min-width: 100px;
`

const NewsLetter = styled.div`
  min-width: 100px;
`

const Title = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.6rem, 0.6rem, 1rem);
  letter-spacing: 1.6px;
  text-transform: uppercase;
  padding: 15px 0 5px 0;
  font-weight: 1000;

  @media (max-width: 600px) {
    font-size: 0.5rem;
  }


`

const Links = styled.div`
  font-size: clamp(0.8rem, 0.9rem, 1rem);
  letter-spacing: 1px;
  padding-top: 20px;
  display: flex;
    flex-direction: column;
    gap: 7px;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`
