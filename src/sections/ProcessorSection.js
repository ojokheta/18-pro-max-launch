import React from "react";
import styled, { keyframes } from "styled-components";
import a20Chip from "../assets/Images/a20-pro-chip.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  font-weight: 800;
  z-index: 1;

  background-image: linear-gradient(135deg, #f5f5f7 0%, #d9d9de 50%, #b8b8bf 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.55));

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 0.35em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: var(--fontR);
  font-weight: 700;
  margin-top: 0.5rem;
  color: var(--white);
  -webkit-text-fill-color: var(--white);
`;

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.4);
}
50%{
    box-shadow: 2px 2px 30px rgba(220, 240, 255, 0.8);
}
100%{
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.4);
}
`;

const Processor = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;
  border-radius: 24px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
  }

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0.5rem 0;
    padding-left: 2rem;
    line-height: 1.6;
  }

  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;

const ProcessorSection = () => {
  return (
    <Section>
      <Title>
        A20 Pro Chip
        <Subtitle>Built on 2nm Architecture</Subtitle>
      </Title>
      <Processor>
        <img
          src={a20Chip || "/assets/images/a20-pro-chip.jpg"}
          alt="A20 Pro Chip"
        />
      </Processor>
      <Text>
        <span>
          Engineered on an industry-defining 2nm architecture, the all-new A20
          Pro chip delivers unprecedented processing power with breakthrough
          thermal efficiency for the most demanding pro workflows.
        </span>
        <span>
          Featuring a next-generation 7-core GPU with hardware-accelerated ray
          tracing and a 16-core Neural Engine running up to 45 trillion
          operations per second for Apple Intelligence.
        </span>
      </Text>
    </Section>
  );
};

export default ProcessorSection;
