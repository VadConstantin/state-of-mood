import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface FontModuleProps {
  data: IModuleSeven
}

const FontModule:React.FC<FontModuleProps> = ({ data }) => {
  return(
    <Wrapper> 
      Font Module
    </Wrapper>
  )
}

export default FontModule

const Wrapper = styled.div`
  width: 100%;
`