import { IModuleTen } from "@/Types/contentful"
import Case1 from "../Mini-Modules/Module10/Case1"
import Case2 from "../Mini-Modules/Module10/Case2"
import Case3 from "../Mini-Modules/Module10/Case3"
import Case4 from "../Mini-Modules/Module10/Case4"

interface ModuleTenProps {
  data: IModuleTen
}

const ModuleTen:React.FC<ModuleTenProps> = ({ data }) => {

  const type = data.fields.type

  if(type === 'Case 1') return <Case1 data={data}/>
  if(type === 'Case 2') return <Case2 data={data}/>
  if(type === 'Case 3') return (<Case3 data={data}/>)
  if(type === 'Case 4') return (<Case4 data={data}/>)

  return(
    <>
      Couldn't find the module.
    </>
  )
}

export default ModuleTen