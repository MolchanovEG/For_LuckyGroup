/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import "./Navbar.css";
import global from "../image/group.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <img class="global" src={global} />
            Global
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                Mobile Top Up
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                About
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                Rate
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                Help
              </div>
            </li>

            <li>
              <div className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </div>
            </li>
          </ul>
          {button && <button className="btn sign-up">Sign Up</button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
