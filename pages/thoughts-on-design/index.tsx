import { getNavigationData, getThoughtsOnDesignData } from "@/Services/get_contentful_data"
import { IThoughtsOnDesignPage, INavigation, IModuleThree } from "@/Types/contentful"
import styled from "styled-components"
import { Entry } from 'contentful';
import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useEffect, useState } from "react";
import FirstTitle from "@/Components/FirstTitle";
import SecondTitleSmall from "@/Components/SecondTitleSmall";
import MiddleTitleSmall from "@/Components/MiddleTitleSmall";
import ModuleThree from "@/Components/Modules/ModuleThree";

interface IndexProps {
  data: IThoughtsOnDesignPage
  navData: Entry<INavigation>
}

const Index:React.FC<IndexProps> = ({ data, navData }) => {

  const [isMounted, setIsMonted] = useState(false)
  const [searchText, setSearchText] = useState('')

  const firstLineTitle = data.fields?.firstLineTitle || null
  const secondLinetitle = data.fields?.secondLineTitle || null
  const middleTitle = data.fields?.middleTitle || null
  const modules = data.fields?.modules || []

  useEffect(() => {
    setIsMonted(true)
  }, [])

  if (!isMounted) return null;

  const handleChange = (e: any) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  const filteredModules = modules.filter((module) => {
    const query = searchText.toLowerCase();
  
    return module.fields.titleFirstLine.toLowerCase().includes(query) || (module.fields as any)?.titleSecondLine.toLowerCase().includes(query) 
  });

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <TopWrapper>
        <FirstTitle>{firstLineTitle}</FirstTitle>
        {secondLinetitle && <SecondTitleSmall>{secondLinetitle}</SecondTitleSmall>}
        {middleTitle && <MiddleTitleSmall>{middleTitle}</MiddleTitleSmall>}
        <SearchWrapper>
          <form>
            <CustomInput type="text" value={searchText} onChange={(e: any) => {handleChange(e)}} placeholder="SEARCH" aria-label="Search modules"/>
          </form>
          <SearchIcon src="/search-icon.png" alt="Search Icon" />
        </SearchWrapper>
      </TopWrapper>
      <ModulesWrapper>
      {filteredModules.length > 0 ? (
        filteredModules.map((module, index) => (
          <ModuleThree moduleThreeData={module as IModuleThree} key={index}/>
        ))
      ) : <></>
      }
      </ModulesWrapper>
      <Footer bottomFixed={filteredModules.length < 1}/>
    </Wrapper>
  )
}
export default Index

export const getServerSideProps = async () => {
  const data = await getThoughtsOnDesignData()
  const navData = await getNavigationData()
  return ({
    props: {
      data,
      navData
    }
  })
}

const Wrapper = styled.div`
  width: 100%;
`

const ModulesWrapper = styled.div`
  display: flex;
    flex-direction: column;
`

const TopWrapper = styled.div`
  padding: 80px 8vw;
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px 5vw 20px 5vw;
    text-align: start;
  }
` 

const SearchWrapper = styled.div`
  margin: auto;
  font-size: clamp(0.8rem, 0.9rem, 1rem);
  letter-spacing: 1px;
  padding-top: 30px;
  display: flex;;
    gap: 7px;
    flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    padding-top: 5px;
    align-items: start;
    margin: 0;
  }
`

const CustomInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  min-width: 220px;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  font-size: 1.2rem;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: none;
  }

  &::placeholder {
    font-size: 1.2rem;
    color: #aaa;
    letter-spacing: 4px;
  }

  @media (max-width: 600px) {
    min-width: 150px;
    font-size: 1rem;

    &::placeholder {
      font-size: 0.8rem;
      letter-spacing: 2px;
    }
  }


`

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  transform: translateX(-25px) translateY(3px);

  @media (max-width: 600px) {
    width: 12px;
    height: 12px;
    transform: translateX(-19px) translateY(14px);
  }
`