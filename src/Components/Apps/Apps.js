import React, { Component } from "react";
import "./Apps.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

class Apps extends Component {
  switchImage = e => {
    if (e.target.id === "first") {
      $(".websiteExample#first").toggleClass("switchExample");
    } else if (e.target.id === "second") {
      $(".websiteExample#second").toggleClass("switchExample");
    } else if (e.target.id === "third") {
      $(".websiteExample#third").toggleClass("switchExample");
    }
  };
 /*  componentDidMount() {
    $(window).scroll(function(event) {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if (scroll > 350) {
        $(".BgOverlay#first").addClass("OverlayAnimation");
      } else if (scroll < 350) {
        $(".BgOverlay#first").removeClass("OverlayAnimation");
      } else if (scroll > 500) {
        $(".BgOverlay#first").removeClass("OverlayAnimation");
       
        console.log("Worked!");
      }
    });
  } */
  render() {
    return (
      <div className="wrapper" id="Apps">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Web Apps | Light - Amazing Web Experiences from Hamburg, Germany
          </title>
          <meta
            name="description"
            content="Amazing Web Apps for your Company built exactly for your needs by Light from Hamburg, Germany."
          />
          <meta
            name="keywords"
            content="Light, Lightstrategies, Hamburg, Germany, Website, Design, Apps, Web App, Deutschland, Agency, Agentur, beauftragen, Schleswig-Holstein, Maximilian, Witte, Maximilian Witte"
          />
        </Helmet>
        <div className="container fullPage" id="Apps">
          <div className="row flexContainer">
            <div className="container flexInlet">
              <div className="row">
                <div className="col-xs-12">
                  <h3>Your Webapp starts here.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="AppsBelow">
      {/*     <div className="BgOverlay" id="first" /> */}
          <div className="row">
            <div className="col headLine">
              <h3>Why we believe in Webapps.</h3>
            </div>
          </div>
          {/* <div className="ballList">
          <div className="ball left" id="first">
            <svg
              data-name="Ebene 2"
              xmlns="http://www.w3.org/2000/svg"
              width="290.301"
              height="290.301"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="42.514"
                  y1="42.514"
                  x2="247.787"
                  y2="247.787"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ff3f75" />
                  <stop offset="1" stopColor="#c03" />
                </linearGradient>
              </defs>
              <circle cx="145.15" cy="145.15" r="145.15" fill="url(#a)" />
            </svg>
          </div>
          <div className="ball right" id="second">
            <svg
              data-name="Ebene 2"
              xmlns="http://www.w3.org/2000/svg"
              width="290.301"
              height="290.301"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="42.514"
                  y1="42.514"
                  x2="247.787"
                  y2="247.787"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ff3f75" />
                  <stop offset="1" stopColor="#c03" />
                </linearGradient>
              </defs>
              <circle cx="145.15" cy="145.15" r="145.15" fill="url(#a)" />
            </svg>
          </div>
        </div> */}
        </div>
        {/* First */}
        <div className="container halfPage" id="">
          <div className="row flexContainer">
            <div className="container flexInlet">
              <div className="row">
                <div className="col-xs-12">
                  <h2>1</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h3>One App, all devices.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p>
                    Less Code means less bugs & cost but 100% user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="container halfPage" id="">
          <div className="row flexContainer">
            <div className="container flexInlet">
              <div className="row">
                <div className="col-xs-12">
                  <h2>2</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h3>The Power of Javascript.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p>
                    Javascript enables us to write modern, secure and
                    lightningfast apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="container halfPage" id="">
          <div className="row flexContainer">
            <div className="container flexInlet">
              <div className="row">
                <div className="col-xs-12">
                  <h2>3</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h3>All Analytics.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p>
                    We build every app with the best tools from google
                    analytics. You have all tools at hand to track your
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Tech */}
        <div className="container halfPage" id="">
          <div className="row flexContainer">
            <div className="container flexInlet">
              <div className="row">
                <div className="col-12 headLine">
                  <h2>Our Technology</h2>
                </div>
              </div>
              <div className="row" id="ourTech">
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reactjs.org/"
                  >
                    <img
                      src={require("../../Assets/React.png")}
                      alt="React.js"
                      title="React.js"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nodejs.org/en/"
                  >
                    <img
                      src={require("../../Assets/Node.png")}
                      alt="Node.js"
                      title="Node.js"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://firebase.google.com/"
                  >
                    <img
                      src={require("../../Assets/Firebase.png")}
                      alt="Google Firebase"
                      title="Google Firebase"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.contentful.com/"
                  >
                    <img
                      src={require("../../Assets/Contentful.png")}
                      alt="Contentful CMS"
                      title="Contentful CMS"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App Example */}
        <div className="ExploreApps ">
          <div className="headLine">
            <h3>Check Out Our App Examples.</h3>
          </div>
          <div className="AppList container">
            <div className="AppCard" id="first">
              <div className="AppBanner" id="first" onClick={this.switchImage}>
                <img
                  src={require("../../Assets/Yoga.jpg")}
                  alt="WebApp Design"
                  title="WebApp Design"
                />
              </div>
            </div>
            <div className="AppCard" id="second">
              <div className="AppBanner" id="second" onClick={this.switchImage}>
                <img
                  src={require("../../Assets/Idea6.jpg")}
                  alt="WebApp Design"
                  title="WebApp Design"
                />
              </div>
            </div>
            <div className="AppCard" id="third">
              <div className="AppBanner" id="third" onClick={this.switchImage}>
                <img
                  src={require("../../Assets/Shop.jpg")}
                  alt="WebApp Design"
                  title="WebApp Design"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Pricing-container fullPage flexContainer">
          <div className="fullWidth">
            <div className="PricingContainer">
              <div className="containerInlet">
                <h4>We guarantee you the best price possible!</h4>
              </div>
            </div>
            <div className="contact">
              <p>contact us for more information, request or discounts.</p>
              <div className="button">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Examples Hidden */}
        <div className="websiteExamples">
          <div className="websiteExample" id="first" onClick={this.switchImage}>
            <img
              src={require("../../Assets/Yoga.jpg")}
              alt="WebApp Design"
              title="WebApp Design"
            />
          </div>
          <div
            className="websiteExample"
            id="second"
            onClick={this.switchImage}
          >
            <img
              src={require("../../Assets/Idea6.jpg")}
              alt="WebApp Design"
              title="WebApp Design"
            />
          </div>
          <div className="websiteExample" id="third" onClick={this.switchImage}>
            <img
              src={require("../../Assets/Shop.jpg")}
              alt="WebApp Design"
              title="WebApp Design"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
