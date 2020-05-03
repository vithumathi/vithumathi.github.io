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
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ fontFamily: "Fira Code" }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ fontFamily: "Fira Code" }}
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ fontFamily: "Fira Code" }}
                  >
                    Work
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link text-center"
                    href="#"
                    style={{ fontFamily: "Fira Code" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <form className="form-inline mr-auto" target="_self">
                <div className="form-group">
                  <label for="search-field"></label>
                </div>
              </form>
              <span className="navbar-text"></span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
