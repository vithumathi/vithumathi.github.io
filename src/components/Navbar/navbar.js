import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg text-center text-sm-center text-md-center text-lg-center text-xl-center navigation-clean-search">
          <div className="container">
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-xl-flex justify-content-xl-center"
              id="navcol-1"
            >
              <ul className="nav navbar-nav d-xl-flex justify-content-xl-end">
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link text-center"
                    href="#"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    About
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link text-center"
                    href="#"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    Experience
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link text-center"
                    href="#"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    Work
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link text-center"
                    href="#"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
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
