import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="copyright">
        <div className="up" id="up">
          <i className="fa fa-angle-up"></i>
        </div>
        <p>2020 Vithu Mathi</p>
      </footer>
    );
  }
}

export default Footer;
