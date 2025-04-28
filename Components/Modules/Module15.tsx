import { IModule15 } from "@/Types/contentful"
import styled from "styled-components"
import Case1 from "../Mini-Modules/Module15/Case1"
import Case2 from "../Mini-Modules/Module15/Case2"

interface Module15props {
  data: IModule15
}

const Module15:React.FC<Module15props> = ({ data }) => {
  const type = data.fields.type

  if (type === 'Case 1') return <Case1 data={data} />
  if (type === 'Case 2') return <Case2 data={data} />

  return(
    <Wrapper>
      Couldn't find the module.
    </Wrapper>
  )
}

export default Module15

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 8vw;
  width: 100%;
  display: flex;
    justify-content: center;
    gap: 5vw;
  background-color: white;
  color: black;
  align-items: center;

  @media (max-width: 600px) {
    padding: 50px 5vw 20px 5vw;
    text-align: start;
    flex-wrap: wrap;
    justify-content: start;
  }
`
