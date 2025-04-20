import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";

interface PaletteModuleProps {
  data: IModuleSeven
}

const PaletteModule:React.FC<PaletteModuleProps> = ({ data }) => {
  return(
    <Wrapper>
      Palette Module
    </Wrapper>
  )
}

export default PaletteModule

const Wrapper = styled.div`
  width: 100%;
`