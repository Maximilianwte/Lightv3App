import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "./Contact.css";

ReactGA.pageview("/Kontakt");

class Contact extends Component {
  render() {
    return (
      <div className="container fullPage" id="contact">
       <Helmet>
          <meta charSet="utf-8" />
          <title>
            Contact | Light - Amazing Web Experiences from Hamburg, Germany
          </title>
          <meta
            name="description"
            content="Awesome Web Apps, Voice and Chat Bots for your Company built exactly for your needs by Light from Hamburg, Germany."
          />
          <meta
            name="keywords"
            content="Contact, Kontakt, Light, Lightstrategies, Hamburg, Germany, Website, Design, Apps, Web App, Deutschland, Bots, Alexa Bot, Messenger Bot, Google Home Bot, Agency, Agentur, beauftragen, Schleswig-Holstein, Maximilian, Witte, Maximilian Witte"
          />
        </Helmet>
        <div className="Head">
          <h2>Contact</h2>
        </div>
        <div className="textTop">
          <p>I am excited to hear about your project.</p>
        </div>
        <div className="Profile" id="Profile">
          <img
            src={require("../../Assets/MaximilianWitte.png")}
            alt="Maximilian Witte"
            title="Maximilian Witte"
          />
          <h3>Maximilian Witte</h3>
        </div>
        <form
          action="https://formspree.io/maximilianwitte@lightstrategies.com"
          method="POST"
        >
          <div className="Form" id="">
            <svg id="Ebene_1" viewBox="0 0 128 128">
              <defs />
              <path
                className="cls-1"
                d="M14.67,93.5A5.18,5.18,0,0,1,9.5,88.33V35.67a5.16,5.16,0,0,1,5.17-5.17h98.66a5.18,5.18,0,0,1,5.17,5.17V88.33a5.18,5.18,0,0,1-5.17,5.17Z"
              />
              <path d="M113.33,31A4.67,4.67,0,0,1,118,35.67V88.33A4.67,4.67,0,0,1,113.33,93H14.67A4.67,4.67,0,0,1,10,88.33V35.67A4.68,4.68,0,0,1,14.67,31h98.66m0-1H14.67A5.67,5.67,0,0,0,9,35.67V88.33A5.67,5.67,0,0,0,14.67,94h98.66A5.67,5.67,0,0,0,119,88.33V35.67A5.67,5.67,0,0,0,113.33,30Z" />
              <polyline
                className="cls-2"
                points="116.5 32.5 63.5 61.5 11.5 32.5"
              />
              <line
                className="cls-2"
                x1="11.5"
                x2="49.43"
                y1="91.5"
                y2="53.57"
              />
              <line
                className="cls-2"
                x1="116.5"
                x2="78.28"
                y1="91.5"
                y2="53.28"
              />
            </svg>
            <input name="Vor- & Nachname:" type="text" placeholder="Name" />
            <input name="Antwort An:" type="email" placeholder="Email" />
            <input name="Betreff:" type="text" placeholder="Betreff" />
            <textarea name="Nachricht:" placeholder="Nachricht" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <input
              defaultValue="Abschicken"
              type="submit"
              id="SubmitButton"
              onClick={ReactGA.event({
                category: "Behaviour",
                action: "Contact Form Used"
              })}
            />
          </div>
          <input type="hidden" name="_subject" value="Light Kontaktanfrage" />
          <input
            type="hidden"
            name="_next"
            value="https://de.lightstrategies.com/kontakt"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
