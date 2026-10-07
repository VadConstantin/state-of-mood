import { IModuleFive } from "@/Types/contentful";
import styled from "styled-components";
import { useRef, useState } from "react";

interface Props {
  data: IModuleFive;
}

const Module5Case1: React.FC<Props> = ({ data }) => {
  const {
    images,
    videoForCase1,
    marginBottom,
    marginTop,
  } = data.fields;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // VERSION VIDEO
  if (videoForCase1) {
    return (
      <Wrapper
        marginTop={marginTop}
        marginBottom={marginBottom}
      >
        <VideoWrapper>
          <Video
            ref={videoRef}
            src={videoForCase1.fields.file?.url as string}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          <PlayPauseButton
            type="button"
            onClick={handlePlayPause}
          >
            {isPlaying ? "PAUSE" : "PLAY"}
          </PlayPauseButton>
        </VideoWrapper>
      </Wrapper>
    );
  }

  // VERSION IMAGE
  const image = images?.[0];

  if (!image) return null;

  return (
    <Wrapper
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Picture
        src={image.fields.file?.url as string}
        alt=""
      />
    </Wrapper>
  );
};

export default Module5Case1;

const Wrapper = styled.div<{
  marginTop: string;
  marginBottom: string;
}>`
  width: 100%;

  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  @media (max-width: 600px) {
    margin-top: ${(props) =>
      parseInt(props.marginTop, 10) / 2 + "px"};

    margin-bottom: ${(props) =>
      parseInt(props.marginBottom, 10) / 2 + "px"};
  }
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const PlayPauseButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 30px;

  z-index: 2;

  padding: 0;

  border: none;
  background: transparent;

  color: white;

  font-family: "KnockoutHTF", sans-serif !important;
  font-size: clamp(0.9rem, 1vw, 1.5rem);
  letter-spacing: 2px;

  text-decoration: underline;
  text-underline-offset: 4px;

  cursor: pointer;

  @media (max-width: 600px) {
    bottom: 15px;
    left: 15px;

    font-size: 3vw;
  }
`;