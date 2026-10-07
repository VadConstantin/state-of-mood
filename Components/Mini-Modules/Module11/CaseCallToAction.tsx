import { IModuleEleven } from "@/Types/contentful";
import Link from "next/link";
import styled from "styled-components";

interface CaseCallToActionProps {
  data: IModuleEleven;
}

const CaseCallToAction: React.FC<CaseCallToActionProps> = ({ data }) => {
  const {
    caseCallToActionBackgroundColor,
    caseCallToActionTitle,
    caseCallToActionSubtitle,
    caseCallToActionSubtitleBandeauColor,
    caseCallToActionDescription,
    marginTop,
    marginBottom,
  } = data.fields;

  return (
    <Wrapper
      backgroundColor={caseCallToActionBackgroundColor || "#101408"}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {caseCallToActionTitle && (
        <Title>
          {caseCallToActionTitle}
        </Title>
      )}

      {caseCallToActionSubtitle && (
        <SubtitleBandeau
          backgroundColor={
            caseCallToActionSubtitleBandeauColor || "#444c3b"
          }
        >
          <Subtitle>
            {caseCallToActionSubtitle}
          </Subtitle>
        </SubtitleBandeau>
      )}

      <BottomContent>
        {caseCallToActionDescription && (
          <Description>
            {caseCallToActionDescription}
          </Description>
        )}

        <ButtonsWrapper>
          <Link
            href="/what-we-do"
            passHref
            legacyBehavior
          >
            <CTAButton>
              ABOUT THE STUDIO
            </CTAButton>
          </Link>

          <Link
            href="/selected-work"
            passHref
            legacyBehavior
          >
            <CTAButton>
              SELECTED WORK
            </CTAButton>
          </Link>
        </ButtonsWrapper>
      </BottomContent>
    </Wrapper>
  );
};

export default CaseCallToAction;


/* ------------------------- */
/* STYLES                    */
/* ------------------------- */

const Wrapper = styled.div<{
  backgroundColor: string;
  marginTop: string;
  marginBottom: string;
}>`
  width: 100%;

  margin-top: ${(props) => props.marginTop + "px"};
  margin-bottom: ${(props) => props.marginBottom + "px"};

  background-color: ${({ backgroundColor }) => backgroundColor};

  color: white;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: ${(props) =>
      parseInt(props.marginTop, 10) / 2 + "px"};

    margin-bottom: ${(props) =>
      parseInt(props.marginBottom, 10) / 2 + "px"};
  }
`;

const Title = styled.div`
  padding: 45px 5vw;

  font-family: "Knockout", sans-serif !important;
  font-size: clamp(2rem, 2.6vw, 4rem);
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 600px) {
    padding: 30px 5vw;
    font-size: 7vw;
  }
`;

const SubtitleBandeau = styled.div<{
  backgroundColor: string;
}>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};

  padding: 38px 5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 25px 5vw;
  }
`;

const Subtitle = styled.div`
  font-family: "KnockoutHTF", sans-serif !important;

  font-size: clamp(0.7rem, 0.8vw, 1.3rem);
  letter-spacing: 3px;
  line-height: 1.5;

  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 2.2vw;
    line-height: 3.5vw;
    letter-spacing: 1.5px;
  }
`;

const BottomContent = styled.div`
  padding: 65px 5vw 65px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 40px 5vw 40px;
  }
`;

const Description = styled.div`
  max-width: 650px;

  font-family: "Americana", sans-serif !important;
  font-size: clamp(1.2rem, 1.7vw, 2.5rem);

  line-height: 1.25;
  letter-spacing: 1px;

  text-transform: uppercase;

  white-space: pre-line;

  @media (max-width: 600px) {
    max-width: 90%;

    font-size: 4.2vw;
    line-height: 1.3;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 45px;

  display: flex;
  justify-content: center;
  gap: 25px;

  @media (max-width: 600px) {
    margin-top: 30px;

    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`;

const CTAButton = styled.a`
  min-width: 245px;

  padding: 18px 30px;

  background-color: white;
  color: #101942;

  font-family: "Knockout", sans-serif !important;
  font-size: clamp(0.8rem, 1vw, 1.3rem);

  letter-spacing: 3px;
  line-height: 1;

  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;

    padding: 17px 20px;

    font-size: 2.8vw;
  }
`;