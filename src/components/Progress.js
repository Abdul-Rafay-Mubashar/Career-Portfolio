import React from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaCss3Alt, 
  FaDatabase 
} from "react-icons/fa";

import { 
  SiMongodb, 
  SiFastapi, 
  SiDjango, 
  SiPostgresql, 
  SiHtml5, 
  SiMysql, 
  SiPlaywright, 
  SiSelenium, 
  SiJavascript, 
  SiOpenai ,
  SiExpress
} from "react-icons/si";
import './skill.css'

function Progress(props) {
    return (
        <div className="progress-container">
            <div className="progress-skill-wrapper d-flex align-items-center justify-content-start p-3 pt-4">
                { props.num == 1  ? <FaReact className="progress-icon" />       : "" }   {/* React */}
                { props.num == 2  ? <FaNodeJs className="progress-icon" />      : "" }   {/* Node.js */}
                { props.num == 3  ? <SiMongodb className="progress-icon" />     : "" }   {/* MongoDB */}
                { props.num==4 ? <SiExpress className="progress-icon "/>        : "" }
                { props.num == 5  ? <FaPython className="progress-icon" />      : "" }   {/* Python */}
                { props.num == 6  ? <SiJavascript className="progress-icon" />  : "" }   {/* JavaScript */}
                { props.num == 7  ? <SiFastapi className="progress-icon" />     : "" }   {/* FastAPI */}
                { props.num == 8  ? <SiDjango className="progress-icon" />      : "" }   {/* Django */}

                { props.num == 9  ? <SiPostgresql className="progress-icon" />  : "" }   {/* PostgreSQL */}
                { props.num == 10 ? <SiHtml5 className="progress-icon" />       : "" }   {/* HTML */}
                { props.num == 11 ? <FaCss3Alt className="progress-icon" />     : "" }   {/* CSS */}
                { props.num == 12 ? <SiMysql className="progress-icon" />       : "" }   {/* MySQL */}
                { props.num == 13 ? <FaDatabase className="progress-icon" />    : "" }   {/* Data Scraping */}
                { props.num == 14 ? <SiPlaywright className="progress-icon" />  : "" }   {/* Playwright */}
                { props.num == 15 ? <SiSelenium className="progress-icon" />    : "" }   {/* Selenium */}
                { props.num == 16 ? <SiOpenai className="progress-icon" />      : "" }   {/* AI Integration */}

                <div className='progress-skill-text-wrapper'>
                    <div className="progress-skill">{props.skill}</div>
                </div>
            </div>
        </div>
    )
}

export default Progress
