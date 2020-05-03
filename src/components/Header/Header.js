import React from "react";
import "./header-dark.css";
import "./header.css";
import Navbar from "../Navbar/navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.headerData, hover: false };
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    let linkStyle;
    if (this.state.hover) {
      linkStyle = {
        color: "#ffffff",
        paddingRight: "10px",
        paddingLeft: "10px",
        fontSize: "32px",
        cursor: "pointer",
      };
    } else {
      linkStyle = {
        color: "#ffffff",
        paddingRight: "10px",
        paddingLeft: "10px",
        fontSize: "32px",
      };
    }
    return (
      <div className="header-dark" style={{ height: "100vh" }}>
        <Navbar />
        <div className="container hero">
          <div className="row">
            <div className="col-md-8 offset-md-2 mx-auto text-right">
              <h1
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontFamily: "Bitter, serif",
                }}
              >
                Hi, I'm{" "}
                <span style={{ color: "rgb(4,183,194)" }}>
                  {this.state.data.name}
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
                {this.state.data.tagLine}
              </h1>
              <p
                className="text-white text-left"
                style={{
                  marginBottom: "5px",
                  fontFamily: "'Fira Code', monospace",
                  marginTop: "75px",
                }}
              >
                {this.state.data.intro}
              </p>
              <div
                className="d-xl-flex justify-content-xl-center"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <a href={this.state.data.githubLink} target="_blank">
                  <i
                    className="fa fa-github"
                    style={{
                      color: "#ffffff",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      fontSize: "32px",
                    }}
                  ></i>
                </a>
                <a href={this.state.data.linkedinLink} target="_blank">
                  <i
                    className="fa fa-linkedin-square"
                    style={{
                      color: "#ffffff",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      fontSize: "32px",
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
