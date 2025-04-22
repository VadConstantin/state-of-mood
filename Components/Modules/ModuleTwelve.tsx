import { IModuleTwelve } from "@/Types/contentful"
import styled from "styled-components"
import Case1 from "../Mini-Modules/Module12/Case1"
import Case2 from "../Mini-Modules/Module12/Case2"
import Case3 from "../Mini-Modules/Module12/Case3"

interface ModuleTwelveProps {
  data: IModuleTwelve
}

const ModuleTwelve:React.FC<ModuleTwelveProps> = ({ data }) => {

  const type = data.fields.type

  if (type === 'Case 1') return <Case1 data={data as any} />
  if (type === 'Case 2') return <Case2 data={data as any} />
  if (type === 'Case 3') return <Case3 data={data as any} />

  return(
    <Wrapper>
      Module Twelve
    </Wrapper>
  )
}

export default ModuleTwelve

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({color}) => color};
  padding: 60px 50px 100px 50px;

  @media (max-width: 600px) {
    padding: 50px 5vw 15vw 5vw;
  }
`
