/** @jsx jsx */
import {jsx} from "theme-ui";
import Icon from "./../../../../static/logo-big.svg";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import {UpDown, UpDownWide} from "../styles/animations";
// @ts-ignore
import Intro from "../sections/intro";

const Hero = ({offset, factor = 1}: { offset: number; factor?: number }) => (
    <div>
        <Divider speed={0.2} offset={offset} factor={factor}>
            <UpDown>
                <SVG icon="balloon" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%"/>
                <SVG icon="party" width={48} stroke color="icon_red" left="80%" top="70%"/>
                <SVG icon="cake" width={6} color="icon_darker" left="60%" top="15%"/>
            </UpDown>
            <UpDownWide>
                <SVG icon="balloonSmall" width={16} color="icon_blue" left="80%" top="10%"/>
                <SVG icon="cake" width={12} color="icon_orange" left="90%" top="50%"/>
                <SVG icon="bitbaloon" width={16} color="icon_darker" left="70%" top="90%"/>
                <SVG icon="balloon" width={16} stroke color="icon_darkest" left="30%" top="65%"/>
                {/*            <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%"/>*/}
                <SVG icon="balloon" hiddenMobile width={16} color="icon_pink" left="28%" top="15%"/>
                <SVG icon="circus" width={6} color="icon_darkest" left="75%" top="10%"/>
                <SVG icon="balloonSmall" hiddenMobile width={8} stroke color="icon_darkest" left="45%" top="10%"/>
                <SVG icon="balloon" hiddenMobile width={24} stroke color="icon_yellow" left="60%" top="70%"/>
            </UpDownWide>
            <SVG icon="circus" hiddenMobile width={24} stroke color="icon_green" left="5%" top="70%"/>
            <SVG icon="bitbaloon" width={6} stroke color="icon_pink" left="4%" top="20%"/>
            <SVG icon="bitbaloon" width={12} color="icon_darkest" left="50%" top="60%"/>
            <SVG icon="balloonSmall" width={8} color="icon_darkest" left="95%" top="90%"/>
            <SVG icon="balloonSmall" hiddenMobile width={24} color="icon_darker" left="40%" top="80%"/>
            <SVG icon="circus" width={24} stroke color="icon_darker" left="25%" top="5%"/>
            <SVG icon="balloon" width={64} color="icon_orange" stroke left="89%" top="5%"/>
            <SVG icon="party" hiddenMobile width={64} stroke color="icon_purple" left="5%" top="90%"/>
            <SVG icon="circus" width={6} color="icon_darkest" left="10%" top="10%"/>
            <SVG icon="party" width={12} color="icon_darkest" left="40%" top="30%"/>
            <SVG icon="balloon" width={16} stroke color="icon_darker" left="10%" top="50%"/>
            <SVG icon="balloon" width={8} stroke color="icon_darker" left="80%" top="70%"/>
        </Divider>
        <Content sx={{variant: `texts.bigger`, textAlign: `center`, h2: {fontFamily: 'Lobster'}}} speed={0.4}
                 offset={offset} factor={factor}>
            <Inner sx={{textAlign: `center`, h2: {fontFamily: 'Pacifico'}}}>

                <div sx={{position: `relative`}}>
                    <img sx={{opacity: `0.9`}} src={'/intro.png'} alt="Intro"/>;
                    {/*     <pre sx={{position: `absolute`, top: `104px`, left: `38%`, fontSize: `30px`}}>Добро пожаловать в</pre>
                     <pre sx={{position: `absolute`, top: `144px`, left: `38%`, fontSize: `30px`}}>клуб любителей цирка</pre>
                     <img sx={{position: `absolute`, width: `85px`, top: `219px`, left: `46%`}} src={'/logo-gold.png'} alt="Intro"/>;*/}
                    <Icon sx={{position: `absolute`, width: `390px`, top: `23px`, left: `0`, right:`0`, margin:`auto`}}/>
                </div>
                <Intro/>

                <div sx={{position: `relative`}}>
                    <img sx={{
                        opacity: `0.9`, width: `30%`, position: `absolute`,
                        right: `100px`,
                        top: `421px`,
                        transform: `rotate(11deg)`

                    }} src={'/mom.png'} alt="Clowness"/>
                    <img sx={{opacity: `0.9`, left: `132px`, width: `16%`, top: `-83px`, position: `absolute`}}
                         src={'/tolik.png'} alt="Acrobat"/>
                    <img sx={{opacity: `0.9`, left: `0`, right:`0`, width: `14%`, top: `34px`, margin:`auto`,position: `absolute`}}
                         src={'/dolls.png'} alt="Dolls"/>
                </div>
            </Inner>
        </Content>
    </div>
)

export default Hero
