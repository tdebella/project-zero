import React from "react";
import "./UpperWrapper.css";

function UpperWrapper() {
  return (
    <div className="upper-wrapper">
      <div className="wrapper-1">
        <h1>
          Reporting bugs <br /> shouldn't be rocket science.
        </h1>
        <br />
        <h2>
          Get website feedback from clients and colleagues into your <br />
          favorite bug tracker, without driving developers crazy
        </h2>
        <div class="link-wrapper">
          <ul>
            <li className="txt">Start free trial </li>
            <li className="play-img">
              <img
                src={process.env.PUBLIC_URL + "/images/play.png"}
                height="30px"
                alt="play image"
              />
              Play intro
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper-2">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/webanimation-loop-optimized-poster-00001.jpg"
          }
          alt="webanimation-image"
        />
      </div>
      <div className="wrapper-3">
        <h2>
          <b>Amazing teams use Marker.io</b>
        </h2>
        <ul className="links-wrapper">
          <li className="logo-link">
            <img
              src={process.env.PUBLIC_URL + "/images/fantasypro-logo.svg"}
              alt="fantasypro-logo"
            />
          </li>
          <li className="logo-link">
            <img
              src={process.env.PUBLIC_URL + "/images/Vimeo_Logo.svg"}
              width="160"
              alt="Vimeo_Logo"
            />
          </li>
          <li className="logo-link">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/The_Washington_Post_Newspaper.svg"
              }
              width="280"
              alt="The_Washington_Post"
            />
          </li>
          <li className="logo-link">
            <img
              src={process.env.PUBLIC_URL + "/images/capital-one-logo.svg"}
              width="180"
              alt="capital-one-logo"
            />
          </li>
          <li className="logo-link">
            <img
              src={process.env.PUBLIC_URL + "/images/wetranfer-black.svg"}
              width="280"
              alt="wetranfer-logo"
            />
          </li>
          <li className="logo-link">
            <img
              src={process.env.PUBLIC_URL + "/images/green-chameleon-logo.svg "}
              width="220"
              alt="green-chameleon-logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UpperWrapper;
