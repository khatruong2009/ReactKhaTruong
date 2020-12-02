import React from "react";

function Header () {
  return (
    <div id="home">
      <div className="pic-container">
      <a href="https://www.khatruong.com"
        ><img id="logo" src={require("../assets/images/kt.png")} alt="Kha Truong logo"
      /></a>
    </div>

    {/* <!--intro text--> */}
    <div className="first-text-box">
      <div className="first-text">
        <p className="intro-text" id="intro-text">
          Hi! My name is Kha Truong and I am currently seeking
        </p>
        <p className="intro-text" id="intro-text2">
          a <a className="bold">Junior Front End Web Developer</a> position.
        </p>
      </div>
    </div>

    {/* <!--link menu--> */}
    <div className="links-container">
      <div className="links">
        <a href="#aboutMe">About Me</a>
        <a href="#projects">Projects</a>
        <a
          href="#contact"
          >Resume</a
        >
        <a href="#contact">Contact</a>
        <a
          href="#contact"
          >GitHub</a>
      </div>
    </div>
  </div> 
  )
}

export default Header;