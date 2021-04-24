import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaMapMarkerAlt } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import Modal from "react-responsive-modal";

function Navbar() {
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
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaMapMarkerAlt className="navbar-icon" />
              CHECKING
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  หน้าแรก
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/news"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ข่าวสาร
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ลงทะเบียน
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/login" className="btn-link">
                    <Button buttonStyle="btn--outline">เข้าสู่ระบบ</Button>
                  </Link>
                ) : (
                  <Link to="/login" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      เข้าสู่ระบบ
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
