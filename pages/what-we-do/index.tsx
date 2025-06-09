import NavBar from "@/Components/Navigation/NavBar";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { IModuleFour, IModuleThree, INavigation, IWhatWeDoPage } from '@/Types/contentful';
import { Entry } from 'contentful';
import { getNavigationData, getWhatWeDoPageData } from "@/Services/get_contentful_data";
import { useEffect, useState } from "react";
import Footer from "@/Components/Navigation/Footer";
import ModuleFour from "@/Components/Modules/ModuleFour";
import ModuleThree from "@/Components/Modules/ModuleThree";

interface IndexProps {
  navData: Entry<INavigation>
  whatWeDoPageData: Entry<IWhatWeDoPage>
}

const Index:React.FC<IndexProps> = ({ navData, whatWeDoPageData }) => {

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const imageUrl = (whatWeDoPageData.fields.bannerImage as any).fields.file.url
  const { bannerMainTitle, bannerSecondTitle, bannerRectangleColor, bannerTextColor, bannerDescription } = whatWeDoPageData.fields
  const modules = whatWeDoPageData.fields?.modules || []
  
  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <BannerWrapper bgImage={imageUrl}>
        <BannerRectangle backgroundColor={bannerRectangleColor as any} color={bannerTextColor as any}>
          <TextsWrapper>
            <FirstTitle>
              {bannerMainTitle as any}
            </FirstTitle>
            <SecondTitle>
              {bannerSecondTitle as any}
            </SecondTitle>
            <Description>
              {bannerDescription as any}
            </Description>
          </TextsWrapper>
        </BannerRectangle>
      </BannerWrapper>
      <ModulesWrapper>
        {(modules as any).map((module: any, index: any) => {
          if (module.sys.contentType.sys.id === "moduleFour") return <ModuleFour moduleFourData={module as IModuleFour} key={index}/>
          if (module.sys.contentType.sys.id === "moduleThree") return <ModuleThree moduleThreeData={module as IModuleThree} key={index}/>
        })}
      </ModulesWrapper>
      <Footer />
    </Wrapper>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const navData = await getNavigationData()
  const whatWeDoPageData = await getWhatWeDoPageData()
  return({
    props: {
      navData,
      whatWeDoPageData
    }
  })
}

const Wrapper = styled.div`
  width: 100%;
`

const BannerWrapper = styled.div<{bgImage: string}>`
  background-image: url(${(props) => `https:${props.bgImage}`});
  width: 100%;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  display: flex;
    justify-content: center;
    align-items: center;

  @media (max-width: 800px) {
    height: 100vw;
  }
`

const BannerRectangle = styled.div<{backgroundColor: string, color: string}>`
  width: 760px;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
  margin: auto;
  color: ${(props) => props.color};
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 800px) {
    width: 90vw;
    height: 40vw;
    align-content: center;
  }
`

const FirstTitle = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 2.5rem, 5rem);
  padding-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 5vw;
    padding-bottom: 1vw;
  }
`

const SecondTitle = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: clamp(1rem, 1.8rem, 5rem);
  padding-bottom: 25px;

  @media (max-width: 800px) {
    font-size: 4vw;
    padding-bottom: 3vw;
  }
`

const Description = styled.div`
  font-family: 'KnockoutHTF', sans-serif !important;
  font-size: 1rem;
  display: flex;
    justify-content: center;
  letter-spacing: 2px;
  line-height: 30px;
  max-width: 400px;
  margin: auto;

  @media (max-width: 800px) {
    font-size: 1.7vw;
    line-height: 3vw;
    max-width: 300px;
  }

  @media (max-width: 500px) {
    max-width: 250px;
  }
`

const TextsWrapper = styled.div`
  padding: 80px 20px 50px 20px;
  width: 100%;

  @media (max-width: 800px) {
    padding: 0;
  }
`

const ModulesWrapper = styled.div`
  display: flex;
    flex-direction: column;
`