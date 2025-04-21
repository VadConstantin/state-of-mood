import { IModuleFive } from "@/Types/contentful";
import Module5Case1 from "../Mini-Modules/Module5/Module5Case1";
import Module5Case2 from "../Mini-Modules/Module5/Module5Case2";
import Module5Case3 from "../Mini-Modules/Module5/Module5Case3";
import Module5Case4 from "../Mini-Modules/Module5/Module5Case4";
import Module5Case5 from "../Mini-Modules/Module5/Module5Case5";

interface ModuleFiveProps {
  data : IModuleFive
}

const ModuleFive:React.FC<ModuleFiveProps> = ({ data }) => {
  const type = data.fields.type

  if(type === 'Case 1') return <Module5Case1 data={data}/>
  if(type === 'Case 2') return <Module5Case2 data={data}/>
  if(type === 'Case 3') return <Module5Case3 data={data}/>
  if(type === 'Case 4') return <Module5Case4 data={data}/>
  if(type === 'Case 5') return <Module5Case5 data={data}/>
  
  return(
    <div>
      Couldnt find the right module
    </div>
  )
}

export default ModuleFive