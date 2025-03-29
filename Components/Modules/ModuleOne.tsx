import { INavigation, INavcategory, IModuleOne } from '@/Types/contentful';
import { Entry } from 'contentful';
import styled from "styled-components";

interface ModuleOneProps {
  moduleOneData: any
}

const ModuleOne:React.FC<ModuleOneProps> = ({ moduleOneData }) => {

  const { backgroundColor, 
          titleFirstLine, 
          titleSecondLine,
          tag,
          linkTitle,
          firstPicture,
          secondPicture,
          linkSlug,
          stampForSecondPicture
         } = moduleOneData.fields

  return(
    <Wrapper color={backgroundColor}>
      <PicturesWrapper>
        <FirstPicAndText>
          <FirstPicture src={firstPicture.fields.file.url} alt="picture" />
          <Tag>
            {tag}
          </Tag>
          <FirstLine>
            {titleFirstLine}
          </FirstLine>
          <SecondLine>
            {titleSecondLine}
          </SecondLine>
          <LinkAndArrow> 
            <Arrow src="/Arrow-white.png" alt="arrow" />
            <CustomLink href={linkSlug}>
              {linkTitle}
            </CustomLink>
          </LinkAndArrow>
        </FirstPicAndText>
        <SecondPicAndStamp>
          <SecondPicture src={secondPicture.fields.file.url} alt="picture" />
          <Stamp src={stampForSecondPicture.fields.file.url} alt="stamp"/>
        </SecondPicAndStamp>
      </PicturesWrapper>
    </Wrapper>
  )
}

export default ModuleOne

const Wrapper = styled.div<{color: string}>`
  background-color: ${({color}) => color };
  width: 100%;
`

const PicturesWrapper = styled.div`
  padding: 40px 10vw 100px 10vw;
  display: flex;
    justify-content: space-between;
    gap: 4vw;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const FirstPicture = styled.img`
  width: clamp(100px, 35vw, 1000px);
  height: clamp(60px, 30vw, 800px);
  position: relative;
  padding-bottom: 4vw;

  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
`

const SecondPicture = styled.img`
  width: clamp(250px, 45vw, 1000px);
  position: relative;
  padding-top: 100px;

  @media (max-width: 600px) {
    padding-top: 10px;
  }
`

const FirstPicAndText = styled.div`
  text-transform: uppercase;
`

const Tag = styled.div`
  font-family: 'Knockout', sans-serif !important;
  color: white;
  font-size: clamp(0.4rem, 0.7vw, 1rem);

  @media (max-width: 600px) {
    font-size: 0.4rem;
    text-align: center;
  }
`

const FirstLine = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  color: white;
  
  @media (max-width: 600px) {
    text-align: center;
  }
`

const SecondLine = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  color: white;

  @media (max-width: 600px) {
    text-align: center;
  }
`

const LinkAndArrow = styled.div`
  display: flex;
    gap: 1vw;

  @media (max-width: 600px) {
    justify-content: center;
  }
`

const Arrow = styled.img`
  color: white;
  width: clamp(30px, 6vw, 30vw);
`

const CustomLink = styled.a`
  align-content: center;
  text-decoration: underline;
  color: white;
  font-size: clamp(0.7rem, 1vw, 3rem);
  text-transform: none;
  font-family: 'Knockout', sans-serif !important;
  text-underline-offset: 2px;
`

const SecondPicAndStamp = styled.div`
  position: relative;
`

const Stamp = styled.img`
  position: absolute;
  top: 0;
  width: clamp(30px, 6vw, 30vw);
  padding-top: 100px;
  right: 0;

  @media (max-width: 600px) {
    padding-top: 0px;
  }
`



