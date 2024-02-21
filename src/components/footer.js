import React from 'react'

function Footer() {
  const netClr = "#233b5a";
  const stl = {
    footer_container: {
      width: "100%",
      height: "22px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: netClr,
      fontSize: "12px",
      fontFamily: "system-ui",
      textAlign: "center",
      backgroundColor: "#FFFFFF10",
      backdropFilter: "blur(12px)",
      boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
    },
  }
  return (
    <div style={stl.footer_container}>Copyright &#169; 2023 | Developed by Rajan Patel</div>
  )
}

export default Footer