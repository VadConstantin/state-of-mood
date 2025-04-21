import styled from "styled-components";
import React from 'react'

interface Case2Props {
  data: any
}

const Case2: React.FC<Case2Props> = ({ data }) => {

  console.log("data ----->", data);
  
  return(
    <Wrapper></Wrapper>
  )
}

export default Case2

const Wrapper = styled.div`
  width: 100%;
`