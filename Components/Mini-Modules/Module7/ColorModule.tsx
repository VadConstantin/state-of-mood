import FirstTitle from "@/Components/FirstTitle";
import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface ColorModuleProps {
  data: IModuleSeven
}

const ColorModule:React.FC<ColorModuleProps> = ({ data }) => {

  const { backgroundColor, firstLineTitle, secondLineTitle} = data.fields
  const colors = data.fields.colorsForPaletteType.split(',')

  return(
    <Wrapper bgColor={backgroundColor}> 
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      <SecondTitle>
        {secondLineTitle}
      </SecondTitle>
      <ColorsWrapper>
        {colors.map((color, index) => {
          return(
            <ColorCircle key={index} color={color}>
            </ColorCircle>
          )
        })}
      </ColorsWrapper>
    </Wrapper>
  )
}

export default ColorModule

const Wrapper = styled.div<{bgColor: string}>`
  padding: 50px;
  width: 100%;
  background-color: ${(props) => props.bgColor};
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

const ColorsWrapper = styled.div`
  padding: 30px 0 30px 0;
  display: flex;
    flex-wrap: wrap;
    gap: 3vw;
    justify-content: center;
`

const ColorCircle = styled.div<{color: string}>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`