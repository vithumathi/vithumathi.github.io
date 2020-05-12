import React from "react";
import "./header-dark.css";
import "./header.css";
import Navbar from "../Navbar/navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.headerData,
    };
  }

  render() {
    return (
      // <div>
      //   <div className="d-xl-flex justify-content-xl-center jumbotron vertical-center">
      //     <div className="text-center container banner-text">
      //       <h1 className="display-3">
      //         Hi, I&#39;m
      //         <span style={{ color: "#9CD7D5" }}> {this.state.data.name}</span>
      //       </h1>
      //       <h2 className="display-4">{this.state.data.tagLine}</h2>
      //       {console.log(this.state.networks)}
      //       <ul className="social"> {this.state.networks}</ul>
      //       <p className="scrolldown">
      //         <a className="js-scroll-trigger" href="#about">
      //           <i
      //             className="fa fa-angle-double-down"
      //             style={{ color: "#ffffff", fontSize: "2em", padding: "30px" }}
      //           ></i>
      //         </a>
      //       </p>
      //     </div>
      //   </div>
      // </div>
      <header>
        <Navbar />
        <div className="landing-text">
          <h1>
            Hi, I&#39;m{" "}
            <span style={{ color: "#9CD7D5" }}> {this.state.data.name}</span>
          </h1>
          <h6>{this.state.data.tagLine}</h6>
        </div>
      </header>
    );
  }
}

export default Header;
