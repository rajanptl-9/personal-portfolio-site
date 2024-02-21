import React from 'react'
import "./skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faGit, faGithub, faHtml5, faJava, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Skill from './Skill';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div className='skill_container'>
        <div id='skills_title'>SKILLS</div>
        <div id='skills_subtitle'>Technical Skills</div>
        <div className='skills'>
            <Skill icon={<FontAwesomeIcon icon={faJava} className='skill'/>} name="Java" />
            <Skill icon={<FontAwesomeIcon icon={faPython} className='skill'/>} name="Python" />
            <Skill icon={<FontAwesomeIcon icon={faC} className='skill'/>} name="C/C++" />
            <Skill icon={<FontAwesomeIcon icon={faHtml5} className='skill'/>} name="HTML" />
            <Skill icon={<FontAwesomeIcon icon={faCss3Alt} className='skill'/>} name="CSS" />
            <Skill icon={<FontAwesomeIcon icon={faJs} className='skill'/>} name="JavaScript" />
            <Skill icon={<FontAwesomeIcon icon={faReact} className='skill'/>} name="ReactJS" />
            <Skill icon={<FontAwesomeIcon icon={faBootstrap} className='skill'/>} name="BootStrap" />
            <Skill icon={<FontAwesomeIcon icon={faNodeJs} className='skill'/>} name="NodeJS" />
            <Skill icon={<FontAwesomeIcon icon={faGit} className='skill'/>} name="Git" />
            <Skill icon={<FontAwesomeIcon icon={faGithub} className='skill'/>} name="Git Hub" />
            <Skill icon={<FontAwesomeIcon icon={faDatabase} className='skill'/>} name="SQL" />
            <Skill icon={<FontAwesomeIcon icon={faDatabase} className='skill'/>} name="MongoDB" />
            <Skill icon={<FontAwesomeIcon icon={faDatabase} className='skill'/>} name="OracleDB" />
            <Skill icon={<FontAwesomeIcon icon={faDatabase} className='skill'/>} name="Microsoft Azure" />
            <Skill icon={<FontAwesomeIcon icon={faDatabase} className='skill'/>} name="MySQL" />
        </div>
    </div>
  )
}

export default Skills