import { IModuleTwelve } from "@/Types/contentful"
import styled from "styled-components"

interface ModuleTwelveProps {
  data: IModuleTwelve
}

const ModuleTwelve:React.FC<ModuleTwelveProps> = ({ data }) => {

  const type = data.fields.type

  if (type === 'Case 1') return null
  if (type === 'Case 2') return null

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
