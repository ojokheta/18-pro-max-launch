import { createGlobalStyle } from "styled-components";
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf";
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'Source Sans Pro light';
    src: local('Source Sans Pro light'), url(${fontLight}) format("truetype") ;
    font-display:swap;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(${fontRegular}) format("truetype") ;
    font-display:swap;
    font-style: normal;
}

body{
    font-family: "Source Sans Pro", sans-serif;
    overflow-x: hidden;
}

:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px

  // Colors
  --dark: #000000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --blue: #0071e3;
  --blueRgba: "0, 113, 227";

  // Text colors used across sections
  --textLight: #f5f5f7;
  --textDark: #1d1d1f;
  --textMuted: #a1a1a6;

  //fonts
  --fontL: "Source Sans Pro light";
  --fontR: "Source Sans Pro";

  // gradient
  --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
}

/* ============================================================
   Dynamic text inversion via CSS blend modes
   ------------------------------------------------------------
   Elements tagged .blend-invert render white and use
   mix-blend-mode: difference, so every glyph automatically
   flips to high contrast against whatever is painted behind
   it: light page background => text reads black, dark 3D
   model / dark canvas / dark section => text reads white.

   (We use mix-blend-mode instead of filter: invert() because
   a filter cannot see what is painted behind an element —
   only blend modes react to the backdrop.)

   Stacking rules that keep this working — read before reuse:
   1. The blended element must paint ABOVE the fixed
      #phone-model canvas (z-index: 1). Use z-index >= 2 on
      the text itself so the canvas becomes part of its blend
      backdrop. Text below the canvas would be occluded, not
      inverted.
   2. Do NOT put isolation: isolate, z-index, transform,
      filter or opacity on the PARENT <section> wrappers of
      blended text. Any stacking context between the text and
      the root would trap the blend and exclude the phone
      canvas from the backdrop, breaking the inversion.
      The class below puts isolation on the text element
      itself, which only scopes its own descendants and is
      always safe.
   ============================================================ */
.blend-invert {
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  mix-blend-mode: difference;
  isolation: isolate;
}
`;
