import styled from "styled-components"
import Footer from "@/Components/Navigation/Footer";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/Components/Navigation/NavBar";
import { IArticlePage, INavigation, IFocusPage } from "@/Types/contentful";
import { Entry } from "contentful";
import { getNavigationData, getPageFocusData } from "@/Services/get_contentful_data";
import { useEffect, useState } from "react";

interface IndexProps {
  data: IFocusPage
  navData: Entry<INavigation>
}

const Index:React.FC<IndexProps> = ({ data, navData }) => {

  const [ selectedTag, setSelectedTag ] = useState<string>('')
  const [ isMounted, setIsMounted ] = useState<boolean>(false);

  const articles = data.fields?.articles || []

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const tags = articles.reduce<string[]>((acc, moodpage) => {
    const tag = moodpage.fields.tagForFocusPage;
    if (!acc.includes(tag)) acc.push(tag);
    return acc;
  }, []);

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <TopWrapper>
        <FirstTitle>FOCUS</FirstTitle>
        <SecondTitleSmall>Boards</SecondTitleSmall>
        <MiddleTitle>CURATION OF ARTISTs AND DEsiGNERs TALENT</MiddleTitle>
        <TagsWrapper>
          {tags.map((tag, index) => {
            return(
              <Tag key={index} onClick={() => setSelectedTag(tag)} bold={tag === selectedTag}>
                {tag}
              </Tag>
            )
          })}
          <Tag onClick={() => setSelectedTag('')} bold={selectedTag === ''}>
            ALL
          </Tag>
        </TagsWrapper>
      </TopWrapper>
      <Footer bottomFixed={data.fields.articles.length < 1}/>
    </Wrapper>
  )
}

export default Index

export const getServerSideProps = async () => {
  const data = await getPageFocusData()
  const navData = await getNavigationData()

  return {
    props: {
      data,
      navData
    }
  }
}

const TopWrapper = styled.div`
  padding: 80px 8vw;
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

const Wrapper = styled.div`
  width: 100%;
`

const MiddleTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  padding-top: 20px;
  max-width: 400px;
  margin: auto;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: clamp(1rem, 1.4vw, 2rem);
  font-size: clamp(0.6rem, 0.5vw, 1rem);
  text-transform: uppercase;

  @media (max-width: 800px) {
    letter-spacing: 0.5px;
    font-size: 1.2vw;
    line-height: 2vw;
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    padding-top: 10px;
    font-size: 1.5vw;
    line-height: 2.7vw;
    margin: 0;
    max-width: 200px;
  }
  `

const TagsWrapper = styled.div`
  padding-top: 50px;
  margin: auto;
  display: flex;
    gap: 4vw;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
  
  @media (max-width: 600px) {
    margin: 0;
    padding-top: 20px;
  }
`

const Tag = styled.div<{bold?: boolean}>`
  font-size: 1.1vw;
  font-weight: ${(props) => props.bold ? '900' : '100'};
  text-decoration: ${(props) => props.bold ? 'underline' : 'none'};
  text-underline-offset: 3px;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 1.5vw;
  }

  @media (max-width: 800px) {
    font-size: 1.7vw;
  }

  @media (max-width: 600px) {
    font-size: 2vw;
  }

  cursor: pointer;
`
