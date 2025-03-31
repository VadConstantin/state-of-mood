import NavBar from "@/Components/Navigation/NavBar";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { IHomePage, INavigation } from '@/Types/contentful';
import { Entry } from 'contentful';
import { getNavigationData } from "@/Services/get_contentful_data";
import Footer from "@/Components/Navigation/Footer";
import { useEffect, useState } from "react";

interface ContactPageProps {
  navData: Entry<INavigation>
  homePageData: Entry<IHomePage>
}

const Index:React.FC<ContactPageProps> = ({ navData }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted) return null;
  return(
    <>
      <NavBar navData={navData}/>
      <Wrapper>
        <MobileTitle>
          <SecondLineMobile>GET IN TOUCH</SecondLineMobile>
        </MobileTitle>
        <LeftSection>
          <Title>
            About State Of Mood
          </Title>
          <Description>
            Behind State of Mood is a seasoned Creative  Director with a decade of experience crafting bold visual identities and campaigns for luxury, lifestyle, and creative brands. With a refined eye for detail and a passion for storytelling, State of Mood blends inspiration with strategy to create designs that resonate. Whether collaborating with teams or working independently, the focus remains on delivering tailored, timeless creative solutions.
          </Description>
        </LeftSection>
        <MiddleSection>
          <FirstLine>GET</FirstLine>
          <SecondLine>IN TOUCH</SecondLine>
          <Picture src="/contact-picture.png"/>
        </MiddleSection>
        <RightSection>
          <div>Nathalie Royneau</div>
          <a href="tel:+33650696546">+ 33 6 50 69 65 46</a>
          <a href="mailto:contact@stateofmood.com">Contact@stateofmood.com</a>
          <SocialLinks>
            <CustomLink href="">
              Pinterest
            </CustomLink>
            <CustomLink href="">
              Instagram
            </CustomLink>
            <CustomLink href="">
              LinkedIn
            </CustomLink>
          </SocialLinks>
        </RightSection>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const navData = await getNavigationData()
  return({
    props: {
      navData,
    }
  })
}

const Wrapper = styled.div`
  padding: 0px 10vw 150px 10vw;
  width: 100%;
  color: white;
  background-color: #B7D4D5;
  display: flex;
    justify-content: space-around;
    gap: 3vw;
  align-items: center;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
 

  @media (max-width: 800px) {
    padding: 60px 30px 60px 30px;
  }

`

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 1300px) {
    text-align: center;
    flex: none;
  }
`

const MiddleSection = styled.div`
  flex: 1;
  margin: auto;
  padding: 140px 0 0 0;
  min-width: 300px;
  position: relative;

  @media (max-width: 1300px) {
    padding: 0;
  }

  @media (max-width: 800px) {
    padding: 0px;
  }
`

const RightSection = styled.div`
  flex: 1;
  display: flex;
    flex-direction: column;
    gap: 20px;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  font-size: clamp(0.6rem, 0.5vw, 1rem);
  letter-spacing: 2px;
  padding-top: 110px;


  @media (max-width: 1300px) {
    text-align: center;
    flex: none;
    padding-top: 50px !important;

  }
`

const Title = styled.div`
  text-transform: uppercase;
  font-family: 'Knockout', sans-serif !important;
  font-size: clamp(1rem, 1.2vw, 1.5rem);
  letter-spacing: 1.5px;
  padding: 0px 0 50px 0;

  @media (max-width: 1000px) {
    padding: 20px 0 20px 0;
  }
`

const Description = styled.div`
  font-size: clamp(0.9rem, 0.7vw, 1vw);
  max-width: 630px;
  letter-spacing: 0.8px;
  line-height: 25px;
  max-width: 416px;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`

const Picture = styled.img`
  width: 100%;

  @media (max-width: 600px) {
    padding-top: 50px;
  }
`

const SocialLinks = styled.div`
  display: flex;
    justify-content: start;
    gap: 15px;
`

const CustomLink = styled.a`

`

const FirstLine = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: 8vw;
  position: absolute;
  top: 55px;
  width: 100%;
  text-align: center;

  @media (max-width: 1300px) {
    display: none;
  }
`

const SecondLine = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: 8vw;
  position: absolute;
  bottom: -100px;
  width: 100%;
  text-align: center;
  min-width: 800px;

  @media (max-width: 1300px) {
    display: none;
  }
`


const MobileTitle = styled.div`
  display: flex;
    gap: 30px;

  @media (min-width: 1300px) {
    display: none;
  }
`


const FirstLineMobile = styled.div`
  font-family: 'Knockout', sans-serif !important;
  font-size: 8vw;
`

const SecondLineMobile = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: 10vw;
`

