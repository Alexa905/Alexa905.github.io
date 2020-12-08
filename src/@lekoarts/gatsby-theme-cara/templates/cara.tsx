import React, {useEffect, useState} from "react";
import {Parallax} from "react-spring/renderprops-addons.cjs";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import {exists, window} from "browser-monads";

const Cara = () => {
    // Client-side Runtime fetch browser width
    const {
        pages,
        projectsOffset,
        projectsFactor,
        aboutOffset,
        aboutFactor,
        contactOffset,
        contactFactor
    } = useWindowWidth(); // Our custom Hook

    return (
        <Layout>
            <Parallax pages={pages}>
                <Hero offset={0} factor={1}/>
                <Projects offset={projectsOffset} factor={projectsFactor}/>
                <About offset={aboutOffset} factor={aboutFactor}/>
                <Contact offset={contactOffset} factor={contactFactor}/>
            </Parallax>
        </Layout>
    )
}

export default Cara

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    let breakpoints = {
        pages: 6.2,
        projectsOffset: 1.4,
        projectsFactor: 1,
        aboutOffset: 3.5,
        aboutFactor: 1.5,
        contactOffset: 5.2,
        contactFactor: 1.05,
        width: width
    };

    if (exists(window)) {
        useEffect(() => {

            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        });

        switch (true) {
            case (width <= 400):

                breakpoints.projectsOffset = 1.2;
               // breakpoints.projectsFactor = 1;

            //    breakpoints.aboutOffset = 3.3;
              //  breakpoints.aboutFactor = 1.5;

            //    breakpoints.contactFactor = 1;
                break;
            case (width <= 600):

               breakpoints.projectsOffset = 1.2;
             //   breakpoints.projectsFactor = 1;

                breakpoints.aboutOffset = 3.5;
           //     breakpoints.aboutFactor = 1;

                break;
            case (width <= 900):

                //breakpoints.projectsOffset = 1.4;
               // breakpoints.projectsFactor = 1;

                breakpoints.aboutOffset = 3.5;
              //  breakpoints.aboutFactor = 1;

                //using the default
                break;
            case (width <= 1200):
                breakpoints.aboutOffset = 3.4;
                //using the default
                break;
            case (width > 1600):
                //using the default
                break;
        }
    }

    // console.log("breakpoints", breakpoints.pages, breakpoints.projectsOffset, breakpoints.projectsFactor, breakpoints.aboutOffset, breakpoints.aboutFactor)

    return breakpoints;
}
