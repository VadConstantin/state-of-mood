import { IModuleSeven } from "@/Types/contentful";
import styled from "styled-components";
import ColorModule from "../Mini-Modules/Module7/ColorModule";
import FontModule from "../Mini-Modules/Module7/FontModule";
import PaletteModule from "../Mini-Modules/Module7/PaletteModule";

interface ModuleSevenProps {
  data: IModuleSeven
}

const ModuleSeven:React.FC<ModuleSevenProps> = ({ data }) => {

  console.log("data ---->", data);

  if (data.fields.type === "Color") return <ColorModule data={data as any}/>
  if (data.fields.type === "Font") return <FontModule data={data as any}/>
  if (data.fields.type === "Palette") return <PaletteModule data={data as any}/>
  

  return(
    <Wrapper>
      Module 7
    </Wrapper>
  )
}

export default ModuleSeven

const Wrapper = styled.div`
  width: 100%;
`