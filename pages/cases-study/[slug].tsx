import { ICaseStudyPage, IModuleEight, IModuleFive, IModuleNine, IModuleSeven, IModuleSix, IModuleTwo, INavigation, } from "@/Types/contentful";
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
import Module13 from "@/Components/Modules/Module13";
import Module14 from "@/Components/Modules/Module14";
import Module15 from "@/Components/Modules/Module15";

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

  if (!caseStudyData?.fields.modules) {
    return(
      <Wrapper>
        <NavBar navData={navData}/>
        <NoModules>{"No Modules uploaded :-("}</NoModules>
        <Footer />
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <ModulesWrapper>
        {caseStudyData.fields.modules.map((module, index) => {
          if ((module as any).sys.contentType.sys.id === "moduleFive") return <ModuleFive data={module as IModuleFive} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleSix") return <ModuleSix data={module as IModuleSix} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleSeven") return <ModuleSeven data={module as IModuleSeven}key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleEight") return <ModuleEight data={module as IModuleEight} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleNine") return <ModuleNine data={module as IModuleNine}key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleTen") return <ModuleTen data={module as any} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleEleven") return <ModuleEleven data={module as any} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleTwelve") return <ModuleTwelve data={module as any} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleThirteen") return <Module13 data={module as any} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFourteen") return <Module14 data={module as any} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFifteen") return <Module15 data={module as any} key={index}/>
        })}
      </ModulesWrapper>
      <Footer />
    </Wrapper>
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

const ModulesWrapper = styled.div`
  display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`

`

const NoModules = styled.div`
  padding: 50px 8vw 50px 8vw;

  @media (max-width: 600px) {
    padding: 30px 5vw 30px 5vw;
  }
`