import { IModule13 } from "@/Types/contentful"
import styled from "styled-components"
import FirstTitle from "../FirstTitle"
import SecondTitleSmall from "../SecondTitleSmall"

interface Module13Props {
  data: IModule13
}

const Module13:React.FC<Module13Props> = ({ data }) => {

  const { firstLogoTitle, secondLogoTitle, logos, firstLineTitle, secondLineTitle, description, marginBottom, marginTop } = data.fields
  const image = data.fields?.image || null

  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
      <Description>
        {description}
      </Description>
      <LogosWrapper>
        {logos.map((logo, index) => {
          return(
            <div key={index}>
              {index === 0 && 
              <LogoTitle>
                {firstLogoTitle}
              </LogoTitle>}
              {index === 1 && 
              <LogoTitle>
                {secondLogoTitle}
              </LogoTitle>}
              <Logo src={(logo.fields.file as any).url}/>
            </div>
          )
        })}
        {image && <Logo src={(image.fields.file as any).url}/>}
      </LogosWrapper>
    </Wrapper>
  )
}

export default Module13

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  padding: 0px 0;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    text-align: start;
    padding: 0px 5vw;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const Description = styled.div`
  padding-top: 20px;
  max-width: 750px;
  margin: auto;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);

  @media (max-width: 800px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
    max-width: 500px;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
    line-height: 4vw;
    margin: 0;
  }
`

const LogosWrapper = styled.div`
  padding-top: 7vw;
  color: black;
  display: flex;
    flex-direction: column;
    gap: 5vw;

  @media (max-width: 600px) {
    text-align: center;
    gap: 10vw;
    padding-top: 12vw;
  }
`

const Logo = styled.img`
  width: 50%;
  margin: auto;

  @media (max-width: 600px) {
    width: 60%;
  }
`

const LogoTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 1.5vw, 2rem);
  text-transform: uppercase;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.8vw;
    padding-bottom: 10px;
  }
`