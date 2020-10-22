import React from "react";

function Header () {
  return (
    <div>
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
          href="https://docs.google.com/document/d/1e9Kg1A9TfgcJvcq3RVLETOjPjGwSp9NX5OryN-QxyC8/edit?usp=sharing"
          target="_blank"
          >Resume</a
        >
        <a href="#contact">Contact</a>
        <a
          href="https://github.com/khatruong2009"
          target="_blank"
          >GitHub</a>
      </div>
    </div>
  </div> 
  )
}

export default Header;