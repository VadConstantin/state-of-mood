import { INavigation, INavcategory, IModuleOne } from '@/Types/contentful';
import { Entry } from 'contentful';
import styled from "styled-components";
import {  useState } from "react";

interface ModuleOneProps {
  moduleOneData: any
}

const ModuleOne:React.FC<ModuleOneProps> = ({ moduleOneData }) => {

  const { backgroundColor, 
          titleFirstLine, 
          titleSecondLine,
          tag,
          linkTitle,
          firstPicture,
          secondPicture,
          linkSlug,
          stampForSecondPicture
         } = moduleOneData.fields

  return(
    <Wrapper color={backgroundColor}>
      <PicturesWrapper>
        <FirstPicAndText>
          <FirstPicture src={firstPicture.fields.file.url} alt="picture" />
          <Tag>
            {tag}
          </Tag>
          <FirstLine>
            {titleFirstLine}
          </FirstLine>
          <SecondLine>
            {titleSecondLine}
          </SecondLine>
          
        </FirstPicAndText>
        <SecondPicture src={secondPicture.fields.file.url} alt="picture" />
      </PicturesWrapper>
    </Wrapper>
  )
}

export default ModuleOne

const Wrapper = styled.div<{color: string}>`
  background-color: ${({color}) => color };
  width: 100%;
  height: 800px;
`

const PicturesWrapper = styled.div`
  /* padding: 40px 150px 0 150px; */
  padding: 40px 10vw 0 10vw;
  display: flex;

    justify-content: space-between;
    gap: 4vw;
`

const FirstPicture = styled.img`
  width: clamp(100px, 35vw, 1000px);
  height: clamp(60px, 30vw, 800px);
  position: relative;
`

const SecondPicture = styled.img`
  width: clamp(250px, 45vw, 1000px);
  position: relative;
  padding-top: 100px;
`

const FirstPicAndText = styled.div`
  text-transform: uppercase;
`

const Tag = styled.div`
  font-family: 'Knockout', sans-serif !important;
  color: white;
  font-size: 0.6rem;
`

const FirstLine = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 4rem, 5rem);
  color: white;
  
`

const SecondLine = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 4rem, 5rem);
  color: white;
`



