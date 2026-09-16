import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`;
const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  /* z-index 2 keeps this text above the fixed #phone-model canvas (z-index: 1)
     so the canvas is part of the .blend-invert backdrop and the glyphs invert
     against the phone as it scrolls past. The section itself must stay a plain
     stacking parent (no z-index/transform/isolation on <Section>). */
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--textDark);

  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  /* See TextContainer: keeps text above the fixed phone canvas for blending */
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--textDark);

  span {
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
    align-self: flex-end;
    text-align: right;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;

const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer className="blend-invert" ref={textOne}>
        <span>Flawless design with aerospace-grade titanium.</span>
      </TextContainer>

      <TextContainer2 className="blend-invert" ref={textTwo}>
        <span>Sculpted titanium contours with next-generation Ceramic Shield.</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
