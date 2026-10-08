import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Asset } from "contentful";
import { IModuleVideos } from "@/Types/contentful";

interface ModuleVideosProps {
  data: IModuleVideos
}

interface VideoData {
  asset: Asset;
  format: "horizontal" | "vertical";
}

const ModuleVideos: React.FC<ModuleVideosProps> = ({ data }) => {
  const {
    marginTop,
    marginBottom,
    title,
    subtitle,
    description,
    video1,
    formatVideo1,
    video2,
    formatVideo2,
    video3,
    formatVideo3,
    video1FullScreen
  } = data.fields;

  const videos: VideoData[] = [
    video1 && {
      asset: video1,
      format: normalizeFormat(formatVideo1),
    },

    video2 && {
      asset: video2,
      format: normalizeFormat(formatVideo2),
    },

    video3 && {
      asset: video3,
      format: normalizeFormat(formatVideo3),
    },
  ].filter(Boolean) as VideoData[];

  const isSingleVideoFullScreen = videos.length === 1 && video1FullScreen?.trim().toLowerCase() === "oui";

  const verticalVideos = videos.filter(
    (video) => video.format === "vertical"
  );

  const horizontalVideos = videos.filter(
    (video) => video.format === "horizontal"
  );

  const renderVideos = () => {
    /*
     * 1 SEULE VIDEO
     */
    if (videos.length === 1) {
      const video = videos[0];
    
      return (
        <SingleVideoWrapper
          $format={video.format}
          $fullScreen={isSingleVideoFullScreen}
        >
          <VideoItem data={video} />
        </SingleVideoWrapper>
      );
    }

    /*
     * TOUTES LES VIDEOS SONT VERTICALES
     *
     * 2 verticales => côte à côte
     * 3 verticales => 3 côte à côte
     */
    if (verticalVideos.length === videos.length) {
      return (
        <VerticalRow $count={verticalVideos.length}>
          {verticalVideos.map((video, index) => (
            <VideoItem
              key={index}
              data={video}
            />
          ))}
        </VerticalRow>
      );
    }

    /*
     * TOUTES LES VIDEOS SONT HORIZONTALES
     *
     * Elles sont les unes au-dessus des autres.
     */
    if (horizontalVideos.length === videos.length) {
      return (
        <HorizontalStack>
          {horizontalVideos.map((video, index) => (
            <VideoItem
              key={index}
              data={video}
            />
          ))}
        </HorizontalStack>
      );
    }

    /*
     * 1 HORIZONTALE + 2 VERTICALES
     *
     * Horizontale au-dessus
     * 2 verticales en dessous
     */
    if (
      videos.length === 3 &&
      horizontalVideos.length === 1 &&
      verticalVideos.length === 2
    ) {
      return (
        <MixedLayout>
          <HorizontalStack>
            <VideoItem data={horizontalVideos[0]} />
          </HorizontalStack>

          <VerticalRow $count={2}>
            {verticalVideos.map((video, index) => (
              <VideoItem
                key={index}
                data={video}
              />
            ))}
          </VerticalRow>
        </MixedLayout>
      );
    }

    /*
     * AUTRES COMBINAISONS
     *
     * Exemples :
     * - 1 horizontale + 1 verticale
     * - 2 horizontales + 1 verticale
     */
    return (
      <MixedLayout>
        {horizontalVideos.length > 0 && (
          <HorizontalStack>
            {horizontalVideos.map((video, index) => (
              <VideoItem
                key={index}
                data={video}
              />
            ))}
          </HorizontalStack>
        )}

        {verticalVideos.length > 0 && (
          <VerticalRow $count={verticalVideos.length}>
            {verticalVideos.map((video, index) => (
              <VideoItem
                key={index}
                data={video}
              />
            ))}
          </VerticalRow>
        )}
      </MixedLayout>
    );
  };

  if (!videos.length) return null;

  return (
    <Wrapper
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {(title || subtitle || description) && (
        <Header>
          {title && (
            <Title>
              {title}
            </Title>
          )}

          {subtitle && (
            <Subtitle>
              {subtitle}
            </Subtitle>
          )}

          {description && (
            <Description>
              {description}
            </Description>
          )}
        </Header>
      )}

      <VideosWrapper
        $hasHeader={Boolean(title || subtitle || description)}
        $fullScreen={isSingleVideoFullScreen}
      >
        {renderVideos()}
      </VideosWrapper>
    </Wrapper>
  );
};

export default ModuleVideos;


/* =========================================
   VIDEO ITEM
========================================= */

interface VideoItemProps {
  data: VideoData;
}

const VideoItem: React.FC<VideoItemProps> = ({ data }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = (data.asset.fields.file as any)?.url;

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <VideoContainer>
      <Video
        ref={videoRef}
        src={videoUrl}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <PlayButton
        type="button"
        onClick={handlePlayPause}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <PauseIcon>
            <span />
            <span />
          </PauseIcon>
        ) : (
          <PlayIcon />
        )}
      </PlayButton>
    </VideoContainer>
  );
};


const normalizeFormat = (
  format?: string
): "horizontal" | "vertical" => {
  if (format?.toLowerCase().trim() === "vertical") {
    return "vertical";
  }

  return "horizontal";
};


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

const Header = styled.div`
  width: 100%;

  padding: 0 8vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  @media (max-width: 600px) {
    padding: 0 5vw;

    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled.div`
  font-family: "Knockout", sans-serif !important;

  font-size: clamp(1.8rem, 2.5vw, 4rem);

  letter-spacing: 2px;
  line-height: 1;

  text-transform: uppercase;
`;

const Subtitle = styled.div`
  margin-top: 8px;

  font-family: "Americana", sans-serif !important;

  font-size: clamp(1rem, 1.4vw, 2rem);

  line-height: 1;

  text-transform: uppercase;
`;

const Description = styled.div`
  margin-top: 20px;

  max-width: 750px;

  font-size: clamp(0.7rem, 0.7vw, 1rem);
  line-height: 1.5;

  white-space: pre-line;

  @media (max-width: 600px) {
    max-width: 100%;

    font-size: 2.5vw;
    line-height: 3.5vw;
  }
`;


const VideosWrapper = styled.div<{
  $hasHeader: boolean;
  $fullScreen: boolean;
}>`
  width: 100%;

  padding: ${({ $hasHeader, $fullScreen }) => {
    if ($fullScreen) {
      return $hasHeader ? "80px 0 0" : "0";
    }

    return $hasHeader ? "80px 12vw 0" : "0 12vw";
  }};

  @media (max-width: 600px) {
    padding: ${({ $hasHeader, $fullScreen }) => {
      if ($fullScreen) {
        return $hasHeader ? "40px 0 0" : "0";
      }

      return $hasHeader ? "40px 6vw 0" : "0 6vw";
    }};
  }
`;

const SingleVideoWrapper = styled.div<{
  $format: "horizontal" | "vertical";
  $fullScreen: boolean;
}>`
  width: 100%;

  display: flex;
  justify-content: center;

  & > div {
    width: ${({ $format, $fullScreen }) => {
      if ($fullScreen) return "100%";

      return $format === "vertical" ? "42%" : "100%";
    }};
  }

  @media (max-width: 600px) {
    & > div {
      width: ${({ $format, $fullScreen }) => {
        if ($fullScreen) return "100%";

        return $format === "vertical" ? "75%" : "100%";
      }};
    }
  }
`;

const VerticalRow = styled.div<{
  $count: number;
}>`
  width: 100%;

  display: grid;

  grid-template-columns: repeat(
    ${({ $count }) => $count},
    minmax(0, 1fr)
  );

  gap: 3vw;

  @media (max-width: 600px) {
    gap: 3vw;
  }
`;

const HorizontalStack = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 5vw;
`;

const MixedLayout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 5vw;
`;


const VideoContainer = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: auto;

  display: block;

  object-fit: contain;
`;


const PlayButton = styled.button`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: clamp(60px, 7vw, 120px);
  height: clamp(60px, 7vw, 120px);

  border: 3px solid white;
  border-radius: 50%;

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  z-index: 2;

  @media (max-width: 600px) {
    width: 55px;
    height: 55px;

    border-width: 2px;
  }
`;

const PlayIcon = styled.span`
  width: 0;
  height: 0;

  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 25px solid white;

  margin-left: 6px;

  @media (max-width: 600px) {
    border-top-width: 10px;
    border-bottom-width: 10px;
    border-left-width: 16px;

    margin-left: 4px;
  }
`;

const PauseIcon = styled.span`
  display: flex;
  gap: 8px;

  span {
    display: block;

    width: 6px;
    height: 30px;

    background: white;
  }

  @media (max-width: 600px) {
    gap: 5px;

    span {
      width: 4px;
      height: 20px;
    }
  }
`;