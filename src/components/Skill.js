import React from 'react';
import Progress from './Progress'
import { Parallax } from 'react-parallax'
import Lion from '../images/city.jpg'
import Brain from '../images/brain.png'
import City from '../images/city.jpg'

function Skill() {
    return (
        <div className="skill-container"  id="skills-section">
            <Parallax blur={0} bgImage={City} bgImageAlt="the cat" strength={400}>
                <div className="skill-text-wrapper">
                    <p className="skill-p">Skill Set</p>
                </div>
            </Parallax>
            <div className='skill-content-container'>
                <div className='skill-content'>
                    <div>
                        <Progress skill="React" percentage="95" num="1"/>
                        <Progress skill="Node" percentage="80" num="2"/>
                        <Progress skill="MongoDB" percentage="80" num="3" />
                        <Progress skill="Express" percentage="90" num="4" />
                        <Progress skill="Python" percentage="75" num="5" />
                        <Progress skill="Javscript" percentage="90" num="6" />
                        <Progress skill="FastAPI" percentage="90" num="7" />
                        <Progress skill="Django" percentage="90" num="8" />


                    </div>
                    <div>
                        <Progress skill="PostgreSql" percentage="90" num="9" />
                        <Progress skill="MySQL" percentage="75" num="12" />
                        <Progress skill="HTML" percentage="90" num="10" />
                        <Progress skill="CSS" percentage="90" num="11" />
                        <Progress skill="Data Scraping" percentage="90" num="13" />
                        <Progress skill="Playwright" percentage="90" num="14" />
                        <Progress skill="Selenium" percentage="90" num="15" />
                        <Progress skill="AI Integration" percentage="90" num="16" />


                    </div>
                </div>
                <div className='brain-img-wrapper'>
                    <img src={Brain} className="brain-img" />
                </div>
            </div>
        </div>
    )
}

export default Skill
