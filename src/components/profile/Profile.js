import './profile.css';
import React from 'react'
import DynamicText from './DynamicText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    return (
        <div id="profile">
            <div className="subcontainer">
                <div id="introduction">
                    <div id="subheadfont">Hello, I'm </div>
                    <div id="headfont"> Rajan Patel.</div>
                    <DynamicText />
                    <div id="description">I am currently in the fourth year of my Bachelor's in Technology program, majoring in Computer Science at SVNIT, Surat.</div>
                    <a href="https://drive.google.com/file/d/1jBrnXWH36kHf7JUtjnE5z0bnV1JbhGsQ/view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <div id="downloadcv">Download CV <FontAwesomeIcon icon={faDownload} style={{ paddingLeft: "6px" }} /></div>
                    </a>
                    <div className="socialmedia">
                        <div>
                            <a href="https://www.linkedin.com/in/rajan-patel-aaa503252/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '44px', color: '#0a66c2' }} /></a>
                        </div>
                        <div>
                            <a href="https://github.com/rajanptl-9" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} style={{ fontSize: '44px', color: '#010409' }} /></a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100056040500100" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareFacebook} style={{ fontSize: '44px', color: '#1877f2' }} /></a>
                        </div>
                    </div>
                </div>
                <div className="profileimage"></div>
            </div>
        </div>
    )
}

export default Profile;