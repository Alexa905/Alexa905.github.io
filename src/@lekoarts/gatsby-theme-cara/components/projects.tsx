/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import ProjectCard from "./project-card";
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bgs="linear-gradient(to right, SlateBiege 0%, DeepSkyBlue 100%)"
      bg="white"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={0}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5, 4],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, fontFamily:'Pacifico' },
          }}
        >
          <ProjectsMDX />
        </div>
          <div sx={{
              marginTop:`30px`,
              px: 0
          }}>
          <ProjectCard
              title="А также приглашаем отметить семейные праздники и дни рождения"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
          </ProjectCard>
          </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="party" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="bitbaloon" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="cake" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <SVG icon="circus" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="cake" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="cake" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="balloonSmall" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="cake" hiddenMobile width={16} color="icon_teal" left="18%" top="75%" />
        <SVG icon="balloonSmall" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="bitbaloon" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="bitbaloon" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="bitbaloon" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="party" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="party" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="circus" width={16} stroke color="icon_red" left="75%" top="30%" />
      <SVG icon="circus" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
