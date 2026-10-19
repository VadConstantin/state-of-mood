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
            About The Team
          </Title>
          <Description>
            REEL réunit trois regards complémentaires, animés par une même exigence cinématographique, esthétique et narrative.
            Vincent Vallon, réalisateur passé par VICE, le documentaire et la fiction, cultive une approche sensible des personnages et des émotions. À ses côtés depuis plus de dix ans, Julien Courret, directeur de la photographie, façonne la lumière et le cadre. Nathalie Royneau, directrice artistique et photographe, imagine depuis plus de dix ans des concepts et des univers visuels pour les marques. Ensemble, ils conjuguent leurs sensibilités et leurs savoir-faire pour donner à chaque projet une écriture et une signature visuelle singulières.
          </Description>
        </LeftSection>
        <MiddleSection>
          <FirstLine>GET</FirstLine>
          <SecondLine>IN TOUCH</SecondLine>
          <Picture src="/photo-contact.png"/>
        </MiddleSection>
        <RightSection>
          <a href="mailto:CONTACT@REELFILMS.COM">CONTACT@REELFILMS.COM</a>
          <Adresse>
            <div>14 RUE FRUCTIDOR</div>
            <div>93400 SAINT-OUEN-SUR-SEINE</div>
          </Adresse>
          <SocialLinks>
            <CustomLink href="https://www.instagram.com/reelfilmsparis/" target="_blank">
              Instagram
            </CustomLink>
            <CustomLink href="" target="_blank">
              Youtube
            </CustomLink>
            <CustomLink href="" target="_blank">
              Behance
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

const Adresse = styled.div`
  display: flex;
    flex-direction: column;
    gap: 5px;
`


const Wrapper = styled.div`
  padding: 0px 10vw 150px 10vw;
  width: 100%;
  color: white;
  background-color: #020C08;
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
  left: 15%;
  white-space: nowrap;
    transform: translateX(-50%);

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

const SecondLineMobile = styled.div`
  font-family: 'Americana', sans-serif !important;
  font-size: 10vw;
  padding-top: 60px;

  @media (max-width: 800px) {
    padding-top: 0px;
  }
`

