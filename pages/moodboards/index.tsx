import NavBar from '@/Components/Navigation/NavBar'
import { getAllMoodPages, getNavigationData } from '@/Services/get_contentful_data'
import { IMoodboardPage, INavigation } from '@/Types/contentful'
import { Entry } from 'contentful'
import { GetServerSideProps } from 'next'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Footer from "@/Components/Navigation/Footer";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import { motion, AnimatePresence } from "framer-motion";

interface IndexProps {
  data: Array<IMoodboardPage>
  navData: Entry<INavigation>
}

const Index:React.FC<IndexProps> = ({ data, navData }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>('')

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredPages = useMemo(() => {
    return data.filter((page) => page.fields.tagForMoodsPage.includes(selectedTag))
  }, [selectedTag, data])

  if (!isMounted) return null;

  const tags = data.reduce<string[]>((acc, moodpage) => {
    const tag = moodpage.fields.tagForMoodsPage;
    if (!acc.includes(tag)) acc.push(tag);
    return acc;
  }, []);

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <TopWrapper>
        <FirstTitle>Mood</FirstTitle>
        <SecondTitleSmall>Boards</SecondTitleSmall>
        <MiddleTitle>TO GET INSPIRED BEYOND TRENDS and feed your creative mind</MiddleTitle>
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
      <PagesWrapper>
        <AnimatePresence mode="wait">
        <motion.div key={selectedTag}>
          {filteredPages.map((page, index) => {
            return(
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Page key={index} reverse={index % 2 === 1}>
                  <CustomLink href={"/moodboards/" + page.fields.slug}>
                    <CustomImage src={ (page.fields.pictureForMoodsPage.fields.file as any).url} 
                                        borderColor={page.fields.firstSquareColorForMoodsPage}
                                      />
                  </CustomLink>
                  <TextsPart bgColor={page.fields.secondSquareColorForMoodsPage}>
                    <Texts>
                      <TextsTag>
                        {page.fields.tagForMoodsPage}
                      </TextsTag>
                      <Titles>
                        <FirstLineTitle>
                          {page.fields.firstLineTitleForMoodsPage}
                        </FirstLineTitle>
                        {page.fields.firstLineTitleForMoodsPage &&
                        <SecondLineTitle>
                          {page.fields.secondLineTitleForMoodsPage}
                        </SecondLineTitle>}
                      </Titles>
                      {page.fields.middleTitleForMoodsPage && 
                      <TextsMiddleTitle>
                        {page.fields.middleTitleForMoodsPage}
                      </TextsMiddleTitle>}
                      {page.fields.descriptionForMoodsPage && 
                      <Description>
                        {page.fields.descriptionForMoodsPage}
                      </Description>}
                    </Texts>
                  </TextsPart>
                </Page>
              </motion.div>
            )
          })}
          </motion.div>
        </AnimatePresence>
      </PagesWrapper>
      <Footer bottomFixed={data.length < 1}/>
    </Wrapper>
  )
}

export default Index

export const getServerSideProps:GetServerSideProps = async () => {
  const navData = await getNavigationData()
  const data = await getAllMoodPages()

  return {
    props: {
      navData,
      data
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
  max-width: 280px;
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

const PagesWrapper = styled.div`
  width: 100%;
  display: flex;
    flex-wrap: wrap;
`

const Page = styled.div<{reverse?: boolean}>`
  width: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  transition: all 0.5s ease-in-out;
`

const CustomLink = styled.a`
  text-decoration: none;
  width: 50%;
`

const CustomImage = styled.img<{borderColor: string}>`
  width: 100%;
  height: auto;
  padding: 8vw;
  background-color: ${(props) => props.borderColor};
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
    padding: 6vw;
  }
`

const TextsPart = styled.div<{bgColor: string}>`
  background-color: ${(props) => props.bgColor};
  width: 50%;
  color: ${(props) => props.color};
  display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  padding: 50px;

  @media (max-width: 600px) {
    padding: 5vw 5vw;
  }
`

const Texts = styled.div`
  width: fit-content;
  margin: auto;
`

const TextsTag = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.6rem, 0.7rem, 1.5rem);
  letter-spacing: 2px;

  @media (max-width: 800px) {
    font-size: 1.4vw;
  }
`

const Titles = styled.div`
  display: flex;
    flex-direction: column;
    gap: -10px;
`

const FirstLineTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 3.5vw, 5rem);

  @media (max-width: 800px) {
    font-size: 4vw;
  }

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const SecondLineTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 3.5vw, 5rem);

  @media (max-width: 800px) {
    font-size: 4vw;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

const Description = styled.div`
  padding-top: 20px;
  max-width: 500px;
  line-height: clamp(1rem, 1.3vw, 2rem);
  font-size: clamp(0.8rem, 0.8vw, 2rem);

  @media (max-width: 800px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
  }

  @media (max-width: 600px) {
    display: none;
    font-size: 1vw;
    line-height: 2vw;
  }
`

const TextsMiddleTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 0.9rem, 1.5rem);
  letter-spacing: -0.5px;
  padding-top: 20px;

  @media (max-width: 800px) {
    font-size: 0.4rem;
    letter-spacing: 1.1px;
  }

  @media (max-width: 600px) {
    font-size: 2vw;
    padding-top: 10px;
  }
`