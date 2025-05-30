import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface ColorModuleProps {
  data: IModuleSeven
}

const ColorModule:React.FC<ColorModuleProps> = ({ data }) => {

  const { backgroundColor, firstLineTitle, marginBottom, marginTop } = data.fields
  const secondLineTitle = data.fields?.secondLineTitle || null
  const colors = data.fields.colorsForColorType.split(',')

  return(
    <Wrapper bgColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}> 
      <FirstTitle>
        {firstLineTitle}
      </FirstTitle>
      {secondLineTitle && 
        <SecondTitleSmall>
          {secondLineTitle}
        </SecondTitleSmall>
      }
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

const Wrapper = styled.div<{bgColor: string, marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  padding: 50px;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

  @media (max-width: 600px) {
    text-align: start;
    padding: 20px 5vw;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
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