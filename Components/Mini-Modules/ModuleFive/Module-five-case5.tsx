import { IModuleFive } from "@/Types/contentful";

interface Props {
  data: IModuleFive
}

const ModuleFiveCase5:React.FC<Props> = ({ data }) => {
  return(
    <div>
      I am module Case 5
    </div>
  )
}

export default ModuleFiveCase5