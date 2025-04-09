import { IModuleFive } from "@/Types/contentful";

interface Props {
  data: IModuleFive
}

const ModuleFiveCase2:React.FC<Props> = ({ data }) => {
  return(
    <div>
      I am module case 2
    </div>
  )
}

export default ModuleFiveCase2