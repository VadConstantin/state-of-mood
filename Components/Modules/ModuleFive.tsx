import { IModuleFive } from "@/Types/contentful";
import { Entry } from 'contentful';
import styled from "styled-components";
import { useEffect, useState } from "react";

interface ModuleFiveProps {
  ModuleFiveData : IModuleFive
}

const ModuleFive:React.FC<ModuleFiveProps> = ( { ModuleFiveData }) => {
  return(
    <div>
      Module Five here !
    </div>
  )
}

export default ModuleFive