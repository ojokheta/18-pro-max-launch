import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TreeSilhouette = styled.div`
  width: 100%;
  line-height: 0;
  position: relative;
  margin-bottom: -1px; /* prevent microscopic subpixel gap */

  svg {
    width: 100%;
    height: auto;
    min-height: 140px;
    max-height: 280px;
    display: block;
  }
`;

const FooterBody = styled.div`
  width: 100%;
  background-color: var(--dark);
  color: var(--textDark);
  padding: 3.5rem 4rem 2.5rem 4rem;
  box-sizing: border-box;

  @media screen and (max-width: 64em) {
    padding: 2.5rem 2rem 1.5rem 2rem;
  }
  @media screen and (max-width: 48em) {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
`;

const TopRow = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 3.5rem;

  @media screen and (max-width: 48em) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const BrandColumn = styled.div`
  flex: 1.2;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

const AppleIcon = styled.svg`
  width: 30px;
  height: 36px;
  fill: var(--textDark);
`;

const BrandTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--textDark);
  margin: 0;
`;

const BrandTagline = styled.p`
  font-size: 1.05rem;
  color: var(--textMuted);
  margin: 0 0 1.6rem 0;
  line-height: 1.55;
  max-width: 360px;
  font-weight: 500;

  strong {
    color: var(--textDark);
    font-weight: 700;
  }
`;

const SkillsButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: var(--textDark);
  color: #ffffff;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background-color: #2b2a30;
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const NavColumns = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  min-width: 300px;

  @media screen and (max-width: 48em) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const GroupTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--textDark);
  margin-bottom: 0.4rem;
`;

const NavLink = styled.a`
  color: var(--textMuted);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--blue);
    transform: translateX(2px);
  }
`;

const Disclaimer = styled.div`
  max-width: 1280px;
  margin: 0 auto 2rem auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(17, 17, 19, 0.2);
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--textMuted);
  font-weight: 500;

  p {
    margin-bottom: 0.5rem;
  }

  strong {
    color: var(--textDark);
    font-weight: 700;
  }
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--textMuted);
  font-weight: 600;

  strong {
    color: var(--textDark);
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  a {
    color: var(--textMuted);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: var(--textDark);
      text-decoration: underline;
    }
  }
`;

const BottomNav = () => {
  return (
    <FooterWrapper id="bottom-nav">
      {/* Landscape pine tree silhouette in #aaa7ae sitting on #e7d0c8 */}
      <TreeSilhouette>
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          fill="#aaa7ae"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,220 L0,150 
            L8,142 L14,148 L22,130 L30,144 L38,120 L44,136 L52,105 L58,85 L64,105 L72,130 L80,115 L88,140 
            L95,128 L104,110 L112,88 L118,65 L124,88 L132,112 L140,95 L148,125 L156,145 
            L164,135 L172,118 L180,92 L188,68 L194,45 L200,68 L208,95 L216,122 L224,140 
            L232,130 L240,110 L248,82 L254,58 L260,82 L268,108 L276,132 L284,145 
            L292,136 L300,120 L308,98 L314,75 L320,52 L326,75 L334,102 L342,126 L350,145 
            L358,138 L366,125 L374,105 L382,80 L388,55 L394,35 L400,55 L408,82 L416,110 L424,132 L432,148 
            L440,138 L448,122 L456,98 L462,72 L468,98 L476,125 L484,145 
            L492,132 L500,112 L508,85 L514,60 L520,38 L526,60 L534,88 L542,115 L550,138 L558,150 
            L566,140 L574,125 L582,102 L588,78 L594,102 L602,128 L610,145 
            L618,135 L626,115 L634,88 L640,62 L646,38 L652,20 L658,38 L664,62 L672,92 L680,118 L688,142 
            L696,132 L704,115 L712,90 L718,68 L724,90 L732,115 L740,138 L748,150 
            L756,140 L764,122 L772,95 L778,70 L784,48 L790,28 L796,48 L802,70 L810,98 L818,125 L826,145 
            L834,136 L842,118 L850,92 L856,68 L862,92 L870,118 L878,140 
            L886,132 L894,112 L902,85 L908,60 L914,35 L920,58 L928,85 L936,112 L944,135 L952,148 
            L960,138 L968,120 L976,96 L982,72 L988,96 L996,122 L1004,142 
            L1012,132 L1020,110 L1028,82 L1034,55 L1040,32 L1046,55 L1054,82 L1062,110 L1070,135 L1078,148 
            L1086,138 L1094,122 L1102,98 L1108,72 L1114,98 L1122,125 L1130,145 
            L1138,135 L1146,115 L1154,88 L1160,62 L1166,40 L1172,62 L1180,90 L1188,118 L1196,140 L1204,150 
            L1212,138 L1220,120 L1228,95 L1234,70 L1240,45 L1246,70 L1254,98 L1262,124 L1270,145 
            L1278,136 L1286,118 L1294,92 L1300,68 L1306,92 L1314,118 L1322,140 
            L1330,132 L1338,112 L1346,85 L1352,60 L1358,38 L1364,60 L1372,88 L1380,115 L1388,138 L1396,150 
            L1404,140 L1412,125 L1420,105 L1428,80 L1434,62 L1440,80 L1440,220 Z"
          />
        </svg>
      </TreeSilhouette>

      <FooterBody>
        <TopRow>
          <BrandColumn>
            <BrandHeader>
              {/* Official Apple Logo */}
              <AppleIcon viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </AppleIcon>
              <BrandTitle>Ojokay.dev</BrandTitle>
            </BrandHeader>

            <BrandTagline>
              Designed & developed by <strong>Ojokay.dev</strong>. Pushing the boundaries of interactive 3D web experiences with Three.js, GSAP, and modern web architecture.
            </BrandTagline>

            <SkillsButton
              href="https://ojokayclay.freebuff.app"
              target="_blank"
              rel="noopener noreferrer"
              id="view-my-skills-btn"
            >
              <span>View My Skills</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SkillsButton>
          </BrandColumn>

          <NavColumns>
            <NavGroup>
              <GroupTitle>iPhone 18 Pro Max</GroupTitle>
              <NavLink href="#quote">Overview</NavLink>
              <NavLink href="#hero">Design & Aesthetics</NavLink>
              <NavLink href="#display">ProMotion Display</NavLink>
              <NavLink href="#processor">A20 Pro Silicon</NavLink>
              <NavLink href="#camera">Action Camera</NavLink>
              <NavLink href="#pricing">360° Studio & Colors</NavLink>
            </NavGroup>

            <NavGroup>
              <GroupTitle>Developer Portfolio</GroupTitle>
              <NavLink href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">About Ojokay.dev</NavLink>
              <NavLink href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">Full-Stack Skills</NavLink>
              <NavLink href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">3D & WebGL Projects</NavLink>
              <NavLink href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">React & Animation Architecture</NavLink>
              <NavLink href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">Case Studies</NavLink>
            </NavGroup>

            <NavGroup>
              <GroupTitle>Connect & Inquire</GroupTitle>
              <NavLink href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">Portfolio Hub</NavLink>
              <NavLink href="https://github.com/ojokheta" target="_blank" rel="noopener noreferrer">GitHub Profile</NavLink>
              <NavLink href="https://sketchfab.com/3d-models/apple-iphone-18-pro-max-burgundy-2026-604acc18b5d5455d820a16359b45b003" target="_blank" rel="noopener noreferrer">Sketchfab 3D Model</NavLink>
              <NavLink href="mailto:hello@ojokay.dev">Get in Touch</NavLink>
            </NavGroup>
          </NavColumns>
        </TopRow>

        <Disclaimer>
          <p>
            * Trade-in values will vary based on condition, year, and configuration of your eligible device. Not all devices are eligible for credit. 3D model asset "Apple iPhone 18 Pro Max Burgundy 2026" created by extraakash under Creative Commons Attribution.
          </p>
          <p>
            Conceptual project landing page designed and crafted by <strong>Ojokay.dev</strong> to demonstrate advanced 3D interactive web development, GSAP animation orchestration, and modern React Three Fiber integration.
          </p>
        </Disclaimer>

        <BottomBar>
          <div>
            Copyright &copy; {new Date().getFullYear()} <strong>Ojokay.dev</strong>. All rights reserved.
          </div>
          <LegalLinks>
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Use</a>
            <span>|</span>
            <a href="#sales">Sales Policy</a>
            <span>|</span>
            <a href="#legal">Legal</a>
            <span>|</span>
            <a href="https://ojokayclay.freebuff.app" target="_blank" rel="noopener noreferrer">Ojokay.dev Portfolio</a>
          </LegalLinks>
        </BottomBar>
      </FooterBody>
    </FooterWrapper>
  );
};

export default BottomNav;
