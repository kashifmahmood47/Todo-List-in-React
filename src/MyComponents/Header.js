import React from 'react'
import {Link} from "react-router-dom";



function Header(props) {
//  let headerStyle = {
// color: "white",
// paddingRight: "10px",
// }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.siteTitle}</Link>
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
     
        </ul>
       
      </div>
    </div>
  </nav>
  

  );
}

export default Header;