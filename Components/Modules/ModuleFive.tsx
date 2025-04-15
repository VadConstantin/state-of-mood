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

  const isPlain: boolean = data.fields.plainImages
  const isOneImage: boolean = data.fields.images.length == 1
  const isTwoImage: boolean = data.fields.images.length == 2
  const isThreeImage: boolean = data.fields.images.length == 3
  const isText: boolean = !!data.fields.description

  if (isText) return <Module5Case3 data={data}/>
  if (isPlain && isOneImage && !isText) return <Module5Case1 data={data}/>
  if (!isPlain && isOneImage) return <Module5Case2 data={data}/>
  if (!isPlain && isTwoImage) return <Module5Case4 data={data}/>
  if (isThreeImage) return <Module5Case5 data={data}/>
  
  return(
    <div>
      Couldnt find the right module
    </div>
  )
}

export default ModuleFive