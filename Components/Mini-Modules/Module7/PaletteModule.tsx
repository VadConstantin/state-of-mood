import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface PaletteModuleProps {
  data: IModuleSeven
}

const PaletteModule:React.FC<PaletteModuleProps> = ({ data }) => {

  const {firstLineTitle, imagesForPaletteType, backgroundColor } = data.fields
  const secondLineTitle = data.fields?.secondLineTitle || null

  return(
    <Wrapper bgColor={backgroundColor}> 
      <Texts>
        <FirstTitle>
          {firstLineTitle}
        </FirstTitle>
        {secondLineTitle && 
          <SecondTitleSmall>
            {secondLineTitle}
          </SecondTitleSmall>
        }
      </Texts>
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

  @media (max-width: 600px) {
    padding: 50px 5vw;
  }
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

const Texts = styled.div`
  @media (max-width: 600px) {
    text-align: start;
  }
`