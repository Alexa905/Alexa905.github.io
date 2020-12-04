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

        <Divider speed={0} offset={offset} factor={factor}>
            <UpDown>
                <SVG icon="circus" hiddenMobile width={6} color="icon_blue" left="50%" top="75%"/>
                <SVG icon="party" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%"/>
                <SVG icon="bitbaloon" width={8} stroke color="icon_darkest" left="25%" top="5%"/>
                <SVG icon="balloonSmall" hiddenMobile width={24} color="icon_orange" left="80%" top="80%"/>
            </UpDown>
            <UpDownWide>
                <SVG icon="bitbaloon" hiddenMobile width={16} color="icon_purple" left="5%" top="80%"/>
                <SVG icon="cake" width={12} stroke color="icon_brightest" left="95%" top="50%"/>
                <SVG icon="bitbaloon" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%"/>
                <SVG icon="party" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%"/>
            </UpDownWide>
            <SVG icon="balloonSmall" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%"/>
            <SVG icon="balloonSmall" width={12} color="icon_darkest" left="70%" top="60%"/>
            <SVG icon="cake" width={6} color="icon_orange" left="10%" top="10%"/>
            <SVG icon="balloonSmall" width={12} color="icon_darkest" left="20%" top="30%"/>
            <SVG icon="circus" width={8} stroke color="icon_darkest" left="80%" top="70%"/>
        </Divider>
        <Content speed={0.2} offset={offset} factor={factor}>
            <Inner sx={{
                h2: {fontFamily: 'Pacifico'},
                dd: {fontSize: `14px`},
                dt: {fontSize: `14px`, fontWeight: `600`},
            }}>
                <AboutMDX />
                <div id="about" sx={{
                    position: 'relative',
                    display: [`block`, `block`, `flex`],
                    boxShadow: [`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`],
                    borderRadius: `20px`
                }}>
                    <div sx={{
                        background: 'rgba(255,255,255,.9)',
                        padding: ['20px 0 0 0px', '20px 0 0 0px',  '20px 0 0 0px', '20px 0 0 160px'],
                        borderRadius: '20px',
                        margin: [`0 0px 20px 0`, `0 0px 0px 0`, `0 0px 0px 0`,`0 35px 20px 0`]
                    }}>
                        <img sx={{
                            opacity: `0.9`,
                            display: ['none', 'none', 'none', 'block'],
                            width: `16%`,
                            top: `5px`,
                            position: `absolute`,
                            left: `-28px`,
                            right: `auto`,
                            margin: `auto`
                        }}
                             src={'/tolik.png'} alt="Acrobat"/>
                        <h3 sx={{textAlign: `center`}}>Страшкин Анатолий Павлович </h3>
                        <h4 sx={{textAlign: `center`}}>Артист цирка (зквилибрист)<br/>
                            Кандидат в Мастера Спорта по <br/> спортивной гимнастике
                        </h4>
                        <dl>
                            <dt>с 1979 г.</dt>
                            <dd>тренер по спортивной гимнастике в ДЮСШ Горспорткомитета <br/>г. Сумгаита</dd>
                            <dt>с 1985 г.</dt>
                            <dd>артист Минского Госцирка</dd>
                            <dt>с 1987 г.</dt>
                            <dd>тренер по акробатике ( Минский ДКиС железнодорожников)</dd>
                            <dt>с 1991 г.</dt>
                            <dd>артист оригинального жанра эстрадно-циркового коллектива "Беларусь" (Минскконцерт)</dd>
                            <dt>с 2002 г.</dt>
                            <dd>артист оригинальнго жанра циркового коллектива <br/>(Гомельская областная филармония)
                            </dd>
                            <dt>с 2006 г.</dt>
                            <dd>артист цирка (концертная деятельность, РБ)</dd>
                            <dt>с 2016 г.</dt>
                            <dd> артист цирка "Рандеву" (РФ)</dd>
                        </dl>
                    </div>

                    <div sx={{
                        background: 'rgba(255,255,255,.9)',
                        padding: '20px 0',
                        borderRadius: '0.5rem',
                        margin: `0 0 20px 0`
                    }}>
                        <img sx={{
                            gridColumn: `-1/1`,
                            display: [`none`, `block`],
                            opacity: `1`, width: `24%`, position: `absolute`,
                            right: `-19px`,
                            bottom: [0,0,0,`-22px`, `-27px`],
                            transform: `rotate(11deg)`
                        }} src={'/mom.png'} alt="Clowness"/>
                        <h3 sx={{textAlign: `center`}}>Алексеенкова Марина Николаевна</h3>
                        <h4 sx={{textAlign: `center`}}> Артистка цирка<br/>
                            Режиссер театра (диплом Белорусской Академии <br/> Искусств,
                            театральный факультет)</h4>
                        <dl>
                            <dt>с 1986 г.</dt>
                            <dd>режиссер Театра юного зрителя ДКТЖ (г.Гомель, РБ)</dd>
                            <dt>с 1995 г.</dt>
                            <dd>руководитель коллектива "Эстрадный театр" ДКиС Гомельского химзавода</dd>
                            <dt>с 1999 г.</dt>
                            <dd>артистка театра игр и забав для детей "Вырастайка" (Гомельская областная
                                филармония)
                            </dd>
                            <dt>В 2001 г.</dt>
                            <dd>присвоена 1 категория артистки-чтеца, мастера художественного слова</dd>
                            <dt>с 2002 г.</dt>
                            <dd>артистка иллюзионного (оригинального) жанра циркового коллектива Гомельской
                                областной филармонии
                            </dd>
                            <dt>с 2006 г.</dt>
                            <dd>артистка цирка <br/> (концертная деятельность, РБ)
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
