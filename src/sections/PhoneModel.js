import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import Model from "../components/Scene";
import { Suspense } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
  /* This fixed, full-viewport canvas overlay covers the whole page (including the
     footer). It must never intercept clicks — the interactive 3D viewer lives in
     PricingSection's own separate <Canvas>. Without this, footer links/buttons
     are unclickable. */
  pointer-events: none;
  & * {
    pointer-events: none;
  }
`;

const PhoneModel = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{ fov: 14 }} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
