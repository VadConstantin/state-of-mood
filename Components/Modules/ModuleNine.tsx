import { IModuleNine } from "@/Types/contentful";
import styled from "styled-components";
import Case1 from "../Mini-Modules/Module9/Case1";
import Case2 from "../Mini-Modules/Module9/Case2";
import Case3 from "../Mini-Modules/Module9/Case3";
import Case3bis from "../Mini-Modules/Module9/Case3bis";
import Case4 from "../Mini-Modules/Module9/Case4";
import Case5 from "../Mini-Modules/Module9/Case5";
import SecondTitle from "../SecondTitle";

interface ModuleNineProps {
  data: IModuleNine
}

const ModuleNine:React.FC<ModuleNineProps> = ({ data }) => {
  const type = data.fields.type

  if(type === 'Case 1') return (<Case1 data={data}/>)
  if(type === 'Case 2') (<Case2 data={data}/>)
  if(type === 'Case 3') (<Case3 data={data}/>)
  if(type === 'Case 3bis') (<Case3bis data={data}/>)
  if(type === 'Case 4') (<Case4 data={data}/>)
  if(type === 'Case 5') (<Case5 data={data}/>)

  return(
    <Wrapper>
      Module Nine !
    </Wrapper>
  )
}

export default ModuleNine

const Wrapper = styled.div`
  width: 100%;
`

