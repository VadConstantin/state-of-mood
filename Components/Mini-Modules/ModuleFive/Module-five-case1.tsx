import { IModuleFive } from "@/Types/contentful";

interface Props {
  data: IModuleFive
}

const ModuleFiveCase1:React.FC<Props> = ({ data }) => {
  return(
    <div>
      I am module Case 1
    </div>
  )
}

export default ModuleFiveCase1