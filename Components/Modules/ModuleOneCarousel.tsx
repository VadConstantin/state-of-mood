import { IModuleOne } from "@/Types/contentful"
import { Entry } from 'contentful';
import ModuleOne from "./ModuleOne";

interface ModuleOneCarouselProps {
  modulesOneData: any
}

const ModuleOneCarousel:React.FC<ModuleOneCarouselProps> = ({ modulesOneData }) => {
  return(
    <>
      {modulesOneData.map((module: any, index: number) => {
        if (index <1 ) {
          return(
            <ModuleOne moduleOneData={module}/>
          )
        }
      })}
    </>
  )
}

export default ModuleOneCarousel