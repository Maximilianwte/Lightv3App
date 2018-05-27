import React, { Component } from "react";
import $ from "jquery";

class checkCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCountry: false,
      countryCode: "NA",
      renderBox: true
    };
  }
  componentDidMount() {
    // Hier brauchen wir eine arrow function, damit der context für setState weitergegeben wird.
    if (this.state.checkCountry === false) {
      $.getJSON("https://geoip.cdnservice.eu/api/", data => {
        this.setState(() => {
          return { countryCode: data.country.code, checkCountry: true };
        });
        console.log(this.state.countryCode);
      });
    }
  }
  hideBox = () => {
    // Hier brauchen wir eine arrow function, damit der context für setState weitergegeben wird.
    this.setState(() => {
      return { renderBox: false };
    });
  };
  render() {
    if (this.state.countryCode === "DE" && this.state.renderBox === true) {
      return (
        <div className="boxOverlay">
          <div className="checkCountryBox">
            {/*   {this.checkCountry()} */}
            <h4>Hast Du Lust unsere deutsche Seite ausprobieren?</h4>
            <div className="buttonRow">
              <a href="https://de.lightstrategies.com">Ja, gerne!</a>
              <a onClick={this.hideBox}>Nein, Danke.</a>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="check" />;
    }
  }
}

export default checkCountry;
