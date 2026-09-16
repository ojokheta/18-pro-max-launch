/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import IPhone18ProMaxMesh from "./IPhone18ProMaxMesh";

const MODEL_PATH = "/assets/models/iphone-18-pro-max.glb";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(MODEL_PATH);

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    camera.position.set(0, 2, 6);
    if (materials?.COLOUR_Cherry_Backpanel?.color) {
      materials.COLOUR_Cherry_Backpanel.color.set("#5B2433");
    }
    if (materials?.Body?.color) {
      materials.Body.color.set("#5B2433");
    }

    let fov = camera.fov;

    fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#phone-model",
            start: "top+=200 top",
            endTrigger: "#battery",
            end: "top top",
            scrub: 1,
          },
        });

        t1.fromTo(camera.position, { y: 2 }, { y: 0 })
          .to(scene.rotation, { y: 0.8 })
          .to(scene.rotation, { y: 3 })
          .to(scene.rotation, { z: 1.58 }, "key1")
          .to(camera.position, { z: 4 }, "key1")
          .to(scene.rotation, { y: 0, z: 0 }, "key2")
          .to(camera.position, { z: 6, x: isDesktop ? -1 : 0 }, "key2")
          .to(scene.rotation, { z: 0, y: 6.3 }, "key3")
          .to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, "key3");

        // NOTE: the model fade-out lives in ColorSection's own pinned
        // timeline (same scrub trigger), so it stays perfectly in sync with
        // the colour steps: visible through every colour including Space
        // Black, fading off only as the colour showcase concludes.

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      }
    );
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, Math.PI, 0]}>
        <IPhone18ProMaxMesh nodes={nodes} materials={materials} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
