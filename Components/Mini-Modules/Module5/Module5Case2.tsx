import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case2: React.FC<Props> = ({ data }) => {

  const image = data.fields.images[0]
  const backgroundColor = data.fields.firstImageBackgroundColor
  
  return(
    <Wrapper backgroundColor={backgroundColor as any}>
      <Picture src={image.fields.file?.url as any}/>
    </Wrapper>
  )
}

export default Module5Case2

const Wrapper = styled.div<{backgroundColor: string}>`
  padding: 7vw 10vw;
  background-color: ${(props) => props.backgroundColor};
`

const Picture = styled.img`
  width: 100%;
  height: auto;
`