import React from "react";
import "./App.css";
import Header from "../Header/Header";
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
      </div>
    );
  }
}

export default App;
