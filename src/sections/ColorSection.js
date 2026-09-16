/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model2 from "../components/Scene2";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(91, 36, 51, 0.8);
  position: relative;

  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(91, 36, 51, 0.4);
  position: relative;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  letter-spacing: 0.05em;

  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    textElem.innerText = currentColor.text;
    textElem.style.color = currentColor.color;

    rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let updateColor = (color, text, rgbColor) => {
      const colorObj = {
        color,
        text,
        rgbColor,
      };
      changeColorContext(colorObj);
    };

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#5B2433", "Burgundy", "91, 36, 51"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#5B2433", "Burgundy", "91, 36, 51"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#C2D2DE", "Glacier", "194, 210, 222"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#C2D2DE", "Glacier", "194, 210, 222"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#E2E4E6", "Silver", "226, 228, 230"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#E2E4E6", "Silver", "226, 228, 230"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#262628", "Space Black", "38, 38, 40"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#262628", "Space Black", "38, 38, 40"],
      })
      // Keep the fixed phone model fully visible through every colour step
      // (including Space Black above), then fade it off as the colour
      // showcase concludes — this scroll timeline is the single source of
      // truth for the fade, so it can never desync from the colours.
      .to(
        "#phone-model",
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.25,
          ease: "power1.in",
        },
        ">+0.1"
      );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="colors">
      <Left ref={leftRef} />
      <Center ref={textRef} />
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      </Right>
    </Section>
  );
};

export default ColorSection;
