import styled from "styled-components";

interface ModuleOneProps {
  moduleOneData: any;
  isOnlySlide?: boolean;
}

const ModuleOne: React.FC<ModuleOneProps> = ({ moduleOneData, isOnlySlide = false }) => {
  const {
    backgroundColor,
    titleFirstLine,
    titleSecondLine,
    tag,
    linkTitle,
    firstPicture,
    secondPicture,
    linkSlug,
    stampForSecondPicture,
    marginTop,
    marginBottom,
    video,
  } = moduleOneData.fields;

  if (video) {
    return (
      <VideoWrapper $isOnlySlide={isOnlySlide}>
        <Video
          $isOnlySlide={isOnlySlide}
          src={video.fields.file.url}
          autoPlay
          muted
          loop
          playsInline
        />
  
        <VideoContent>
          <Tag>{tag}</Tag>
  
          <FirstLine>{titleFirstLine}</FirstLine>
  
          {titleSecondLine && (
            <SecondLine>{titleSecondLine}</SecondLine>
          )}
  
          {linkSlug && linkTitle && (
            <LinkAndArrow>
              <Arrow src="/Arrow-white.png" alt="arrow" />
  
              <CustomLink href={linkSlug}>
                {linkTitle}
              </CustomLink>
            </LinkAndArrow>
          )}
        </VideoContent>
      </VideoWrapper>
    );
  }

  // VERSION IMAGE CLASSIQUE
  return (
    <Wrapper
      color={backgroundColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <PicturesWrapper>
        <FirstPicAndText>
          <FirstPicture
            src={firstPicture.fields.file.url}
            alt="picture"
          />

          <Tag>{tag}</Tag>

          <FirstLine>{titleFirstLine}</FirstLine>

          {titleSecondLine && (
            <SecondLine>{titleSecondLine}</SecondLine>
          )}

          <LinkAndArrow>
            <Arrow src="/Arrow-white.png" alt="arrow" />

            <CustomLink href={linkSlug}>
              {linkTitle}
            </CustomLink>
          </LinkAndArrow>
        </FirstPicAndText>

        <SecondPicAndStamp>
          <SecondPicture
            src={secondPicture.fields.file.url}
            alt="picture"
          />

          {stampForSecondPicture && (
            <Stamp
              src={stampForSecondPicture.fields.file.url}
              alt="stamp"
            />
          )}
        </SecondPicAndStamp>
      </PicturesWrapper>
    </Wrapper>
  );
};

export default ModuleOne;

const VideoWrapper = styled.div<{
  $isOnlySlide: boolean;
}>`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: hidden;
`;

const Video = styled.video<{
  $isOnlySlide: boolean;
}>`
  width: 100%;
  display: block;

  ${({ $isOnlySlide }) =>
    $isOnlySlide
      ? `
        position: relative;
        height: auto;
      `
      : `
        position: absolute;
        inset: 0;
        height: 100%;
        object-fit: cover;
      `
  }
`;

const VideoContent = styled.div`
  position: absolute;

  left: 10vw;
  bottom: 100px;

  z-index: 2;
  text-transform: uppercase;

  @media (max-width: 600px) {
    left: 20px;
    right: 20px;
    bottom: 50px;

    text-align: center;
  }
`;

const Wrapper = styled.div<{
  color: string;
  marginTop: string;
  marginBottom: string;
}>`
  background-color: ${({ color }) => color};
  width: 100%;

  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};
`;

const PicturesWrapper = styled.div`
  padding: 40px 10vw 100px 10vw;

  display: flex;
  justify-content: space-between;
  gap: 4vw;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FirstPicture = styled.img`
  width: clamp(100px, 35vw, 1000px);
  height: clamp(60px, 30vw, 800px);

  position: relative;

  padding-bottom: 4vw;

  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
`;

const SecondPicture = styled.img`
  width: clamp(250px, 45vw, 1000px);

  position: relative;

  padding-top: 100px;

  @media (max-width: 600px) {
    padding-top: 10px;
  }
`;

const FirstPicAndText = styled.div`
  text-transform: uppercase;
`;

const Tag = styled.div`
  font-family: "Knockout", sans-serif !important;
  color: white;

  font-size: clamp(0.4rem, 0.7vw, 1rem);

  @media (max-width: 600px) {
    font-size: 0.4rem;
    text-align: center;
  }
`;

const FirstLine = styled.div`
  font-family: "Knockout", sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);

  color: white;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const SecondLine = styled.div`
  font-family: "Americana", sans-serif !important;
  font-size: clamp(1rem, 3.5vw, 5rem);

  color: white;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const LinkAndArrow = styled.div`
  display: flex;
  gap: 1vw;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Arrow = styled.img`
  color: white;
  width: clamp(10px, 6vw, 30vw);
`;

const CustomLink = styled.a`
  align-content: center;

  text-decoration: underline;
  text-underline-offset: 2px;

  color: white;

  font-size: clamp(0.7rem, 1vw, 3rem);

  text-transform: none;

  font-family: "Knockout", sans-serif !important;
`;

const SecondPicAndStamp = styled.div`
  position: relative;
`;

const Stamp = styled.img`
  position: absolute;

  top: 0;
  right: 0;

  width: clamp(30px, 6vw, 30vw);

  padding-top: 100px;

  @media (max-width: 600px) {
    padding-top: 0;
  }
`;