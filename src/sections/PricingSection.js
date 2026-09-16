import React, { useRef, useContext, useEffect, Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Model3 from "../components/Scene3";
import { AdaptiveDpr, AdaptiveEvents, Environment, OrbitControls } from "@react-three/drei";
import { ColorContext } from "./../context/ColorContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: #5b2433;
  transition: background-color 0.4s ease;
`;

const Phone = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;

  border: 1px solid var(--dark);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
  color: var(--textDark);
  font-weight: 700;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
  color: var(--textDark);
  font-weight: 600;
  opacity: 0.85;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--blue);
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: scale(1.02);
  }
`;

const BtnLink = styled.a`
  color: var(--blue);
  font-weight: 600;
  text-decoration: none;
  margin-left: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
  color: var(--textDark);
  font-weight: 600;
`;

const PricingSection = () => {
  const sectionRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`;
    }
  }, [currentColor]);

  let updateColor = (color, text, rgbColor) => {
    const colorObj = {
      color,
      text,
      rgbColor,
    };
    changeColorContext(colorObj);
  };

  return (
    <Container id="pricing">
      <Section ref={sectionRef}>
        <Phone>
          <IndicatorText>360&deg; &#x27F2; </IndicatorText>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model3 />
            </Suspense>

            <Environment preset="night" />
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <OrbitControls enableZoom={false} />
          </Canvas>

          <Colors>
            <Color
              color="#5B2433"
              title="Burgundy"
              onClick={() =>
                updateColor("#5B2433", "Burgundy", "91, 36, 51")
              }
            />
            <Color
              color="#C2D2DE"
              title="Glacier"
              onClick={() =>
                updateColor("#C2D2DE", "Glacier", "194, 210, 222")
              }
            />
            <Color
              color="#E2E4E6"
              title="Silver"
              onClick={() =>
                updateColor("#E2E4E6", "Silver", "226, 228, 230")
              }
            />
            <Color
              color="#262628"
              title="Space Black"
              onClick={() =>
                updateColor("#262628", "Space Black", "38, 38, 40")
              }
            />
          </Colors>
        </Phone>

        <Details>
          <SubTitle>iPhone</SubTitle>
          <Title>18 Pro Max</Title>
          <SubTitle>From $1199*</SubTitle>
          <ButtonContainer>
            <Btn>Buy</Btn>
            <BtnLink href="#">Learn More &#x2192;</BtnLink>
          </ButtonContainer>
        </Details>
      </Section>
    </Container>
  );
};

export default PricingSection;
