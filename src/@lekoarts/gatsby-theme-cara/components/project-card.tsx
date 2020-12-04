/** @jsx jsx */
import React from "react";
import {jsx} from "theme-ui";

type ProjectCardProps = {
    link: string
    title: string
    children: React.ReactNode
    bg: string
    imgsrc: string
}

const ProjectCard = ({link, title, children, bg, imgsrc}: ProjectCardProps) => (
    <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        sx={{
            width: `100%`,
            boxShadow: `lg`,
            position: `relative`,
            opacity: `0.9`,
            display: `block`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: [1, 1, 2, 4],
            py: [1, 1, 2, 4, 5],
            color: `white`,
            position: `relative`,
            background: bg || `none`,
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            "&:hover": {
                color: `white !important`,
                transform: `translateY(-5px)`,
                boxShadow: `xl`,
            },
        }}
    >


        <div
            sx={{
                textTransform: `uppercase`,
                letterSpacing: [0, 0, `wide`],
                pt: [3, 3, 3, 3, 4],
                fontSize: [2, 2, 3, 4, 5],
                fontWeight: [`small`, `small`, `medium`],
                lineHeight: 1.1,
            }}
        >
            {title}
        </div>
        <div sx={{opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`}}>{children}</div>
    </a>
)

export default ProjectCard
