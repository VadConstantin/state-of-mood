import styled from "styled-components";

interface ModuleThreeProps {
  moduleThreeData: any
}

const ModuleThree:React.FC<ModuleThreeProps> = ({ moduleThreeData }) => {

  const { backgroundColor, picture, tag, titleFirstLine, titleSecondLine, description, linkTitle, linkSlug } = moduleThreeData.fields
  return(
    <Wrapper backgroundColor={backgroundColor}>
      <TextsWrapper>
        <Tag>
          {tag}
        </Tag>
        <FirstLine>
          {titleFirstLine}
        </FirstLine>
        {titleSecondLine && 
          <SecondLine>
            {titleSecondLine}
          </SecondLine>
        }
        <Description>
          {description}
        </Description>
        <CustomLink href={linkSlug}>
          {linkTitle}
        </CustomLink>
      </TextsWrapper>
      <Picture src={picture.fields.file.url} />
    </Wrapper>
  )
}

export default ModuleThree

const Wrapper = styled.div<{backgroundColor: string}>`
  width: 100%;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  display: flex;
    flex-wrap: wrap;
  justify-content: space-around;
  padding: 100px 50px 100px 50px;

  @media (max-width: 600px) {
    padding: 0 5vw 15vw 5vw;
  }
`

const TextsWrapper = styled.div`
  padding: 0px 20px 0px 20px;

  @media (max-width: 600px) {
    padding-top: 50px;
  }
`

const Picture = styled.img`
  width: clamp(300px, 35vw, 500px);

  @media (max-width: 600px) {
    padding-top: 50px;
  }
`

const Tag = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.4rem, 0.6vw, 1rem);
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 15px 0 5px 0;

  @media (max-width: 600px) {
    font-size: 0.4rem;
  }
`

const FirstLine = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  text-transform: uppercase;
`

const SecondLine = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  text-transform: uppercase;
`

const Description = styled.div`
  font-size: clamp(0.7rem, 0.8vw, 2rem);
  padding-top: 20px;
  line-height: 22px;
  max-width: 630px;
  letter-spacing: 0.8px;
  padding-bottom: 30px;
`

const CustomLink = styled.a`
  font-family: 'Knockout', sans-serif !important;
  text-decoration: underline;
  font-size: clamp(1rem, 1.2vw, 2rem);
`