import styled from "styled-components";

interface WeeklySelectionModuleProps {
  weeklyModuleData: any
}

const WeeklySelectionModule:React.FC<WeeklySelectionModuleProps> = ({ weeklyModuleData }) => {

  const { name, description, picture, slug, tag } = weeklyModuleData.fields
  return(
    <Wrapper>
      <a href={slug}>
        <Picture src={picture.fields.file.url} alt="picture"/>
        <Tag>
          {tag}
        </Tag>
        <Name>
          {name}
        </Name>
        <Description>
          {description}
        </Description>
      </a>
    </Wrapper>
  )
}

export default WeeklySelectionModule

const Wrapper = styled.div`
  display: flex;
    flex-direction: column;
  color: black;

  &:nth-of-type(2n) {
    margin-top: 20px;
  }

  &:nth-of-type(n+3):nth-of-type(-n+4) {
    margin-left: 5vw;
  }

  @media (max-width: 600px) {
    margin-left: 0 !important;
    margin-top: 0;

    &:nth-of-type(2n) {
      margin-top: 0;
    }
  }
`

const Picture = styled.img`
  width: clamp(150px, 28vw, 700px);

  @media (max-width: 600px) {
    width: clamp(300px, 28vw, 700px);
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

const Name = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.5rem, 1.2vw, 2rem);
  text-transform: uppercase;
`

const Description = styled.div`
  font-size: clamp(0.5rem, 0.8vw, 2rem);
  padding-top: 10px;
`
