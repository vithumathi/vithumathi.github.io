import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="copyright">
        <a className="up" id="up" href="#home">
          <i className="fa fa-angle-up"></i>
        </a>
        <p>2020 Vithu Mathi</p>
      </footer>
    );
  }
}

export default Footer;
