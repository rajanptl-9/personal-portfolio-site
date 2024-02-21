import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectCard(props) {
    const {img, title, desc, link} = props;
    const stl = {
        img_div:{
            width: "100%",
            height: "164px",
            borderRadius:"8px",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
    }
  return (
    <div className='card'>
        <div style={stl.img_div}></div>
        <div className='name'>{title}</div>
        <div className='details'>{desc}</div>
        <div className='link_button'><a href={link} target='_blank'  rel="noopener noreferrer" className="github-button" style={{textDecoration:"none", color: "white"}}>Go to GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></div>
    </div>
  )
}

export default ProjectCard