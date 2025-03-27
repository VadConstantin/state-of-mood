import NavBar from "@/Components/Navigation/NavBar";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { INavigation } from '@/Types/contentful';
import { Entry } from 'contentful';
import { getNavigationData } from "@/Services/get_contentful_data";
import { useEffect, useState } from "react";

interface HomePageProps {
  navData: Entry<INavigation>
}

const Index:React.FC<HomePageProps> = ({ navData }) => {

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <>Hello Home page !</>
    </Wrapper>
  )
}

export default Index;

const Wrapper = styled.div`
  color: black;
  background-color: #dfdfdf;
  height: 100vh;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale;
  const navData = await getNavigationData()
  return({
    props: {
      navData
    }
  })
}

