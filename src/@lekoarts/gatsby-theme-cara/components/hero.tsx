/** @jsx jsx */
import {jsx} from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import React, {useEffect} from "react";
import {UpDown, UpDownWide} from "../styles/animations";
// @ts-ignore
import Intro from "../sections/intro";

const Hero = ({offset, factor = 1}: { offset: number; factor?: number }) => {

    return <div>
        <Divider speed={0} offset={offset} factor={factor}>
            <UpDown>
                <SVG icon="balloon" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%"/>
                <SVG icon="party" width={48} stroke color="icon_red" left="80%" top="70%"/>
                <SVG icon="cake" width={6} color="icon_darker" left="60%" top="15%"/>
            </UpDown>
            <UpDownWide>
                <SVG icon="balloonSmall" width={16} color="icon_pink" left="80%" top="10%"/>
                <SVG icon="cake" width={12} color="icon_orange" left="90%" top="50%"/>
                <SVG icon="bitbaloon" width={16} color="icon_darker" left="70%" top="90%"/>
                <SVG icon="balloon" width={16} stroke color="icon_darkest" left="30%" top="65%"/>
                {/*            <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%"/>*/}
                <SVG icon="balloon" hiddenMobile width={16} color="icon_pink" left="28%" top="15%"/>
                <SVG icon="circus" width={6} color="icon_darkest" left="75%" top="10%"/>
                <SVG icon="balloonSmall" hiddenMobile width={8} stroke color="icon_darkest" left="45%" top="10%"/>
                <SVG icon="balloon" hiddenMobile width={24} stroke color="icon_yellow" left="60%" top="70%"/>
            </UpDownWide>
            <SVG icon="circus" hiddenMobile width={24} stroke color="icon_bordo" left="5%" top="70%"/>
            <SVG icon="bitbaloon" width={6} stroke color="icon_pink" left="4%" top="20%"/>
            <SVG icon="bitbaloon" width={12} color="icon_darkest" left="50%" top="60%"/>
            <SVG icon="balloonSmall" width={8} color="icon_darkest" left="95%" top="90%"/>
            <SVG icon="balloonSmall" hiddenMobile width={24} color="icon_darker" left="40%" top="80%"/>
            <SVG icon="circus" width={24} stroke color="icon_darker" left="25%" top="5%"/>
            <SVG icon="balloon" width={64} color="icon_bordo" stroke left="89%" top="5%"/>
            <SVG icon="party" hiddenMobile width={64} stroke color="icon_purple" left="5%" top="90%"/>
            <SVG icon="circus" width={6} color="icon_darkest" left="10%" top="10%"/>
            <SVG icon="party" width={12} color="icon_darkest" left="40%" top="30%"/>
            <SVG icon="balloon" width={16} stroke color="icon_darker" left="10%" top="50%"/>
            <SVG icon="balloon" width={8} stroke color="icon_darker" left="80%" top="70%"/>
        </Divider>
        <Content sx={{variant: `texts.bigger`, textAlign: `center`, h2: {fontFamily: 'Lobster'}}} speed={0}
                 offset={offset} factor={factor}>
            <Inner sx={{textAlign: `center`, h2: {fontFamily: 'Pacifico'}}}>

                <div sx={{minHeight: [`120px`, `350px`, `600px`, `600px`], marginBottom: [`0`, `0`, `0px`]}}>
                    <img sx={{
                        opacity: `0.8`,
                        width: `600px`,
                        position: `absolute`,
                        maxWidth: [`100%`, `80%`,  `80%`],
                        margin: `auto`,
                        left: `0`,
                        top: `0`,
                        right: `0`
                    }} src={'/logo-with-bg2.png'} alt="Intro"/>;
                </div>
{/*
                <nav sx={{
                    width: `50%`,
                    margin: `0 auto 30px auto`,
                    background: `rgb(167 51 45 / 0.9)`,
                    color: `white`,
                    borderRadius: `11px`,
                    boxSizing: `border-box`,
                    border: `1px solid orange`,
                    padding: `0`,
                    display: `block`
                }}>
                    <ul sx={{
                        display: `flex`,
                        justifyContent: `space-evenly`,
                        alignItems: `center`,
                        height: `48px`,
                        lineHeight: `48px`,
                        listStyle: `none`,
                        fontFamily: 'Lobster',
                        margin: `0`,
                        backgroundColor: `transparent`
                    }}>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#projects">Что мы предлагаем</a></li>
                        <li><a href="#contacts">Kонтакты</a></li>
                    </ul>
                </nav>*/}
                <Intro/>

                <div sx={{position: `relative`}}>
                    <img hiddenMobile sx={{
                        position: `absolute`,
                        width: [`50%`, `11%`],
                        margin: `auto`,
                        bottom: [`-300px` , `-220px`],
                        left: `0`,
                        right: `0`,
                    }} src={`./juggling.png`}/>
                </div>
            </Inner>
        </Content>
    </div>
}

export default Hero
