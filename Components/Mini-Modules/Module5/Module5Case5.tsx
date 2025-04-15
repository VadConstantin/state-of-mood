import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case5: React.FC<Props> = ({ data }) => {

  const image1 = data.fields.images[0]
  const image2 = data.fields.images[1]
  const image3 = data.fields.images[2]
  
  return(
    <Wrapper>
      <Picture1 src={image1.fields.file?.url as any} /> 
      <Picture2 src={image2.fields.file?.url as any} /> 
      <Picture3 src={image3.fields.file?.url as any} /> 
    </Wrapper>
  )
}

export default Module5Case5

const Wrapper = styled.div`
  display: flex;
`

const Picture1 = styled.img`
  width: 40%;
  height: auto;
`

const Picture2 = styled.img`
  width: 30%;
  height: auto;
`

const Picture3 = styled.img`
  width: 30%;
  height: auto;
`