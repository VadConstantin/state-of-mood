import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface PaletteModuleProps {
  data: IModuleSeven
}

const PaletteModule:React.FC<PaletteModuleProps> = ({ data }) => {

  const {firstLineTitle, secondLineTitle, imagesForPaletteType, backgroundColor } = data.fields

  return(
    <Wrapper bgColor={backgroundColor}> 
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitleSmall>
        {secondLineTitle}
      </SecondTitleSmall>
      <ImagesWrapper>
        {imagesForPaletteType.map((image, index: any) => {
          return(
            <CustomImage src={image.fields.file?.url as any} key={index}/>
          )
        })}
      </ImagesWrapper>
    </Wrapper>
  )
}

export default PaletteModule

const Wrapper = styled.div<{bgColor: string}>`
  width: 100%;
  padding: 50px 30px;
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
    gap: 5vw;
    justify-content: center;
`

const CustomImage = styled.img`
  width: 20%;
`