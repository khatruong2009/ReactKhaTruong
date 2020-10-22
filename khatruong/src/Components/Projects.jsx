import React from "react";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="subheader">PROJECTS</h2>

      <div className="project-box">
        <div className="project-container">
          <div className="project-image">
            <a href="https://khatruong.com/" target="_blank">
              <img src="images/personalwebsite1.png" alt="personal website" />
            </a>
          </div>

          <div className="project-text">
            <p>
              This is my personal website. It has been developed from scratch
              using HTML and CSS. This website gets continually updated as I
              learn new skills and look to improve the website.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="project-container">
          <div className="project-text2">
            <p>
              This Rock, Paper, Scissors game was coded as part of the project
              for The Odin Project Web Development Track using vanilla
              Javascript. There was no video tutorial for the project nor was
              there any code to copy. This project was made using only the
              instructions provided and Google.
            </p>
          </div>

          <div className="project-image2">
            <a
              href="https://khatruong2009.github.io/RockPaperScissors2/"
              target="_blank"
            >
              <img src="images/rps1.png" alt="Rock paper scissors" />
            </a>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="project-container">
          <div className="project-image">
            <a
              href="https://benhustles.com/"
              target="_blank"
            >
              <img
                src="images/bentruongwebsite1.png"
                alt="Ben Truong website"
              />
            </a>
          </div>

          <div className="project-text">
            <p>
              This is a website that I made for my Brother using HTML and CSS.
              While he did not end up using it for his final website, it was
              good practice to make the website for him.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="project-container">
          <div className="project-text2">
            <p>
              This ETCH-A-SKETCH program was also created as part of The Odin
              Project Web Development Track using vanilla Javascript. Similar to
              the Rock, Paper, Scissors game, there was no video tutorial for
              it. This project was made using only the instructions provided and
              Google.
            </p>
          </div>

          <div className="project-image2">
            <a
              href="https://khatruong2009.github.io/ETCH-A-SKETCH/"
              target="_blank"
            >
              <img src="images/SKETCH.jpg" alt="ETCH-A-SKETCH" />
            </a>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="project-container">
          <div className="project-image">
            <a
              href="https://khatruong2009.github.io/KedusKinfe2/"
              target="_blank"
            >
              <img src="images/KK.jpg" alt="Kedus Kinfe website" />
            </a>
          </div>

          <div className="project-text">
            <p>
              This is the first web page that I created using HTML and CSS. This
              website was made purely to test out my HTML and CSS but it quickly
              became a multi-page website that I made for fun. This website is
              modeled after the
              <a href="https://davidbeckham.com/" target="blank"
                >David Beckham website</a
              >.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="project-container">
          <div className="project-text2">
            <p>
              This is an example website that I made to practice using Boostrap.
              It shows a service for sale with sections including features and
              pricing.
            </p>
          </div>

          <div className="project-image2">
            <a
              href="https://khatruong2009.github.io/NegusKinfe/"
              target="_blank"
            >
              <img src="images/negus-project.png" alt="Negus" />
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects;