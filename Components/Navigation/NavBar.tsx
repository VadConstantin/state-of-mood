import { INavigation } from '@/Types/contentful';
import { Entry } from 'contentful';
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link"; 

interface NavBarProps {
  navData: Entry<INavigation>
}

const NavBar:React.FC<NavBarProps> = ({ navData }) => {
  const logo = navData.fields.logo;
  const logoUrl = (logo as any)?.fields?.file?.url;

  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(true);

  const navCategories = navData.fields.navCategories

  const handleClickDropdown = (e: any) => {
    e.preventDefault()
    setIsDropDownVisible(v => !v)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <DesktopWrapper>
      <Top isDropdown={isDropDownVisible} isVisible={isVisible}>
        <TopMenu>
          <MenuLink href="/" onClick={handleClickDropdown} isDropdown={isDropDownVisible}>
            MENU
          </MenuLink>
        </TopMenu>
        <TopMenu>
          <a href="/">
            {logoUrl && <CustomLogo src={logoUrl} alt="Logo" />}
          </a>
        </TopMenu>
        <TopMenu>
          {!isDropDownVisible ? 
          <SocialLinks>
          <a href="/">
            <CustomLinkLogo src="/logo-pinterest.png" alt="logo-pinterest" />
          </a>
          <a href="/">
            <CustomLinkLogo src="/logo-insta.png" alt="logo-insta" />
          </a>
          </SocialLinks>
          : 
          <Cross src="/cross-logo.png" alt="close" onClick={handleClickDropdown}/>
          }
        </TopMenu>
      </Top>
      <Dropdown isDropdown={isDropDownVisible} isVisible={isVisible}>
        <DropdownLinksWrapper>
          {(navCategories as any).map((cat:any, i: any) => {
            return(
              <Section key={i}>
                <span>
                  <MenuNumber>
                    {cat.fields.numberInMenu}
                  </MenuNumber>
                  <DropdownLinkTitle>
                    {cat.fields.name}
                  </DropdownLinkTitle>
                </span>
                <SubCategoriesWrapper onClick={handleClickDropdown}>
                  {cat.fields.links.map((link: any, i: number)=> {
                    return ( 
                      <Link href={`/${link.fields.slug}`} key={i} passHref legacyBehavior>
                        <SubCategory>
                          {link.fields.name}
                        </SubCategory>
                      </Link>
                    )
                  })}
                </SubCategoriesWrapper>
              </Section>
            )
          })}
          <SocialLinksPhoneWrapper>
            <SocialLinksPhone isDropdown={isDropDownVisible}>
            <a href="/">
              <CustomLinkLogo src="/logo-pinterest.png" alt="logo-pinterest" />
            </a>
            <a href="/">
              <CustomLinkLogo src="/logo-insta.png" alt="logo-insta" />
            </a>
            </SocialLinksPhone>
          </SocialLinksPhoneWrapper>
        </DropdownLinksWrapper>
      </Dropdown>
    </DesktopWrapper>
  )
}

export default NavBar


const Top = styled.div<{isDropdown: boolean, isVisible: boolean}>`
  height: 120px;
  display: flex;
  justify-content: space-between;
    gap: 20px;
  padding: 0 90px;
  position: fixed;
  width: 100%;
  top: ${({ isVisible }) => (isVisible ? '0' : '-120px')};
  z-index: 1010;
  background-color: white;
  box-shadow: ${({isDropdown}) => (isDropdown ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.01)' )};
  transition: top 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;


const MenuLink = styled.a<{ isDropdown: boolean }>`
  font-family: 'Knockout', sans-serif !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
  position: relative;

  @media (max-width: 600px) {
    opacity: 1;
    font-size: 0;

    &::before,
    &::after {
      content: "";
      display: block;
      width: 25px;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;
    }

    &::before {
      top: ${({ isDropdown }) => (isDropdown ? "50%" : "35%")}; 
      transform: ${({ isDropdown }) => (isDropdown ? "translate(-50%, -50%) rotate(45deg)" : "translateX(-50%)")};
    }

    &::after {
      top: ${({ isDropdown }) => (isDropdown ? "50%" : "65%")}; 
      transform: ${({ isDropdown }) => (isDropdown ? "translate(-50%, -50%) rotate(-45deg)" : "translateX(-50%)")};
    }

    span {
      display: block;
      width: 25px;
      height: 2px;
      background-color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: ${({ isDropdown }) => (isDropdown ? "translate(-50%, -50%) scale(0)" : "translate(-50%, -50%)")};
      transition: all 0.3s ease-in-out;
    }
  }
`;


const DesktopWrapper = styled.div`
  background-color: white;
  color: rgb(0, 0, 0);
  z-index: 1000;
`

const TopMenu = styled.div`
  margin: auto 0;
`

const CustomLogo = styled.img`
  width: 240px;
`

const SocialLinks = styled.div`
  display: flex;
    justify-content: space-between;
    gap: 5px;
    width: 30px;

  @media (max-width: 600px) {
    opacity: 0;
    pointer-events: none;
  }
`

const SocialLinksPhone = styled.div<{isDropdown: boolean}>`
  display: flex;
    justify-content: space-between;
    gap: 10px;
  padding-top: 50px;

  @media (min-width: 600px) {
    opacity: 0;
    pointer-events: none;
  }
`

const SocialLinksPhoneWrapper = styled.div`

`

const CustomLinkLogo = styled.img`
  width: 30px;
`

const Dropdown = styled.div<{ isDropdown: boolean; isVisible: boolean }>`
  width: 100%;
  height: 500px;
  background-color: white;
  position: fixed;
  left: 0;
  z-index: 1000;

  transform: ${({ isDropdown, isVisible }) => !isVisible ? "translateY(-200%)" : isDropdown ? "translateY(0)" : "translateY(-100%)"};

  transition: transform 0.4s ease-in-out;
  pointer-events: ${({ isDropdown }) => (isDropdown ? "auto" : "none")};

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    height: calc(100vh - 120px);
  }
`;


const Cross = styled.img`
  width: 30px;
  cursor: pointer;

  @media (max-width: 600px) {
    opacity: 0;
    pointer-events: none;
  }
`

const DropdownLinksWrapper = styled.div`
  display: flex;
    flex-direction: column;
    gap: 20px;
  align-items: center;
  padding-top: 50px;
  width: 100%;

  @media (max-width: 600px) {
    padding-top: 120px;
  }
`

const DropdownLinkTitle = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  font-family: 'Knockout', sans-serif !important;
  text-transform: uppercase;
  display: inline-block;

`

const SubCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SubCategory = styled.a`
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
  font-family: 'Knockout', sans-serif !important;
  font-size: 10px;
  letter-spacing: 2px;
  text-underline-offset: 2px;
`

const Section = styled.div`
  width: 100%;
  text-align: center;
`

const MenuNumber = styled.div`
  font-size: 20px;
  font-family: 'Americana', sans-serif !important;
  display: inline-block;
  margin-right: 15px;

`


