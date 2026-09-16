import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/video/Ink - 21536.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--white);
  -webkit-text-fill-color: var(--white);
  font-weight: 700;
  z-index: 5;
  filter: drop-shadow(0 2px 14px rgba(0, 0, 0, 0.55));

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    left: 1rem;
  }

  @media screen and (max-width: 30em) {
    width: 70%;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: none;
  color: var(--white);
  -webkit-text-fill-color: var(--white);
  filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.55));
  z-index: 1;

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 800;
    padding: 2rem;

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;

    & > *:last-child {
      align-self: flex-end;
    }

    height: 80vh;
    padding: 0 1rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <VideoContainer>
        <video src={backgroundVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <Title>iPhone 18 Pro Max</Title>
      <TextContainer>
        <span>So.Cold.</span>
        <span>So.Bold.</span>
      </TextContainer>
    </Section>
  );
};

export default HeroSection;
