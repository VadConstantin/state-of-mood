import styled from "styled-components";
import React from 'react'

interface Case3Props {
  data: any
}

const Case3: React.FC<Case3Props> = ({ data }) => {

  console.log("data ----->", data);
  
  return(
    <Wrapper></Wrapper>
  )
}

export default Case3

const Wrapper = styled.div`
  width: 100%;
`