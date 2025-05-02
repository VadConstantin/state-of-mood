import { getNavigationData, getPortfolioData } from "@/Services/get_contentful_data";
import { INavigation } from "@/Types/contentful";
import { GetServerSideProps } from "next";
import styled from "styled-components"
import { useEffect, useState } from "react";
import NavBar from "@/Components/Navigation/NavBar";
import { Entry } from 'contentful';
import Footer from "@/Components/Navigation/Footer";

interface IndexProps {
  data: any
  navData: Entry<INavigation>
}

const Index:React.FC<IndexProps> = ({ data, navData }) => {
  return(
    <Wrapper>
      <NavBar navData={navData}/>
      Portfolio
      <Footer bottomFixed={data.length < 1}/>
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

