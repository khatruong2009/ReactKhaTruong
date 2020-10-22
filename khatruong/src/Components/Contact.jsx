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
    </div>
  )
}

export default Contact;