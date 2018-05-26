import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import $ from "jquery";
import ReactGA from "react-ga";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Context from "./Components/Context/Context";
import Apps from "./Components/Apps/Apps";
import Contact from "./Components/Contact/Contact";
import Imprint from "./Components/Footer/Credits";
import Privacy from "./Components/Footer/Privacy";

class App extends Component {
  constructor(props) {
    super(props);
    this.switchMenu = this.switchMenu.bind(this);
  }
  switchMenu() {
    $(".menuIcon").toggleClass("change");
    $(".container#menuOverlay").toggleClass("slideIn");
    console.log("Menu switched");
    ReactGA.event({
      category: "Behaviour",
      action: "Menu Triggered"
    });
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className="menuIcon" onClick={this.switchMenu}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <Route exact path="/" component={Context} />
        <Route path="/apps" component={Apps} />
        <Route path="/contact" component={Contact} />

        <Route path="/imprint" component={Imprint} />
        <Route path="/privacy" component={Privacy} />
        <Footer />
        <div className="scroll">
          <h6>Scroll</h6>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
