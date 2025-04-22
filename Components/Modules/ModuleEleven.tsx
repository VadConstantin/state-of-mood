import styled from "styled-components"

const ModuleEleven = () => {
  return(
    <div>Module Eleven </div>
  )
}

export default ModuleEleven

const Wrapper = styled.div`
  padding: 50px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
`