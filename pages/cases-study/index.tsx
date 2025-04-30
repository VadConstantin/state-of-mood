import { getCasesStudyData, getHomePageData, getNavigationData } from "@/Services/get_contentful_data";
import { ICaseStudyPage, INavigation } from "@/Types/contentful";
import { GetServerSideProps } from "next";
import styled from "styled-components"
import { useEffect, useState } from "react";
import NavBar from "@/Components/Navigation/NavBar";
import { Entry } from 'contentful';
import Footer from "@/Components/Navigation/Footer";

interface IndexProps {
  casesStudy: ICaseStudyPage[]
  navData: Entry<INavigation>
}

// const Index:React.FC<IndexProps> = ({ casesStudy, navData }) => {
const Index:React.FC<IndexProps> = ({ casesStudy, navData }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <CasesWrapper>
        {casesStudy.map((caseStudy, index) => {
          return(
            <CaseStudy key={index}>
              <CustomLink href={"/cases-study/" + caseStudy.fields.slug}>
                <CustomImage src={(caseStudy.fields.picture.fields.file as any).url}/>
                <Overlay bgColor={caseStudy.fields.color}>
                  <OverlayText textColor={caseStudy.fields.textColor}>{caseStudy.fields.name}</OverlayText>
                </Overlay>
              </CustomLink>
            </CaseStudy>
          )
        })}
      </CasesWrapper>
      <Footer />
    </Wrapper>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const navData = await getNavigationData()
  const homePageData = await getHomePageData()
  const casesStudy = await getCasesStudyData()
  return({
    props: {
      navData,
      homePageData, 
      casesStudy
    }
  })
}

const Wrapper = styled.div`
  width: 100%;
`

const CasesWrapper = styled.div`
  width: 100%;
  display: flex;
    flex-wrap: wrap;
`

const CaseStudy = styled.div`
    width: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover img {
    opacity: 0;
  }

  &:hover div {
    opacity: 1;
  }
`

const CustomImage = styled.img`
  width: 100%;
  display: block;
  transition: opacity 0.3s ease;
`

const Overlay = styled.div<{bgColor: string}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const OverlayText = styled.div<{textColor: string}>`
  font-family: 'Knockout', sans-serif !important;
  color: ${(props) => props.textColor};
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const CustomLink = styled.a`
  text-decoration: none;
`