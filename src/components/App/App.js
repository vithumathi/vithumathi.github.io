import React from "react";
import "./App.css";
import Header from "../Header/Header";
import AboutMe from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import profileData from "../../data/portfolioData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerData: profileData.header };
  }
  render() {
    return (
      <div>
        <Header headerData={this.state.headerData} />
        <AboutMe headerData={this.state.headerData} />
        <Experience />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
