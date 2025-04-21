import styled from "styled-components";
import React from 'react'

interface Case4Props {
  data: any
}

const Case4: React.FC<Case4Props> = ({ data }) => {

  console.log("data ----->", data);
  
  return(
    <Wrapper></Wrapper>
  )
}

export default Case4

const Wrapper = styled.div`
  width: 100%;
`