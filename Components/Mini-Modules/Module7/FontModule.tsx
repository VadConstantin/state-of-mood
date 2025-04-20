import FirstTitle from "@/Components/FirstTitle";
import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface FontModuleProps {
  data: IModuleSeven
}

const FontModule:React.FC<FontModuleProps> = ({ data }) => {

  const {firstLineTitle, secondLineTitle, imagesForFontType, backgroundColor } = data.fields

  return(
    <Wrapper bgColor={backgroundColor}> 
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitle>
        {secondLineTitle}
      </SecondTitle>
      <ImagesWrapper>
        {imagesForFontType.map((image, index: any) => {
          return(
            <CustomImage src={image.fields.file?.url as any} key={index}/>
          )
        })}
      </ImagesWrapper>
    </Wrapper>
  )
}

export default FontModule

const Wrapper = styled.div<{bgColor: string}>`
  width: 100%;
  padding: 50px 0;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const SecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 2.1vw, 5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const ImagesWrapper = styled.div`
  padding-top: 30px;
  position: relative;
  width: 100%;
  display: flex;
    gap: 0;
`

const CustomImage = styled.img`
  width: 50%;
`