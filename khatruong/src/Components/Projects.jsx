import React from "react";
import ProjectRight from "./ProjectRight";
import ProjectLeft from "./ProjectLeft";

const kha = require("../assets/images/personalwebsite1.png");
const rps = require("../assets/images/rps1.png");
const ben1 = require("../assets/images/bentruongwebsite1.png");
const sketch = require("../assets/images/SKETCH.jpg");
const kedus = require("../assets/images/KK.jpg");
const negus = require("../assets/images/negus-project.png");
const finance = require("../assets/images/financetool.png");
const tip = require("../assets/images/react-native.png");
const halalVote= require("../assets/images/halalvote.PNG");

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="subheader">PROJECTS</h2>
      <p className="below-subheader">The code for all of these projects can be found on my <a href="https://github.com/khatruong2009" target="_blank">GitHub.</a> Click on thumbnails to see projects.</p>

      <div className="project-box">

        <ProjectRight
          name="Kha Truong Website"
          link="https://khatruong.com/"
          image={kha}
          description="This is my personal website. It has been developed from scratch
          using React, rendering HTML and CSS. This website gets continually updated as I
          learn new skills and look to improve the website."
        />

        <ProjectLeft
          name="Halal Vote"
          link="https://halalvote.com"
          image={halalVote}
          description="This project is a social media app built on React. Halalvote is an app where users get to vote on whether different topics are Halal or Haram. This is a team-based project where I work with two other software engineers. The app is built on React with a MySQL database that is hosted on AWS."
        />

        <ProjectRight
          name="Finance Tools Website"
          link="https://finance-tools.s3.amazonaws.com/index.html"
          image={finance}
          description="This is a multi-page website hosted on AWS S3 that contains personal finance calculators built using React with React Router. The project includes JavaScript, React, React-Router, HTML, CSS and API requests."
        />

        <ProjectLeft
          name="React Native Tip App"
          link="https://github.com/khatruong2009/ReactNativeTip"
          image={tip}
          description="This is a tip calculator app that was made using React Native. It uses similar conceps to those learned by making the Financial Tools React App. "
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