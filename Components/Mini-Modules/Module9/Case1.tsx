import styled from "styled-components";
import React from 'react'

interface Case1Props {
  data: any
}

const Case1: React.FC<Case1Props> = ({ data }) => {

  console.log("data ----->", data);
  
  return(
    <div></div>
  )
}

export default Case1