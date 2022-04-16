import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="top-wrapper">
        <div className="txt">NEWS</div>
        <div className="img-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/smilyface.png"}
            width="30px"
            Height="50px"
            alt="smilyface"
          />
          <br />
          <p className="img-link-txt"> New Marker.io Dashboard for 2022</p>
        </div>
      </div>

      <div className="Navbar">
        <ul className="navbar-wrapper">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/marker-io-logo-black.svg"}
              alt="marker-io-logo"
            />
          </div>
          <li>Features</li>
          <li>
            Who is it for
            <img
              src={process.env.PUBLIC_URL + "/images/caret-down.svg"}
              alt="caret-down"
            />
          </li>
          <li>
            Integrations
            <img
              src={process.env.PUBLIC_URL + "/images/caret-down.svg"}
              alt="caret-down"
            />
          </li>
          <li className="push-right">Pricing</li>
          <li>
            Resources
            <img
              src={process.env.PUBLIC_URL + "/images/caret-down.svg"}
              alt="caret-down"
            />
          </li>
          <li>Log in</li>
          <li className="start">Start free trial</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
