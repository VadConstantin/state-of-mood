import { getNavigationData, getPortfolioData } from "@/Services/get_contentful_data";
import { INavigation, IPortfolioPage } from "@/Types/contentful";
import { GetServerSideProps } from "next";
import styled from "styled-components"
import { useEffect, useState } from "react";
import NavBar from "@/Components/Navigation/NavBar";
import { Entry } from 'contentful';
import Footer from "@/Components/Navigation/Footer";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import PortfolioGrid from "@/Components/PortfolioGrid";


interface IndexProps {
  data: IPortfolioPage
  navData: Entry<INavigation>
}

const Index:React.FC<IndexProps> = ({ data, navData }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [ selectedTag, setSelectedTag ] = useState<string>('')

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const tags = data.fields.modules.reduce<string[]>((acc, caseStudy) => {
    const tag = caseStudy.fields.tagForPortfolioPage;
    if (!acc.includes(tag)) acc.push(tag);
    return acc;
  }, []);

  function shuffleArray(array: any[]) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const filteredCases = data.fields.modules.filter((caseStudy) => {
    return caseStudy.fields.tagForPortfolioPage.includes(selectedTag)
  })


  const imagesAndSlugs = filteredCases.map((caseStudy) => {
    return {
      image: caseStudy.fields.picture, 
      link: caseStudy.fields.slug,
      firstTitle: caseStudy.fields.firstLineTitleForPortfolioPage,
      secondTitle: caseStudy.fields.secondLineTitleForPortfolioPage
    }
  })

  const otherImagesAndSlugs = selectedTag === ''
  ? data.fields.images.map(image => ({ image, link: '', firstTitle: '', secondTitle: '' }))
  : [];

  const finalObjetcts = shuffleArray([...imagesAndSlugs, ...otherImagesAndSlugs])


  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <TopWrapper>
        <FirstTitle>{data.fields.firstLineTitle}</FirstTitle>
        <SecondTitleSmall>{data.fields.secondLineTitle}</SecondTitleSmall>
        <MiddleTitle>{data.fields.middleTitle}</MiddleTitle>
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
      <CasesWrapper>
          <PortfolioGrid elements={finalObjetcts}/>
      </CasesWrapper>
      <Footer bottomFixed={data.fields.modules.length < 1}/>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  width: 100%;
`

export const getServerSideProps: GetServerSideProps = async () => {
  const navData = await getNavigationData()
  const data = await getPortfolioData()

  return {
    props : {
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

  @media (max-width: 1000px) {
    padding: 40px 5vw 40px 5vw;
  }

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
` 

const MiddleTitle = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  padding-top: 20px;
  max-width: 290px;
  margin: auto;
  letter-spacing: 2px;
  font-weight: 100;
  line-height: 30px;
  font-size: clamp(1rem, 1vw, 1rem);
  text-transform: uppercase;

  @media (max-width: 800px) {
    letter-spacing: 2px;
    font-size: 0.8rem;
    line-height: 20px;
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    letter-spacing: 1.5px;
    padding-top: 10px;
    font-size: 2vw;
    line-height: 15px;
    margin: 0;
    max-width: 250px;
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

const CasesWrapper = styled.div`
  padding: 30px 8vw 30px 8vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
    gap: 3vw;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 20px 5vw 20px 5vw;
  }

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
  }
`

