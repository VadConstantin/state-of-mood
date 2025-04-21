import { IModuleNine } from "@/Types/contentful";
import styled from "styled-components";
import FirstTitle from "../FirstTitle";
import SecondTitle from "../SecondTitle";

interface ModuleNineProps {
  data: IModuleNine
}

const ModuleNine:React.FC<ModuleNineProps> = ({ data }) => {
  const type = data.fields.type

  if(type === 'Case 1') return (<div></div>)
  if(type === 'Case 2') return(<div></div>)
  if(type === 'Case 3') return(<div></div>)
  if(type === 'Case 3 bis') return(<div></div>)
  if(type === 'Case 4') return(<div></div>)


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

