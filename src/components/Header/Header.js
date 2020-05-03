import React from "react";
import "./header-dark.css";
import "./header.css";
import Navbar from "../Navbar/navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.headerData;
  }
  render() {
    return (
      <div className="header-dark">
        <Navbar />
        <div className="container hero">
          <div className="row">
            <div className="col-md-8 offset-md-2 mx-auto">
              <h1
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontFamily: "Bitter, serif",
                }}
              >
                Hi, I'm{" "}
                <span style={{ color: "rgb(4,183,194)" }}>
                  {this.state.name}
                </span>
              </h1>
              <h1
                className="mx-auto"
                style={{
                  marginTop: "0px",
                  marginBottom: "5px",
                  color: "#ffffff",
                }}
              >
                {this.state.tagLine}
              </h1>
              <p
                className="text-white"
                style={{
                  marginBottom: "5px",
                  fontFamily: "'Fira Code', monospace",
                  marginTop: "75px",
                }}
              >
                {this.state.intro}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
