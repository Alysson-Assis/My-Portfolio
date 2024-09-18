import { SectionTitle } from '../sectionTitle/section-title'

import './experience.scss'


export function Experience(){
    return(
        <div className="experience">
        <SectionTitle  text='Experience'/>
        <p>Graduating in Software Analysis and Development, experience with WebStandard (HTML, CSS, JavaScript), React, MySQL, Python for Data Analysis</p>
        <SectionTitle text='Skills'/>
        <div className="skills">
            <p>HTML 5</p>
            <p>CSS 3</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Python</p>
            <p>MySQL</p>
        </div>
      </div>
    )
}