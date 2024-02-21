import React from 'react'

function Tag(props) {
    const netClr = "#233b5a";
    const {link, icon, name, bgcolor} = props
    const stl = {
        tag_container:{
            width:"300px",
            height:"70px",
            borderRadius: "35px",
            margin:"6px 20px",
            textDecoration:"none",
            display: "flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            color:"white",
            backgroundColor:netClr,
        },
        tag_icon:{
            width:"24%", 
            borderRadius: "35px",
            textAlign:"center",
            height:"70px",
            fontSize: "36px",            
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: bgcolor,
        },
        tag_name:{
            width:"76%",
            height:"70px",
            fontSize:"20px",
            fontFamily: "'Nunito', sans-serif",
            display: "flex",
            justifyContent:"left",
            paddingLeft:"16px",
            alignItems:"center",
        }
    }
  return (
    <a href={link} target='_blank' rel="noreferrer noopener" style={stl.tag_container}>
        <div style={stl.tag_icon}>{icon}</div>
        <div style={stl.tag_name}>{name}</div>
    </a>
  )
}

export default Tag