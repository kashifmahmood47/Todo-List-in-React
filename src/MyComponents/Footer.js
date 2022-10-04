import React from 'react'

export default function Footer() {

  let footerStyle = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    marginTop: "200px",
  }
  return (
    <footer style = {footerStyle}>
      <p>Copyright &copy; 2022</p>
    </footer>
  )
}
