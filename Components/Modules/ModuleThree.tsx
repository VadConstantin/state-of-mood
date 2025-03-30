import styled from "styled-components";

interface ModuleThreeProps {
  moduleThreeData: any
}

const ModuleThree:React.FC<ModuleThreeProps> = ({ moduleThreeData }) => {

  const { backgroundColor, picture, tag, titleFirstLine, titleSecondLine, description, linkTitle, linkSlug } = moduleThreeData.fields
  return(
    <Wrapper>

    </Wrapper>
  )
}

export default ModuleThree

const Wrapper = styled.div`
  width: 100%;

`