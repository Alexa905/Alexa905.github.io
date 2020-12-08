/** @jsx jsx */
import {jsx} from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import {UpDown, UpDownWide} from "../styles/animations";
// @ts-ignore
import AboutMDX from "../sections/about";

const About = ({offset, factor = 1}: { offset: number; factor?: number }) => (
    <div>
        {/*        <Divider
         bg="divider"
         clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
         speed={0}
         offset={offset}
         factor={factor}
         />*/}

        <Divider speed={0.1} offset={offset} factor={factor}>
            <UpDown>
                <SVG icon="circus" hiddenMobile width={6} color="icon_blue" left="50%" top="0%"/>
                <SVG icon="party" width={8} color="icon_darkest" left="70%" top="20%"/>
                <SVG icon="bitbaloon" width={8} stroke color="icon_darkest" left="25%" top="5%"/>
                <SVG icon="balloonSmall" width={24} color="icon_orange" left="80%" top="80%"/>
            </UpDown>
            <UpDownWide>
                <SVG icon="bitbaloon" width={16} color="icon_purple" left="5%" top="80%"/>
                <SVG icon="cake" width={12} stroke color="icon_brightest" left="95%" top="50%"/>
                <SVG icon="bitbaloon" width={6} color="icon_brightest" left="85%" top="15%"/>
                <SVG icon="party" width={8} color="icon_darkest" left="45%" top="10%"/>
            </UpDownWide>
            <SVG icon="circus" width={6} color="icon_brightest" left="4%" top="20%"/>
            <SVG icon="balloonSmall" width={12} color="icon_darkest" left="70%" top="60%"/>
            <SVG icon="cake" width={6} color="icon_orange" left="10%" top="-10%"/>
            <SVG icon="balloonSmall" width={12} color="icon_darkest" left="20%" top="30%"/>
            <SVG icon="circus" width={8} stroke color="icon_darkest" left="80%" top="70%"/>
        </Divider>
        <Content speed={0.2} offset={offset} factor={factor}>
            <Inner sx={{
                h2: {fontFamily: 'Pacifico', marginBottom: [0, 0, 0, `40px`]},
                h5: {textAlign: `center`},
                h4: {textAlign: `center`},
                dl: {textAlign: `center`},
                h3: {textAlign: `center`, fontFamily: 'Lobster', fontSize: [`30px`, `34px`]},
                dd: {fontSize: [`14px`, `14px`, `14px`, `16px`, `16px`], margin: `0 0 15px 0`},
                dt: {fontSize: `14px`, fontWeight: `700`},
            }}>
                <AboutMDX />
                <div id="about" sx={{
                    position: 'relative',
                    display: [`flex`, `flex`, `flex`],
                    flexFlow: `row`,
                    width: `100%`,
                    background: 'rgba(255,255,255,.9)',
                    borderRadius: '20px',
                    justifyContent: `center`,
                    alignItems: `center`,
                    alignContent: `center`,
                    boxShadow: [`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`],
                    marginBottom: [`10px`, `10px`, `10px`, `10px`, `80px`]
                }}>
                    <img sx={{
                        opacity: `0.9`,
                        display: ['none', 'none', 'none', 'block'],
                        width: `20%`,
                    }}
                         src={'/tolik.png'} alt="Acrobat"/>
                    <div sx={{
                        padding: ['20px 0 0 0px', '20px 0 0 0px', '20px 0 0 0px', '20px 0 50px 0px'],
                    }}>

                        <h3>Страшкин Анатолий Павлович </h3>
                        <h4>Артист цирка (зквилибрист)<br/>
                            Кандидат в Мастера Спорта по <br/> спортивной гимнастике
                        </h4>
                        <dl>
                            <dt>с 1979 г.</dt>
                            <dd>тренер по спортивной гимнастике <br/>в ДЮСШ Горспорткомитета г. Сумгаита</dd>
                            <dt>с 1985 г.</dt>
                            <dd>артист Минского Госцирка</dd>
                            <dt>с 1987 г.</dt>
                            <dd>тренер по акробатике <br/>Минский ДКиС железнодорожников</dd>
                            <dt>с 1991 г.</dt>
                            <dd>артист оригинального жанра эстрадно-циркового <br/>коллектива "Беларусь" (Минскконцерт)
                            </dd>
                            <dt>с 2002 г.</dt>
                            <dd>артист оригинальнго жанра циркового коллектива <br/>Гомельская областная филармония
                            </dd>
                            <dt>с 2006 г.</dt>
                            <dd>артист цирка <br/>концертная деятельность, РБ</dd>
                            <dt>с 2016 г.</dt>
                            <dd> артист цирка "Рандеву" (РФ)</dd>
                        </dl>
                    </div>
                </div>
                <div id="about" sx={{
                    position: 'relative',
                    display: [`flex`, `flex`, `flex`],
                    flexFlow: `column`,
                    overflow: `hidden`,
                    background: 'rgba(255,255,255,.9)',
                    boxShadow: [`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`],
                    borderRadius: `20px`
                }}>
                    <img sx={{
                        gridColumn: `-1/1`,
                        display: ['none', 'none', 'none', 'block'],
                        opacity: `1`, width: `45%`, position: `absolute`,
                        right: `20px`,
                        bottom: [0, 0, 0, `-56px`, `-73px`],
                        transform: `rotate(0deg)`
                    }} src={'/mom.png'} alt="Clowness"/>
                    <div sx={{
                        position: `relative`, left: [0, 0, 0, `-120px`, `-150px`],
                        padding: '20px 0',
                        borderRadius: '0.5rem',
                        margin: `0 auto 20px auto`
                    }}>

                        <h3>Алексеенкова Марина Николаевна</h3>
                        <h4> Артистка цирка<br/>
                            Режиссер театра (диплом Белорусской Академии <br/> Искусств,
                            театральный факультет)</h4>
                        <dl sx={{}}>
                            <dt>с 1986 г.</dt>
                            <dd>режиссер Театра юного зрителя ДКТЖ <br/>г.Гомель, РБ</dd>
                            <dt>с 1995 г.</dt>
                            <dd>руководитель коллектива "Эстрадный театр" <br/>ДКиС Гомельского химзавода</dd>
                            <dt>с 1999 г.</dt>
                            <dd>артистка театра игр и забав для детей "Вырастайка" <br/>Гомельская областная
                                филармония
                            </dd>
                            <dt>В 2001 г.</dt>
                            <dd>присвоена 1 категория артистки-чтеца, <br/>мастера художественного слова</dd>
                            <dt>с 2002 г.</dt>
                            <dd>артистка иллюзионного (оригинального)<br/> жанра циркового коллектива <br/> Гомельской
                                областной филармонии
                            </dd>
                            <dt>с 2006 г.</dt>
                            <dd>артистка цирка <br/> концертная деятельность, РБ
                            </dd>
                            <dt>с 2016 г.</dt>
                            <dd>артистка цирка "Рандеву" (РФ)
                            </dd>
                        </dl>
                    </div>


                    <img sx={{
                        opacity: `0.9`,
                        left: `0`,
                        right: `0`,
                        width: `14%`,
                        top: `134px`,
                        margin: `auto`,
                        display: `none`,
                        position: `absolute`
                    }}
                         src={'/dolls.png'} alt="Dolls"/>
                </div>

            </Inner>
        </Content>
    </div>
)

export default About
