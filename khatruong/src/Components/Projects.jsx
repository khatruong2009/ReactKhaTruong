import React from "react";
import ProjectRight from "./ProjectRight";
import ProjectLeft from "./ProjectLeft";

var kha = require("../assets/images/personalwebsite1.png");
var rps = require("../assets/images/rps1.png");
var ben1 = require("../assets/images/bentruongwebsite1.png");
var sketch = require("../assets/images/SKETCH.jpg");
var kedus = require("../assets/images/KK.jpg");
var negus = require("../assets/images/negus-project.png");

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="subheader">PROJECTS</h2>
      <p className="below-subheader">The code for all of these projects can be found on my <a href="https://github.com/khatruong2009" target="_blank">GitHub.</a></p>

      <div className="project-box">
        <ProjectLeft
          name="Kha Truong Website"
          link="https://khatruong.com/"
          image={kha}
          description="This is my personal website. It has been developed from scratch
          using HTML and CSS. This website gets continually updated as I
          learn new skills and look to improve the website."
        />

        <ProjectRight 
          name="rock paper scissors"
          link="https://khatruong2009.github.io/RockPaperScissors2/"
          image={rps}
          description="This Rock, Paper, Scissors game was coded as part of the project
          for The Odin Project Web Development Track using vanilla
          Javascript. There was no video tutorial for the project nor was
          there any code to copy. This project was made using only the
          instructions provided and Google."
        />

        <ProjectLeft
          name="Ben website"
          link="https://benhustles.com/"
          image={ben1}
          description="This is a website that I made for my Brother using HTML and CSS.
          While he did not end up using it for his final website, it was
          good practice to make the website for him."
        />

        <ProjectRight 
          name="ETCH-A-SKETCH"
          link="https://khatruong2009.github.io/ETCH-A-SKETCH/"
          image={sketch}
          description="This ETCH-A-SKETCH program was also created as part of The Odin
          Project Web Development Track using vanilla Javascript. Similar to
          the Rock, Paper, Scissors game, there was no video tutorial for
          it. This project was made using only the instructions provided and
          Google."
        />

        <ProjectLeft 
          name="Kedus Kinfe website"
          link="https://khatruong2009.github.io/KedusKinfe2/"
          image={kedus}
          description="This is the first web page that I created using HTML and CSS. This
          website was made purely to test out my HTML and CSS but it quickly
          became a multi-page website that I made for fun. This website is
          modeled after David Beckham's website."
        />

        <ProjectRight 
          name="negus project"
          link="https://khatruong2009.github.io/NegusKinfe/"
          image={negus}
          description="This is an example website that I made to practice using Boostrap.
          It shows a service for sale with sections including features and
          pricing."
        />

      </div>
    </div>
  )
}

export default Projects;