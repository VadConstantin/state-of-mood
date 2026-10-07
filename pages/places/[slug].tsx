import NavBar from '@/Components/Navigation/NavBar'
import { getMoodboardPageData, getNavigationData } from '@/Services/get_contentful_data'
import { IMoodboardPage, INavigation, IModuleEight, IModuleFive, IModuleNine, IModuleSeven, IModuleSix, IModuleThree, IModuleFour, IModuleTen, IModuleEleven, IModuleTwelve, IModule13, IModule14, IModule15, IModuleTwo, ImoduleConvertTheMood } from '@/Types/contentful'
import { Entry } from 'contentful'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import Footer from "@/Components/Navigation/Footer";
import styled from 'styled-components'
import ModuleFive from "@/Components/Modules/ModuleFive";
import ModuleSix from "@/Components/Modules/ModuleSix";
import ModuleSeven from "@/Components/Modules/ModuleSeven";
import ModuleEight from "@/Components/Modules/ModuleEight";
import ModuleNine from "@/Components/Modules/ModuleNine";
import ModuleTen from "@/Components/Modules/ModuleTen";
import ModuleEleven from "@/Components/Modules/ModuleEleven";
import ModuleTwelve from "@/Components/Modules/ModuleTwelve";
import Module13 from "@/Components/Modules/Module13";
import Module14 from "@/Components/Modules/Module14";
import Module15 from "@/Components/Modules/Module15";
import ModuleFour from '@/Components/Modules/ModuleFour';
import ModuleThree from '@/Components/Modules/ModuleThree';
import ModuleTwo from '@/Components/Modules/ModuleTwo'
import ModuleConvertTheMood from '@/Components/Modules/ModuleConvertTheMood'

interface SlugProps {
  data: IMoodboardPage
  navData: Entry<INavigation>
}

const Slug:React.FC<SlugProps> = ({ data, navData }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return(
    <Wrapper>
      <NavBar navData={navData}/>
      <ModulesWrapper>
        {data.fields.modules.map((module, index) => {
          if ((module as any).sys.contentType.sys.id === "moduleTwo") return <ModuleTwo moduleTwoData={module as any} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleThree") return <ModuleThree moduleThreeData={module as IModuleThree} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFour") return <ModuleFour moduleFourData={module as IModuleFour} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFive") return <ModuleFive data={module as IModuleFive} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleSix") return <ModuleSix data={module as IModuleSix} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleSeven") return <ModuleSeven data={module as IModuleSeven}key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleEight") return <ModuleEight data={module as IModuleEight} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleNine") return <ModuleNine data={module as IModuleNine}key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleTen") return <ModuleTen data={module as IModuleTen} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleEleven") return <ModuleEleven data={module as IModuleEleven} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleTwelve") return <ModuleTwelve data={module as IModuleTwelve} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleThirteen") return <Module13 data={module as IModule13} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFourteen") return <Module14 data={module as IModule14} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleFifteen") return <Module15 data={module as IModule15} key={index}/>
          if ((module as any).sys.contentType.sys.id === "moduleConvertTheMood") return <ModuleConvertTheMood data={module as ImoduleConvertTheMood} key={index}/>
        })}
      </ModulesWrapper>
      <Footer />
    </Wrapper>
  )
}

export default Slug

export const getServerSideProps:GetServerSideProps = async (context: any) => {
  const { slug } = context.params
  const data = await getMoodboardPageData(slug)
  const navData = await getNavigationData()

  return {
    props: {
      data,
      navData
    }
  }
}

const ModulesWrapper = styled.div`
  display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
  width: 100%;
`