import React from "react"

function Footer() {
  return(
    <footer>
      <div className="footer">
        <div className="name">
          <a href="https://www.khatruong.com">
            <h3>
              Kha Truong
            </h3>
          </a>
        </div>

        <div className="footer-links">
          <a href="#aboutMe">About Me</a>
          <a href="#projects">Projects</a>
          <a
            href="https://drive.google.com/file/d/1R9H4vVhiPkr7zMDmmEYPWe-v0Cz1CySh/view?usp=sharing"
            target="_blank"
            >Resume</a
          >
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/khatruong2009/RockPaperScissors2"
            target="_blank"
            >GitHub</a
          >
        </div>

        <div className="instagram">
          <a href="https://www.instagram.com/khatruong/" target="_blank"
            >Instagram</a
          >
        </div>
      </div>
    </footer>
  )
}

export default Footer;