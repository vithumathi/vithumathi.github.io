import React from "react";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-heading">
            <h1>Recent Projects</h1>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="card-body">
                  <h2 class="card-title">Blockchain</h2>
                  <p class="card-text">
                    POC - Decentralized Ethereum Health data Application built
                    with Web3, React, ES6, IPFS, Ethereuem & Solidity
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">Ethereum</li>
                    <li className="list-inline-item">Solidity</li>
                    <li className="list-inline-item">Ganache</li>
                    <li className="list-inline-item">IPFS</li>
                    <li className="list-inline-item">React</li>
                    <li className="list-inline-item">Web3.js</li>
                  </ul>
                  <a
                    href="https://github.com/vithumathi/app-bhc"
                    className="icon-link"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="card-body">
                  <h2 class="card-title">Portfolio</h2>
                  <p class="card-text">
                    First iteration of my personal website built using React.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">React</li>
                  </ul>
                  <a
                    href="https://github.com/vithumathi/app-bhc"
                    className="icon-link"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
