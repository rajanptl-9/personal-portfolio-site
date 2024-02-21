import React from 'react'
import "./about.css"
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Education from './Education';

function About() {
    return (
            <div className='about_subcontainer'>
                <div className='about_me'>
                    <div className='image_div'></div>
                    <div className='about_content'>
                        <div id='about_me_title'>ABOUT ME</div>
                        <div id='about_text'>Hello, esteemed visitor. Welcome to my website. I am Rajan Patel, currently pursuing my Bachelor's in Technology with a major in Computer Science and Engineering at Sardar Vallabhbhai National Institute of Technology, Surat. Previously, I undertook an internship at the John Deere Manufacturing department as a Graduate Engineering Trainee during the summer break at the end of my third year, in Pune, Maharashtra. I am in the final year of my education, expected to complete my Bachelor's in Technology by June 2024.</div>
                        <span>
                            <a href="https://drive.google.com/file/d/1jBrnXWH36kHf7JUtjnE5z0bnV1JbhGsQ/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <div id='button'>Download CV <FontAwesomeIcon icon={faDownload} style={{ paddingLeft: "6px" }} /></div>
                            </a>
                        </span>
                    </div>
                </div>
                <Skills />
                <Education />
            </div>
    )
}

export default About