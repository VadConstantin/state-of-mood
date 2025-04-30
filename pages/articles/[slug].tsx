import { getNavigationData, getArticlePageData } from '@/Services/get_contentful_data'
import { IArticlePage, IModuleEight, IModuleFive, IModuleNine, IModuleSeven, IModuleSix, IModuleThree, INavigation, IModuleFour } from '@/Types/contentful'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { Entry } from 'contentful';
import { useEffect, useState } from 'react'
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
import ModuleFour from '@/Components/Modules/ModuleFour';
import ModuleThree from '@/Components/Modules/ModuleThree';


interface SlugProps {
  data: IArticlePage
  navData: Entry<INavigation>
}

const Slug:React.FC<SlugProps> = ({ data, navData }) => {
  const [isMounted, setIsMounted] = useState(false);

  console.log("data ------>", data)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!data?.fields.modules) {
    return(
      <Wrapper>
        <NavBar navData={navData}/>
        <NoModules>{"No Modules uploaded :-("}</NoModules>
        <Footer bottomFixed/>
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <ModulesWrapper>
        {data.fields.modules.map((module, index) => {
          if ((module as any).sys.contentType.sys.id === "moduleThree") return <ModuleThree moduleThreeData={module as IModuleThree} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFour") return <ModuleFour moduleFourData={module as IModuleFour} key={index}/>
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
  const data = await getArticlePageData(slug)
  
  return(
    {
      props: {
        data,
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