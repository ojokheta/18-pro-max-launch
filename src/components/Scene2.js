/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import IPhone18ProMaxMesh from "./IPhone18ProMaxMesh";

const MODEL_PATH = "/assets/models/iphone-18-pro-max.glb";

export default function Model2({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(MODEL_PATH);

  let camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.set(-0.1, 0.4, 5);
    if (materials?.COLOUR_Cherry_Backpanel?.color) {
      materials.COLOUR_Cherry_Backpanel.color.set("#5B2433");
    }
    if (materials?.Body?.color) {
      materials.Body.color.set("#5B2433");
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <IPhone18ProMaxMesh nodes={nodes} materials={materials} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
