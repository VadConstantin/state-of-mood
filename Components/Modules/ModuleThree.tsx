import { IModuleThree } from "@/Types/contentful";
import styled from "styled-components";
import Case1 from "../Mini-Modules/Module3/Case1";
import Case2 from "../Mini-Modules/Module3/Case2";

interface ModuleThreeProps {
  moduleThreeData: IModuleThree
}

const ModuleThree:React.FC<ModuleThreeProps> = ({ moduleThreeData }) => {
  const type = moduleThreeData.fields.type

  if (type === 'Case 1') return <Case1 moduleThreeData={moduleThreeData} />
  if (type === 'Case 2') return <Case2 moduleThreeData={moduleThreeData} />

  return(
    <Wrapper>
      Couldn't find the module
    </Wrapper>
  )
}

export default ModuleThree

const Wrapper = styled.div`
  width: 100%;
`