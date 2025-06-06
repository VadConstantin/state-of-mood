import NavBar from "@/Components/Navigation/NavBar";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { IHomePage, IModuleThree, INavigation } from '@/Types/contentful';
import { Entry } from 'contentful';
import { getHomePageData, getNavigationData } from "@/Services/get_contentful_data";
import { useEffect, useState } from "react";
import ModuleOneCarousel from "@/Components/Modules/ModuleOneCarousel";
import ModuleTwo from "@/Components/Modules/ModuleTwo";
import ModuleThree from "@/Components/Modules/ModuleThree";
import Footer from "@/Components/Navigation/Footer";

interface HomePageProps {
  navData: Entry<INavigation>
  homePageData: Entry<IHomePage>
}

const Index:React.FC<HomePageProps> = ({ navData, homePageData }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <ModuleOneCarousel modulesOneData={homePageData.fields.modulesOne} />
      <ModuleTwo moduleTwoData={homePageData.fields.moduleTwo as any} />
      <ModuleThree moduleThreeData={homePageData.fields.moduleThree as any}/>
      <Footer />
    </Wrapper>
  )
}

export default Index;

const Wrapper = styled.div`
  color: black;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale;
  const navData = await getNavigationData()
  const homePageData = await getHomePageData()
  return({
    props: {
      navData,
      homePageData
    }
  })
}

