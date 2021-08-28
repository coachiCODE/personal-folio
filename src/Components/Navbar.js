import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const [click, setClick] = useState(false);
  const [isOpen ] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/LandingPage" className="nav-logo">
            TD Tech
            <FontAwesomeIcon icon={faCode}/>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
              <NavLink
                exact
                to="/LandingPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/FolioPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portefolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;