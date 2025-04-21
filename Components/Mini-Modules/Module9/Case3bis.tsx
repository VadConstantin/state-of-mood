import styled from "styled-components";
import React from 'react'

interface Case3bisProps {
  data: any
}

const Case3bis: React.FC<Case3bisProps> = ({ data }) => {
  console.log("data ----->", data);
  
  return(
    <Wrapper></Wrapper>
  )
}

export default Case3bis

const Wrapper = styled.div`
  width: 100%;
`