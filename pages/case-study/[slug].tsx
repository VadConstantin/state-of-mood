import { ICaseStudyPage, INavigation, } from "@/Types/contentful";
import { Entry } from 'contentful';
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { getNavigationData, getCaseStudyData } from "@/Services/get_contentful_data";
import ModuleFive from "@/Components/Modules/ModuleFive";
import NavBar from "@/Components/Navigation/NavBar";
import ModuleSix from "@/Components/Modules/ModuleSix";
import ModuleSeven from "@/Components/Modules/ModuleSeven";
import ModuleEight from "@/Components/Modules/ModuleEight";
import ModuleNine from "@/Components/Modules/ModuleNine";
import ModuleTen from "@/Components/Modules/ModuleTen";
import ModuleEleven from "@/Components/Modules/ModuleEleven";
import ModuleTwelve from "@/Components/Modules/ModuleTwelve";
import Footer from "@/Components/Navigation/Footer";

interface CaseStudySlugProps {
  caseStudyData: ICaseStudyPage
  navData: Entry<INavigation>
}

const Slug: React.FC<CaseStudySlugProps> = ({ caseStudyData, navData }) => {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return(
    <>
      <NavBar navData={navData}/>
      <Wrapper>
        {caseStudyData.fields.modules.map((module) => {
          if ((module as any).sys.contentType.sys.id === "moduleFive") return <ModuleFive data={module}/>
          if ((module as any).sys.contentType.sys.id === "moduleSix") return <ModuleSix data={module}/>
          if ((module as any).sys.contentType.sys.id === "moduleSeven") return <ModuleSeven data={module as any}/>
          if ((module as any).sys.contentType.sys.id === "moduleEight") return <ModuleEight data={module as any}/>
          if ((module as any).sys.contentType.sys.id === "moduleNine") return <ModuleNine data={module as any}/>
          if ((module as any).sys.contentType.sys.id === "moduleTen") return <ModuleTen data={module as any}/>
          if ((module as any).sys.contentType.sys.id === "moduleEleven") return <ModuleEleven data={module as any}/>
          if ((module as any).sys.contentType.sys.id === "moduleTwelve") return <ModuleTwelve data={module as any}/>
        })}
      </Wrapper>
      <Footer />
    </>
  )
}

export default Slug

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const navData = await getNavigationData()
  const slug = context.params.slug
  const caseStudyData = await getCaseStudyData(slug)
  
  return(
    {
      props: {
        caseStudyData,
        navData
      }
    }
  )
}

const Wrapper = styled.div`
  display: flex;
    flex-direction: column;
`