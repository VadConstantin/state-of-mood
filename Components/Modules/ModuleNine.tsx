import { IModuleNine } from "@/Types/contentful";
import styled from "styled-components";
import Case1 from "../Mini-Modules/Module9/Case1";
import Case2 from "../Mini-Modules/Module9/Case2";
import Case3 from "../Mini-Modules/Module9/Case3";
import Case3bis from "../Mini-Modules/Module9/Case3bis";
import Case4 from "../Mini-Modules/Module9/Case4";

interface ModuleNineProps {
  data: IModuleNine
}

const ModuleNine:React.FC<ModuleNineProps> = ({ data }) => {
  const type = data.fields.type

  if(type === 'Case 1') return (<Case1 data={data}/>)
  if(type === 'Case 2') return (<Case2 data={data}/>)
  if(type === 'Case 3') return (<Case3 data={data}/>)
  if(type === 'Case 3bis') return (<Case3bis data={data}/>)
  if(type === 'Case 4') return (<Case4 data={data}/>)

  return(
    <Wrapper>
      Couldn't find the module.
    </Wrapper>
  )
}

export default ModuleNine

const Wrapper = styled.div`
  width: 100%;
`

