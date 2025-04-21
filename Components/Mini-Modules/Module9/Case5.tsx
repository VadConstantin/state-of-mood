import styled from "styled-components";
import React from 'react'

interface Case5Props {
  data: any
}

const Case5: React.FC<Case5Props> = ({ data }) => {

  console.log("data ----->", data);
  
  return(
    <Wrapper></Wrapper>
  )
}

export default Case5

const Wrapper = styled.div`
  width: 100%;
`