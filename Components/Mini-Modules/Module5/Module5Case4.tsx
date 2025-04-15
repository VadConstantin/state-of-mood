import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";

interface Props {
  data: IModuleFive
}

const Module5Case4: React.FC<Props> = ({ data }) => {

  const image1 = data.fields.images[0]
  const image2 = data.fields.images[1]

  const borderColorImage1 = data.fields.firstImageBackgroundColor
  const borderColorImage2 = data.fields.secondImageBackgroundColor
  
  return(
    <Wrapper>
      <Picture1 src={image1.fields.file?.url as any} borderColor={borderColorImage1 as any}/>
      <Picture2 src={image2.fields.file?.url as any} borderColor={borderColorImage2 as any}/>
    </Wrapper>
  )
}

export default Module5Case4

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

const Picture1 = styled.img<{borderColor: string}>`
  width: 50%;
  height: auto;
  padding: 8vw;
  background-color: ${(props) => props.borderColor};

  @media (max-width: 600px) {
    width: 100%;
    padding: 10vw;
  }
`

const Picture2 = styled.img<{borderColor: string}>`
  width: 50%;
  height: auto;
  padding: 8vw;
  background-color: ${(props) => props.borderColor};

  @media (max-width: 600px) {
    width: 100%;
    padding: 10vw;
  }
`