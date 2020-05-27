import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
          <div className="container">
            <button
              data-toggle="collapse"
              data-target="#navcol-1"
              className="navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav text-center mx-auto">
                <li role="presentation" className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
