import React from 'react'

function Skill(props) {
    const netClr = "#233b5a";
    const { icon, name } = props; 
  return (
    <div style={{width:"fit-content", height: "fit-content", padding:"4px 8px", display:"flex", justifyContent: "space-evenly", color:"white", backgroundColor:netClr, fontSize: "18px", 
    fontFamily: "'Nunito', sans-serif",borderRadius:"8px", margin: "5px"}}>
        <div style={{padding:"2px"}}>{icon}</div>
        <div style={{padding:"4px 4px 4px 8px"}}>{name}</div>
    </div>
  )
}

export default Skill