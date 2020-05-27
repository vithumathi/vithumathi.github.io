import React from "react";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      networks: props.headerData.social.map((network) => {
        return (
          <li key={network.name}>
            <a href={network.url} className="icon-link">
              <i className={network.className}></i>
            </a>
          </li>
        );
      }),
    };
  }
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div class="profile-img">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHF9ScRb9KzqQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=Gsn0iK8w-gsPy74i_5rhNAxI14b19Hwgi9314Bi3UEY"
              alt="Profile picture"
            />
          </div>
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Myself</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="social-media">
              <ul className="nav-list">{this.state.networks}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
