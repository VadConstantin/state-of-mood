import { INavigation } from '@/Types/contentful';
import { Entry } from 'contentful';
import styled from "styled-components";
import { useState } from "react";

interface WeeklySelectionModuleProps {
  weeklyModuleData: any
}

const WeeklySelectionModule:React.FC<WeeklySelectionModuleProps> = ({ weeklyModuleData }) => {

  const { name, description, picture, slug, tag, title} = weeklyModuleData.fields
  return(
    <Wrapper>
      <Picture src={picture.fields.file.url} alt="picture"/>
      {name}
    </Wrapper>
  )
}

export default WeeklySelectionModule

const Wrapper = styled.div`
  
`

const Picture = styled.img`
  width: clamp(250px, 45vw, 1000px);
`