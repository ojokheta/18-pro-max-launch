import React from "react";

export default function IPhone18ProMaxMesh({ nodes, materials }) {
  if (!nodes || !materials) return null;

  return (
    <group scale={6.08} position={[0, -0.08167 * 6.08, 0.00245 * 6.08]}>
      <mesh geometry={nodes.Front_Cam_Lens?.geometry} material={materials.BASE_Cam_Lens_Front} />
      <mesh geometry={nodes.USB_Metal?.geometry} material={materials.BASE_Chrome_Dark} />
      <mesh geometry={nodes.Antenna?.geometry} material={materials.COLOUR_Cherry_Antenna} />
      <mesh geometry={nodes.Front_Cam_Glass?.geometry} material={materials.BASE_Glass} />
      <mesh geometry={nodes.Back_Panel?.geometry} material={materials.COLOUR_Cherry_Backpanel} />
      <mesh geometry={nodes.Front_Speaker?.geometry} material={materials.BASE_Speakers_Front} />
      <mesh geometry={nodes.Front_Panel?.geometry} material={materials.BASE_Glass_Black} />
      <mesh geometry={nodes.Back_Cam_Lens?.geometry} material={materials.BASE_Cam_Lens01} />
      <mesh geometry={nodes.Back_Cam_Edge?.geometry} material={materials.COLOUR_Cherry_Side_Panel} />
      <mesh geometry={nodes.Back_Flash_Glass?.geometry} material={materials.BASE_Flash_Glass} />
      <mesh geometry={nodes.Back_Flash_Base?.geometry} material={materials.BASE_Flash_Base} />
      <mesh geometry={nodes.Back_Cam_Edge_black?.geometry} material={materials.BASE_Cam_Edge_Black} />
      <mesh geometry={nodes.Back_Cam_Glass?.geometry} material={materials.BASE_Glass} />
      <mesh geometry={nodes.Back_Cam_Base?.geometry} material={materials.BASE_Grey} />
      <mesh geometry={nodes.Back_Flash_Light?.geometry} material={materials.BASE_Flash_Light} />
      <mesh geometry={nodes.Back_Flash_Ref?.geometry} material={materials.BASE_Flash_Ref}>
        {nodes.Gradient && (
          <mesh geometry={nodes.Gradient.geometry} material={materials.BASE_Flash_Ref_Gradient} />
        )}
      </mesh>
      <mesh geometry={nodes.Screws_Aniso_01?.geometry} material={materials.COLOUR_Cherry_Aniso} />
      <mesh geometry={nodes.Screws_Aniso_02?.geometry} material={materials.COLOUR_Cherry_Aniso} />
      <mesh geometry={nodes.Side_Panel_Speakers?.geometry} material={materials.BASE_Speakers} />
      <mesh geometry={nodes.USB_Border?.geometry} material={materials.COLOUR_Cherry_Antenna} />
      <mesh geometry={nodes.USB_Base?.geometry} material={materials.COLOUR_Cherry_Plastic} />
      <mesh geometry={nodes.USB_Pin?.geometry} material={materials.BASE_Copper} />
      <mesh geometry={nodes.Back_Cam_Black?.geometry} material={materials.BASE_Black} />
      <mesh geometry={nodes.Holes?.geometry} material={materials.BASE_Black} />
      <mesh geometry={nodes.Back_Cam_Lens_02?.geometry} material={materials.BASE_Cam_Lens02} />
      <mesh geometry={nodes.Back_Cam_Lens_03?.geometry} material={materials.BASE_Cam_Lens03} />
      <mesh geometry={nodes.Back_IR_Glass?.geometry} material={materials.BASE_Sensor} />
      <mesh geometry={nodes.Front_Screen?.geometry} material={materials.COLOUR_Cherry_Screen} />
      <mesh geometry={nodes.Back_Mic?.geometry} material={materials.BASE_Black} />
      <mesh geometry={nodes.Side_Button_Detail_Border?.geometry} material={materials.COLOUR_Cherry_Button_Detail_Border} />
      <mesh geometry={nodes.Front_Sensor?.geometry} material={materials.BASE_Sensor} />
      <mesh geometry={nodes.Side_Panel?.geometry} material={materials.COLOUR_Cherry_Side_Panel} />
      {materials['BASE_Flash_Glass duplicate'] && (
        <mesh
          geometry={nodes.Back_Flash_Glass_Matte?.geometry}
          material={materials['BASE_Flash_Glass duplicate']}
        />
      )}
      <mesh geometry={nodes.Back_Logo?.geometry} material={materials.COLOUR_Cherry_Apple} />
      <mesh geometry={nodes.Screws?.geometry} material={materials.COLOUR_Cherry_Screws} />
      <mesh geometry={nodes.Side_Button?.geometry} material={materials.COLOUR_Cherry_Side_Button_Detail} />
      <mesh geometry={nodes.Back_Cam_Aperture?.geometry} material={materials.BASE_Grey} />
      <mesh geometry={nodes.Front_Cam_Inset?.geometry} material={materials.BASE_Black} />
      <mesh geometry={nodes.Front_Cam_Base?.geometry} material={materials.BASE_Grey} />
      <mesh geometry={nodes.Side_Panel_Gloss?.geometry} material={materials.COLOUR_Cherry_Side_Panel_Gloss} />
      <mesh geometry={nodes.Back_Cam_Base001?.geometry} material={materials.BASE_Grey_02} />
      <mesh geometry={nodes.Back_Cam_Lens_Outer?.geometry} material={materials.BASE_Cam_Lens_Outer} />
    </group>
  );
}
