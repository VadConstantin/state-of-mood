import { IModuleEleven } from "@/Types/contentful"
import styled from "styled-components"
import CaseCredits from "../Mini-Modules/Module11/CaseCredits"
import CaseOthers from "../Mini-Modules/Module11/CaseOthers"

interface ModuleElevenProps {
  data: IModuleEleven
}

const ModuleEleven:React.FC<ModuleElevenProps> = ({ data }) => {

  const type = data.fields.type

  if (type === 'Credits') return <CaseCredits data={data} />
  if (type === 'Other') return <CaseOthers data={data} />

  return(
    <Wrapper>
      Couldn't find the module.
    </Wrapper>
  )
}

export default ModuleEleven

const Wrapper = styled.div`
  width: 100%;
`