import React from "react";
import "./LowerWrapper.css";

function LowerWrapper() {
  return (
    <div className="lower-wrapper">
      <div className="wrapper-0">
        <span className="wave-hand">
          <img
            src={process.env.PUBLIC_URL + "/images/wavinghand.png"}
            height="100%"
            alt="wavinghand"
          />
        </span>
        <p className="title">
          Get rid of bugs <br /> in 4 simple steps.
        </p>
      </div>
      <div className="abc">
        <div className="txt-wrapper">
          <div className="num">1</div>
          <h1>
            <b>Explain bugs visually</b>
          </h1>
          <h2>
            “We tell our clients to <br /> mark it up! It's that easy.”
          </h2>
          <h3>- Josh, Founder at Mobile App City</h3>
        </div>
        <div className="img-wrapper">
          <img
            src={
              process.env.PUBLIC_URL + "/images/screenshot-annotation-tools.jpg"
            }
            alt="screenshot-image"
          />
        </div>
      </div>

      <div className="wrapper-2">
        <div className="img-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/website-destinations.svg"}
            width="600vw"
            alt="website-destination-img"
          />
        </div>
        <div className="txt-wrapper">
          <div className="num">2</div>
          <h1>
            <b>
              Collect into your <br /> favorite issue tracker
            </b>
          </h1>
          <h2>
            “Before Marker.io, one person's full-time <br />
            job was to transfer client emails <br /> into Asana.”
          </h2>
          <h3>- Lauren, Owner at Once Coupled</h3>
        </div>
      </div>

      <div className="wrapper-3">
        <div className="txt-wrapper">
          <div className="num">3</div>
          <h1>
            <b>
              Reproduce faster with <br /> data-rich bug reports
            </b>
          </h1>
          <h2>
            “When we started using Marker.io, our developers <br /> called to
            ask where all this good information was <br /> coming from.”
          </h2>
          <h3>- Andrew, Product Manager at Fantasy Pros</h3>
        </div>
        <div className="img-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/home-generic-issue.svg"}
            alt="home-generic-issue-img"
          />
        </div>
      </div>

      <div className="wrapper-4">
        <div className="img-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/home-comment.svg"}
            alt="home-comment-img"
          />
        </div>
        <div className="txt-wrapper">
          <div className="num">4</div>
          <h1>
            <b>
              Get client approval faster and say <br /> goodbye to emails
            </b>
          </h1>
          <h2>
            “Feedback from clients comes in seamlessly and that saves us <br />a
            ton of time. We rarely need to email anymore.”
          </h2>
          <h3>- Melodie, Founder at Business Tech Ninjas</h3>
        </div>
      </div>
    </div>
  );
}

export default LowerWrapper;
