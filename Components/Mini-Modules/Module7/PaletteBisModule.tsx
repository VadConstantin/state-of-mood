import { IModuleSeven } from "@/Types/contentful"
import styled from "styled-components"

interface PaletteBisModuleProps {
  data: IModuleSeven
}

const PaletteBisModule:React.FC<PaletteBisModuleProps> = ({ data }) => {

  const { firstLineTitle, imagesForPaletteType, marginBottom, marginTop } = data.fields
  const description = data.fields?.description || null
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}> 
    <Texts>
      <Title>
        {firstLineTitle}
      </Title>
      {description && 
        <Description>
          {description}
        </Description>
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

export default PaletteBisModule

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;
  padding: 0px 8vw;
  width: 100%;
  background-color: white;
  display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

  @media (max-width: 600px) {
    padding: 0px 5vw;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const Texts = styled.div`
  @media (max-width: 600px) {
    text-align: start;
  }
`

const Title = styled.div`
  font-family: 'Knockout', sans-serif !important;
  max-width: 850px;
  margin: auto;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: clamp(1rem, 1.6vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    margin: 0;
  }
`

const Description = styled.div`
  padding-top: 2vw;
  max-width:440px;
  margin: auto;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);
  font-weight: 100;

  @media (max-width: 800px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
    line-height: 4vw;
    max-width: 100%;
  }
`

const ImagesWrapper = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
    gap: 2vw;
    justify-content: space-between;
    flex-wrap: wrap;

  @media (max-width: 600px) {
    padding-top: 30px; 
  }
`

const CustomImage = styled.img`
  width: 14%;
`