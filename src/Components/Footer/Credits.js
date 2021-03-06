import React, { Component } from "react";
import { Link } from "react-router-dom";
class Credits extends Component {
  render() {
    return (
      <div className="fullPage">
        <div className="imprint">
          <div className="logoBig">
            <svg id="LIGHT_Bild" viewBox="0 0 1200 1200.0001">
              <defs />
              <path
                className="cls-1"
                d="M-114.8557,1335.1389v1200h1200v-1200h-1200Zm248.1238,668.5469H21.7837V1822.7523H32.7085v171.3047h100.56v9.6289Zm98.0762,0H220.4194V1822.7523h10.9248v180.9336Zm259.7168,0h-9.4355v-38.5176h-0.4966a55.6941,55.6941,0,0,1-9.6836,17.8652,60.2369,60.2369,0,0,1-15.27,13.43,76.4017,76.4017,0,0,1-19.6152,8.49,82.5273,82.5273,0,0,1-22.4707,3.041q-20.1123,0-35.63-7.35a76.5835,76.5835,0,0,1-26.1953-20.02,86.3477,86.3477,0,0,1-16.1392-29.7754,124.1166,124.1166,0,0,1,.124-73.2344,93.4725,93.4725,0,0,1,16.2637-30.5371,78.1161,78.1161,0,0,1,26.1948-20.9062q15.5149-7.7256,35.63-7.7285a83.5186,83.5186,0,0,1,26.0708,4.0547,70.0527,70.0527,0,0,1,22.2227,11.91,70.9968,70.9968,0,0,1,16.5117,19.0059,69.6972,69.6972,0,0,1,8.938,25.3408H477.6528q-6.2095-23.8169-22.3467-37.251-16.1433-13.43-40.72-13.4316-17.8777,0-31.5337,7.0957a68.1319,68.1319,0,0,0-22.8433,19.0059,84.69,84.69,0,0,0-13.9043,27.4951,116.2033,116.2033,0,0,0-.124,65.126,78.71,78.71,0,0,0,13.6558,26.7344,65.4156,65.4156,0,0,0,22.7192,18.1191q13.6523,6.7178,32.03,6.7168a73.0914,73.0914,0,0,0,28.5537-5.3223,60.4155,60.4155,0,0,0,21.4775-14.9512,63.0922,63.0922,0,0,0,13.2837-23.1875,84.2319,84.2319,0,0,0,3.7246-30.2812H416.3237v-9.6309H491.061v88.6934Zm239.6035,0H719.74v-89.1992H606.5171v89.1992H595.5923V1822.7523h10.9248v82.1035H719.74v-82.1035h10.9248v180.9336Zm222.4717-171.3047h-62.57v171.3047H879.6411V1832.3812H817.3189v-9.6289H953.1362v9.6289Z"
                transform="translate(114.8557 -1335.1389)"
              />
            </svg>
          </div>
          <p>Light Webexperiences Maximilian Witte</p>
          <p>Schäferkampsallee 17</p>
          <p>20357 Hamburg</p>
          <p>Germany</p>
          <div className="col-xs-12 button">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <a href="mailto:maximilianwitte@lightstrategies.com">
            maximilianwitte@lightstrategies.com
          </a>
        </div>
        <div className="Credits">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pexels.com/"
          >
            Images Provided By Pexels.com
          </a>
          <div>
            <a
              href="https://www.flaticon.com/authors/elegant-themes"
              title="Elegant Themes"
            >
           
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;
