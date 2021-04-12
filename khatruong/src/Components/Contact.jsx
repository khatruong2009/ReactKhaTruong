import React from "react";

function Contact() {
  return(
    <div className="contact-box" id="contact">
      <h2 className="subheader">CONTACT</h2>

      <div className="email-box">
        <div className="contact-image">
          <a href="mailto:khatruong2009@gmail.com">
            <img src={require("../assets/images/bxs-envelope-open1.png")} alt="email" />
          </a>
        </div>

        <div className="contact-text">
          <p>Email:</p>
          <a href="mailto:khatruong2009@gmail.com">
            <p>khatruong2009@gmail.com</p>
          </a>
        </div>
      </div>

      <div className="phone-box">
        <div className="contact-image">
          <a href="tel:240-938-9371">
            <img src={require("../assets/images/bxs-phone1.png")} alt="phone" />
          </a>
        </div>

        <div className="contact-text">
          <p>Phone:</p>
          <a href="tel:240-938-9371">
            <p>240-938-9371</p>
          </a>
        </div>
      </div>

      <div className="email-box">
        <div className="contact-image">
          <a href="https://linkedin.com/in/kha-truong" target="_blank">
            <img src={require("../assets/images/linkedin.png")} alt="linkedin"></img>
          </a>
        </div>

        <div className="contact-text">
          <p>Linkedin:</p>
          <a href="https://linkedin.com/in/kha-truong" target="_blank">
            <p>https://linkedin.com/in/kha-truong</p>
          </a>
        </div>
      </div>

      <div className="email-box">
        <div className="contact-image">
          <a href="https://github.com/khatruong2009" target="_blank">
            <img src={require("../assets/images/github.jpg")} alt="github"></img>
          </a>
        </div>

        <div className="contact-text">
          <p>GitHub:</p>
          <a href="https://github.com/khatruong2009" target="_blank">
            <p>https://github.com/khatruong2009</p>
          </a>
        </div>
      </div>

      <div className="email-box">
        <div className="contact-image">
          <a href="https://drive.google.com/file/d/1cUIvCbbW6KqDGcDe8FKP7IgUjIrK8Eri/view?usp=sharing" target="_blank">
            <img src={require("../assets/images/resume.png")} alt="resume"></img>
          </a>
        </div>

        <div className="contact-text">
          <p>Resume:</p>
          <a href="https://drive.google.com/file/d/1bHcGpYWztT6-FDJ5FbdZbKz0NVA1VCr3/view?usp=sharing" target="_blank">
            <p>Google Drive Link</p>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact;