import React from 'react'

function Footer() {
  const netClr = "#233b5a";
  const stl = {
    footer_container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: netClr,
      fontSize: "12px",
      fontFamily: "system-ui",
    },
    footer: {
      width: "98%",
      height: "22px",
      textAlign: "center",
      backgroundColor: "#FFFFFF10",
      backdropFilter: "blur(12px)",
      borderRadius: "11px",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    }
  }
  return (
    <div style={stl.footer_container}><div style={stl.footer}>Copyright &#169; {new Date().getFullYear()} | Developed by Rajan Patel</div></div>
  )
}

export default Footer