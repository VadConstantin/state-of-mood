import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
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
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
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