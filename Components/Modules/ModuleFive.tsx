import { IModuleFive } from "@/Types/contentful";
import ModuleFiveCase3 from "../Mini-Modules/ModuleFive/module-five-case3";
import ModuleFiveCase1 from "../Mini-Modules/ModuleFive/module-five-case1";
import ModuleFiveCase2 from "../Mini-Modules/ModuleFive/module-five-case2";
import ModuleFiveCase4 from "../Mini-Modules/ModuleFive/module-five-case4";
import ModuleFiveCase5 from "../Mini-Modules/ModuleFive/module-five-case5";

interface ModuleFiveProps {
  moduleFiveData : IModuleFive
}

const ModuleFive:React.FC<ModuleFiveProps> = ({ moduleFiveData }) => {

  const isPlain: boolean = moduleFiveData.fields.plainImages
  const isOneImage: boolean = moduleFiveData.fields.images.length == 1
  const isTwoImage: boolean = moduleFiveData.fields.images.length == 2
  const isThreeImage: boolean = moduleFiveData.fields.images.length == 3
  const isText: boolean = !!moduleFiveData.fields.description

  if (isText) return <ModuleFiveCase3 data={moduleFiveData}/>
  if (isPlain && isOneImage && !isText) return <ModuleFiveCase1 data={moduleFiveData}/>
  if (!isPlain && isOneImage) return <ModuleFiveCase2 data={moduleFiveData}/>
  if (!isPlain && isTwoImage) return <ModuleFiveCase4 data={moduleFiveData}/>
  if (isThreeImage) return <ModuleFiveCase5 data={moduleFiveData}/>
  
  return(
    <div>
      Couldnt find the right module
    </div>
  )
}

export default ModuleFive