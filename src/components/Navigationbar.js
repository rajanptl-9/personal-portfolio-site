import React from 'react';
import './index.css'
import { useMyContext } from './ContextVar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigationbar = () => {
  const { menuSelected, setMenuSelected, showMenu, setShowMenu } = useMyContext();
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div id="navcontainer">
        <div id="my_name">RAJAN</div>
        <div id='site-menu' className="menu_container">
          {!(menuSelected === "home") && <div className="buttons" id='home-menu' onClick={() => setMenuSelected("home")}>HOME</div>}
          {!(menuSelected === "about") && <div className="buttons" id='about-menu' onClick={() => setMenuSelected("about")}>ABOUT ME</div>}
          {!(menuSelected === "projects") && <div className="buttons" id='blog-menu' onClick={() => setMenuSelected("projects")}>PROJECTS</div>}
          {!(menuSelected === "contact") && <div className="buttons" id='contactus-menu' onClick={() => setMenuSelected("contact")}>CONTACT</div>}
        </div>
        <div id="nav-menu" className="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} id='hamburger' style={{ fontSize: "28px", color: "white" }} />
          {showMenu &&
            <div className="dropdown-content">
              <div className='menu_button' onClick={() => setMenuSelected("home")}>Home</div>
              <div className='menu_button' onClick={() => setMenuSelected("about")}>About</div>
              <div className='menu_button' onClick={() => setMenuSelected("projects")}>Projects</div>
              <div className='menu_button' onClick={() => setMenuSelected("contact")}>Contact</div>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigationbar;