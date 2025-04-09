import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const ModuleFiveCase3: React.FC<Props> = ({ data }) => {
  console.log("DATA =====>", data);
  
  return(
    <Wrapper>
      hey this is a test
      Module Case 3 !
    </Wrapper>
  )
}

export default ModuleFiveCase3

const Wrapper = styled.div`
  
`