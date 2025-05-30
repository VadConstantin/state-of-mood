import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case1: React.FC<Props> = ({ data }) => {
  const image = data.fields.images[0]
  const { marginBottom, marginTop } = data.fields
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <Picture src={image.fields.file?.url as any}/>
    </Wrapper>
  )
}

export default Module5Case1

const Picture = styled.img<{}>`
  width: 100%;
  height: auto;
`

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`
