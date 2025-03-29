import NavBar from "@/Components/Navigation/NavBar";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { IHomePage, IModuleOne, INavigation, HomePageFields } from '@/Types/contentful';
import { Entry } from 'contentful';
import { getHomePageData, getNavigationData } from "@/Services/get_contentful_data";
import { useEffect, useState } from "react";
import ModuleOneCarousel from "@/Components/Modules/ModuleOneCarousel";

interface HomePageProps {
  navData: Entry<INavigation>
  homePageData: Entry<IHomePage>
}

const Index:React.FC<HomePageProps> = ({ navData, homePageData }) => {

  console.log("HomePage Data ----->", homePageData);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <ModuleOneCarousel modulesOneData={homePageData.fields.modulesOne}/>
    </Wrapper>
  )
}

export default Index;

const Wrapper = styled.div`
  color: black;
  background-color: #2e2e2e;
  height: 100vh;
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

