import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case3: React.FC<Props> = ({ data }) => {
  console.log("DATA =====>", data);
  
  return(
    <Wrapper>
      je change le truc.... hihiahah ohaha
    </Wrapper>
  )
}

export default Module5Case3

const Wrapper = styled.div`
  
`