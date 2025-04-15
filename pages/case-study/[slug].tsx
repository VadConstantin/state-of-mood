import { ICaseStudyPage, INavigation, } from "@/Types/contentful";
import { Entry } from 'contentful';
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { getNavigationData, getCaseStudyData } from "@/Services/get_contentful_data";
import ModuleFive from "@/Components/Modules/ModuleFive";
import NavBar from "@/Components/Navigation/NavBar";
import ModuleSix from "@/Components/Modules/ModuleSix";

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
          if ((module as any).sys.contentType.sys.id === "moduleFive") {
            return <ModuleFive data={module}/>
          }
          if ((module as any).sys.contentType.sys.id === "moduleSix") {
            return <ModuleSix data={module}/>
          }
        })}
      </Wrapper>
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