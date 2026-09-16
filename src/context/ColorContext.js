import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/assets/models/iphone-18-pro-max.glb";

export const ColorContext = createContext({});

export const ColorContextProvider = ({ children }) => {
  const { materials } = useGLTF(MODEL_PATH);
  const [currentColor, setCurrentColor] = useState({
    color: "#5B2433",
    text: "Burgundy",
    rgbColor: "91, 36, 51",
  });

  let changeColorContext = (colorObj) => {
    const targetMats = [
      materials?.COLOUR_Cherry_Backpanel,
      materials?.COLOUR_Cherry_Side_Panel,
      materials?.COLOUR_Cherry_Side_Panel_Gloss,
      materials?.COLOUR_Cherry_Apple,
      materials?.COLOUR_Cherry_Antenna,
      materials?.COLOUR_Cherry_Button_Detail_Border,
      materials?.COLOUR_Cherry_Side_Button_Detail,
      materials?.COLOUR_Cherry_Plastic,
      materials?.COLOUR_Cherry_Aniso,
      materials?.COLOUR_Cherry_Screws,
      materials?.Body,
    ];

    targetMats.forEach((mat) => {
      if (mat?.color) {
        mat.color.set(colorObj.color);
      }
    });

    setCurrentColor(colorObj);
  };

  return (
    <ColorContext.Provider value={{ currentColor, changeColorContext }}>
      {children}
    </ColorContext.Provider>
  );
};