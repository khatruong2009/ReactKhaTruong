import React from "react"

function Footer() {
  return(
    <footer>
      <div className="footer">
        <div className="name">
          <a href="#home">
            <h3>
              Kha Truong
            </h3>
          </a>
        </div>

        <div className="footer-links">
          <a href="#aboutMe">About Me</a>
          <a href="#projects">Projects</a>
          <a
            href="https://drive.google.com/file/d/1cUIvCbbW6KqDGcDe8FKP7IgUjIrK8Eri/view?usp=sharing"
            target="_blank"
            >Resume</a
          >
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/khatruong2009"
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