import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectCard(props) {
    const netClr = "#233b5a";
    const {img, title, desc, link} = props;
    const stl = {
        card:{
            width: "320px",
            height: "400px",
            margin: "20px 0",
            borderRadius:"8px",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            backgroundColor: "white",
            boxShadow: `1px 1px 4px ${netClr}`,
        },
        img_div:{
            width: "100%",
            height: "164px",
            borderRadius:"8px",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
        name:{
            width: "100%",
            padding:"6px 0 0 0",
            color: netClr,
            fontSize: "30px",
            fontFamily: "Signika Negative",
            fontWeight:"600",
            textAlign: "center"
        },
        details:{
            width:"100%",
            boxSizing: "border-box",
            padding: "15px 15px",
            fontSize: "16px",
            fontFamily: "'Nunito', sans-serif",
            color:netClr,
            textAlign: "center",
        },
        link_button:{
            width: "92%",            
            boxSizing: "border-box",
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#24292e", 
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
            textAlign: "center"
          }
    }
  return (
    <div style={stl.card}>
        <div style={stl.img_div}></div>
        <div style={stl.name}>{title}</div>
        <div style={stl.details}>{desc}</div>
        <div style={stl.link_button}><a href={link} target='_blank'  rel="noopener noreferrer" className="github-button" style={{textDecoration:"none", color: "white"}}>Go to GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></div>
    </div>
  )
}

export default ProjectCard