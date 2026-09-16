/* eslint-disable react-hooks/exhaustive-deps */
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
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);

  text-transform: capitalize;
  font-size: var(--fontBig);
  color: var(--dark);
  /* z-index 2 keeps this title above the fixed #phone-model canvas (z-index: 1)
     so the canvas joins the .blend-invert backdrop — the glyphs flip white when
     the dark phone scrolls across them, and read black on the white section. */
  z-index: 2;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontlg);
    transform: none;
    left: 2rem;
    top: 2rem;
    width: 50%;
  }
`;

const Battery = styled.ul`
  position: absolute;
  right: 4rem;
  list-style: none;
  background-color: var(--white);
  border: 3px solid var(--dark);
  border-radius: 8px;
  padding: 0.5rem;
  width: 15rem;

  /* the little positive terminal cap of a real battery */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -0.9rem;
    transform: translateY(-50%);
    width: 0.6rem;
    height: 2.2rem;
    background-color: var(--dark);
    border-radius: 0 4px 4px 0;
  }

  li {
    width: 100%;
    height: 5rem;
    background-color: #00e676;
    background-image: linear-gradient(
      180deg,
      #69f0ae 0%,
      #00e676 55%,
      #00c853 100%
    );
    box-shadow: inset 0 0 0.4rem rgba(0, 200, 83, 0.55),
      0 0 0.9rem rgba(0, 230, 118, 0.55);
    border-radius: 3px;
    opacity: 0;
  }

  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 48em) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BatterySection = () => {
  const battery = useRef(null);
  let elements = gsap.utils.selector(battery);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({});

    elements("li").forEach((el) => {
      t1.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
        opacity: 1,
      });
    });

    return () => {};
  }, []);

  return (
    <Section id="battery">
      <Title className="blend-invert">Up to 33 hours battery life. Go all day and beyond...</Title>
      <Battery ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </Battery>
    </Section>
  );
};

export default BatterySection;
