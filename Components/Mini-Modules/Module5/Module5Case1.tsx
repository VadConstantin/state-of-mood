import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case1: React.FC<Props> = ({ data }) => {
  const image = data.fields.images[0]
  
  return(
    <Picture src={image.fields.file?.url as any}/>
  )
}

export default Module5Case1

const Picture = styled.img`
  width: 100%;
  height: auto;
`
