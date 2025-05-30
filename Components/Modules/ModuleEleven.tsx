import { IModuleEleven } from "@/Types/contentful"
import styled from "styled-components"
import CaseCredits from "../Mini-Modules/Module11/CaseCredits"
import CaseOthers from "../Mini-Modules/Module11/CaseOthers"

interface ModuleElevenProps {
  data: IModuleEleven
}

const ModuleEleven:React.FC<ModuleElevenProps> = ({ data }) => {

  const type = data.fields.type
  const { marginBottom, marginTop } = data.fields

  if (type === 'Credits') return <CaseCredits data={data} />
  if (type === 'Other') return <CaseOthers data={data} />

  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      Couldn't find the module.
    </Wrapper>
  )
}

export default ModuleEleven

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
  width: 100%;

  @media (max-width: 600px) {
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
  }
`