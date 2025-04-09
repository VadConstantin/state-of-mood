import { IModuleFive } from "@/Types/contentful";

interface Props {
  data: IModuleFive
}

const ModuleFiveCase3: React.FC<Props> = ({ data }) => {
  console.log("youhouuu", data);
  
  return(
    <div>
      Module Case 3 !!!!!!!!!
    </div>
  )
}

export default ModuleFiveCase3