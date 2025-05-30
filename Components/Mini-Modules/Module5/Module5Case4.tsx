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

  const { marginBottom, marginTop } = data.fields
  
  return(
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <Picture1 src={image1.fields.file?.url as any} borderColor={borderColorImage1 as any}/>
      <Picture2 src={image2.fields.file?.url as any} borderColor={borderColorImage2 as any}/>
    </Wrapper>
  )
}

export default Module5Case4

const Wrapper = styled.div<{marginTop: string, marginBottom: string}>`
  display: flex;
  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    flex-wrap: wrap;
    margin-top: ${(props) => (parseInt(props.marginTop, 10) / 2) + "px"};
    margin-bottom: ${(props) => (parseInt(props.marginBottom, 10) / 2) + "px"};
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