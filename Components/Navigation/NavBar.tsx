import { INavigation } from '@/Types/contentful';
import { Entry } from 'contentful';
import styled from "styled-components";
import { useState } from "react";

interface NavBarProps {
  navData: Entry<INavigation>
}

const NavBar:React.FC<NavBarProps> = ({ navData }) => {
  const logo = navData.fields.logo;
  const logoUrl = (logo as any)?.fields?.file?.url;

  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false)

  const navCategories = navData.fields.navCategories

  const handleClickDropdown = (e: any) => {
    e.preventDefault()
    setIsDropDownVisible(v => !v)
  }

  return(
    <DesktopWrapper>
      <Top>
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
      <Dropdown isDropdown={isDropDownVisible}>
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
                <SubCategoriesWrapper>
                  {cat.fields.links.map((link: any, i: number)=> {
                    return ( 
                      <SubCategory href={"/"+link.fields.slug} key={i}>
                        {link.fields.name}
                      </SubCategory>
                    )
                  })}
                </SubCategoriesWrapper>
              </Section>
            )
          })}
        </DropdownLinksWrapper>
      </Dropdown>
    </DesktopWrapper>
  )
}

export default NavBar


const Top = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
    gap: 20px;
  padding: 0 90px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1010;
  background-color: white;

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

const CustomLinkLogo = styled.img`
  width: 30px;
`

const Dropdown = styled.div<{ isDropdown: boolean }>`
  width: 100%;
  height: 500px;
  background-color: white;
  position: fixed;
  top: 120px;
  left: 0;
  z-index: 1000;

  transform: ${({ isDropdown }) => (isDropdown ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  pointer-events: ${({ isDropdown }) => (isDropdown ? "auto" : "none")};

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


