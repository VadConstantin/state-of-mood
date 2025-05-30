import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case2: React.FC<Props> = ({ data }) => {

  const image = data.fields.images[0]
  const backgroundColor = data.fields.firstImageBackgroundColor
  const { marginBottom, marginTop } = data.fields
  
  return(
    <Wrapper backgroundColor={backgroundColor as any} marginTop={marginTop} marginBottom={marginBottom}>
      <Picture src={image.fields.file?.url as any}/>
    </Wrapper>
  )
}

export default Module5Case2

const Wrapper = styled.div<{backgroundColor: string, marginTop: string, marginBottom: string}>`
  padding: 0px 10vw;
  background-color: ${(props) => props.backgroundColor};
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    padding: 0vw 5vw;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`

const Picture = styled.img`
  width: 100%;
  height: auto;
`