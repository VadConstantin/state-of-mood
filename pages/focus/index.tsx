import styled from "styled-components"
import Footer from "@/Components/Navigation/Footer";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import NavBar from "@/Components/Navigation/NavBar";
import { IArticlePage, INavigation, IFocusPage } from "@/Types/contentful";
import { Entry } from "contentful";
import { getNavigationData, getPageFocusData } from "@/Services/get_contentful_data";
import { useEffect, useMemo, useState } from "react";

interface IndexProps {
  data: IFocusPage
  navData: Entry<INavigation>
}

const Index:React.FC<IndexProps> = ({ data, navData }) => {

  const [ selectedTag, setSelectedTag ] = useState<string>('')
  const [ isMounted, setIsMounted ] = useState<boolean>(false);

  const articles = data.fields?.articles || []

  const filteredArticles = useMemo(() => {
    return ((articles).filter((article: IArticlePage) => article.fields.tagForFocusPage.includes(selectedTag)))
  }, [data, selectedTag])

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
        <MiddleTitle>CURATION OF ARTISTs AND DESIGNERs TALENT</MiddleTitle>
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
      <ArticlesWrapper>
        {filteredArticles.map((article, index) => {
          if (index === 4) {
            const article5 = filteredArticles[4];
            const article6 = filteredArticles[5];

            return (
              <>
                <ArticleStack key="stack-5">
                  <Article image={(article5 as any).fields.pictureForFocusPage.fields.file.url} fullWidth>
                    <SmallTexts>
                      <SmallTextsTag>
                        {article5.fields.tagForFocusPage}
                      </SmallTextsTag>
                      <SmallTextsFirstTitle>
                        {article5.fields.firstLineTitleForFocusPage}
                      </SmallTextsFirstTitle>
                      <SmallTextsSecondTitle>
                        {article5.fields.secondLineTitleForFocusPage}
                      </SmallTextsSecondTitle>
                      <SmallTextsLink href={"/articles/"+article5.fields.slug}>
                        {article5.fields.linkTitleForFocusPage}
                      </SmallTextsLink>
                    </SmallTexts>
                  </Article>
                  <Article image={(article6 as any).fields.pictureForFocusPage.fields.file.url} fullWidth>
                    <SmallTexts>
                      <SmallTextsTag>
                        {article6.fields.tagForFocusPage}
                      </SmallTextsTag>
                      <SmallTextsFirstTitle>
                        {article6.fields.firstLineTitleForFocusPage}
                      </SmallTextsFirstTitle>
                      <SmallTextsSecondTitle>
                        {article6.fields.secondLineTitleForFocusPage}
                      </SmallTextsSecondTitle>
                      <SmallTextsLink href={"/articles/"+article6.fields.slug}>
                        {article6.fields.linkTitleForFocusPage}
                      </SmallTextsLink>
                    </SmallTexts>
                  </Article>
                </ArticleStack>
              </>
            )
          }

          if (index === 6) {
            return (
              <Article
                key="6"
                image={(filteredArticles[6] as any).fields.pictureForFocusPage.fields.file.url}
              >
                <MediumTexts>
                  <MediumTextsTag>
                    {article.fields.tagForFocusPage}
                  </MediumTextsTag>
                  <MediumTextsFirstTitle>
                    {article.fields.firstLineTitleForFocusPage}
                  </MediumTextsFirstTitle>
                  <MediumTextsSecondTitle>
                    {article.fields.secondLineTitleForFocusPage}
                  </MediumTextsSecondTitle>
                  <MediumTextsLink href={"/articles/"+article.fields.slug}>
                    {article.fields.linkTitleForFocusPage}
                  </MediumTextsLink>
                </MediumTexts>
              </Article>
            )
          }

          if (index === 5) return null;

          if (index === 0 || index === 3) {
            return(
              <Article
              key={index}
              fullWidth
              image={(article as any).fields.pictureForFocusPage.fields.file.url}
            >
             <BigTexts>
                <BigTextsTag>
                  {article.fields.tagForFocusPage}
                </BigTextsTag>
                <BigTextsFirstTitle>
                  {article.fields.firstLineTitleForFocusPage}
                </BigTextsFirstTitle>
                <BigTextsSecondTitle>
                  {article.fields.secondLineTitleForFocusPage}
                </BigTextsSecondTitle>
                <BigTextsLink href={"/articles/"+article.fields.slug}>
                  {article.fields.linkTitleForFocusPage}
                </BigTextsLink>
             </BigTexts>
            </Article>
            )
          }

          return (
            <Article
              key={index}
              image={(article as any).fields.pictureForFocusPage.fields.file.url}
            >
              <MediumTexts>
                <MediumTextsTag>
                  {article.fields.tagForFocusPage}
                </MediumTextsTag>
                <MediumTextsFirstTitle>
                  {article.fields.firstLineTitleForFocusPage}
                </MediumTextsFirstTitle>
                <MediumTextsSecondTitle>
                  {article.fields.secondLineTitleForFocusPage}
                </MediumTextsSecondTitle>
                <MediumTextsLink href={"/articles/"+article.fields.slug}>
                  {article.fields.linkTitleForFocusPage}
                </MediumTextsLink>
              </MediumTexts>
            </Article>
          );
        })}
      </ArticlesWrapper>
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

  @media (max-width: 1000px) {
    padding: 40px 5vw 40px 5vw;
  }

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

const ArticlesWrapper = styled.div`
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

const Article = styled.div<{ fullWidth?: boolean; image: string }>`
  width: ${(props) => (props.fullWidth ? '100%' : '48%')};
  height: 50vw;
  background-image: url(${(props) => `https:${props.image}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const ArticleStack = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  height: 50vw;

  & img {
    width: 100%;
  }
`

const BigTexts = styled.div`
  position: absolute;
  bottom: 3vw;
  left: 3vw;
  display: flex;
    flex-direction: column;
    gap: 0.8vw;
`

const BigTextsFirstTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const BigTextsSecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 2.3vw, 3rem);
  text-transform: uppercase;
  padding-bottom: 1.5vw;

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

const BigTextsTag = styled.div`
  font-size: 0.8vw;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 1vw;
  }

  @media (max-width: 800px) {
    font-size: 1.3vw;
  }

  @media (max-width: 600px) {
    font-size: 1.5vw;
  }
`

const BigTextsLink = styled.a`
  font-size: 1.5vw;
  text-decoration: underline;
  text-underline-offset: 0.3vw;
  font-family: 'Knockout', sans-serif !important;

  @media (max-width: 800px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
`

const MediumTexts = styled.div`
  position: absolute;
  bottom: 3vw;
  left: 3vw;
  display: flex;
    flex-direction: column;
    gap: 0.5vw;
`

const MediumTextsFirstTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 2vw, 3.5rem);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 2.3vw;
  }
`

const MediumTextsSecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 1.6vw, 3rem);
  text-transform: uppercase;
  padding-bottom: 1.2vw;

  @media (max-width: 600px) {
    font-size: 1.8vw;
  }
`

const MediumTextsTag = styled.div`
  font-size: 0.8vw;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 1vw;
  }

  @media (max-width: 800px) {
    font-size: 1.3vw;
  }

  @media (max-width: 600px) {
    font-size: 1.5vw;
  }
`

const MediumTextsLink = styled.a`
  font-size: 1vw;
  text-decoration: underline;
  text-underline-offset: 0.3vw;
  font-family: 'Knockout', sans-serif !important;

  @media (max-width: 800px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
`

const SmallTexts = styled.div`
  position: absolute;
  bottom: 3vw;
  left: 3vw;
  display: flex;
    flex-direction: column;
    gap: 0.3vw;
`

const SmallTextsFirstTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: 2vw;
  text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 1.8vw;
  }

  @media (max-width: 600px) {
    font-size: 1.8vw;
  }
`

const SmallTextsSecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: 1.8vw;
  text-transform: uppercase;
  padding-bottom: 0.6vw;

  @media (max-width: 800px) {
    font-size: 1.5vw;
  }

  @media (max-width: 600px) {
    font-size: 1.6vw;
  }
`

const SmallTextsTag = styled.div`
  font-size: 0.8vw;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 1vw;
  }

  @media (max-width: 800px) {
    font-size: 1.3vw;
  }

  @media (max-width: 600px) {
    font-size: 1.5vw;
  }
`

const SmallTextsLink = styled.a`
  font-size: 1vw;
  text-decoration: underline;
  text-underline-offset: 0.3vw;
  font-family: 'Knockout', sans-serif !important;

  @media (max-width: 800px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
`










