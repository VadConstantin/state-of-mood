import NavBar from "@/Components/Navigation/NavBar";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { IModuleFour, INavigation, IWhatWeDoPage } from '@/Types/contentful';
import { Entry } from 'contentful';
import { getNavigationData, getWhatWeDoPageData } from "@/Services/get_contentful_data";
import { useEffect, useState } from "react";
import Footer from "@/Components/Navigation/Footer";
import ModuleFour from "@/Components/Modules/ModuleFour";

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

  console.log('data ---->', whatWeDoPageData)

  const imageUrl = (whatWeDoPageData.fields.bannerImage as any).fields.file.url
  const { bannerMainTitle, bannerSecondTitle, bannerRectangleColor, bannerTextColor, bannerDescription } = whatWeDoPageData.fields
  
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
              Let’s craft a bespoke creative strategy <br></br>tailored to your brand.
            </Description>
          </TextsWrapper>
        </BannerRectangle>
      </BannerWrapper>
      <ModuleFour moduleFourData={whatWeDoPageData.fields.moduleFour as any}/>
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
  align-content: center;

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
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(0.7rem, 0.8rem, 2rem);
  width: 100%;
  display: flex;
    justify-content: center;
  letter-spacing: 1px;
    line-height: 25px;

  @media (max-width: 800px) {
    font-size: 1.7vw;
    line-height: 3vw;
  }
`

const TextsWrapper = styled.div`
  padding: 80px 20px 50px 20px;

  @media (max-width: 800px) {
    padding: 0;
  }
`