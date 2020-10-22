import React from "react";

function ProjectLeft(props) {
  return (
    <div>
      <div className="project-container">

          <div className="project-image">
            <a href={props.link} target="_blank">
              <img src={props.image} alt={props} />
            </a>
          </div>

          <div className="project-text">
            <p>
              {props.description}
            </p>
          </div>

          <div className="clearfix"></div>
          
        </div>
    </div>
  )
}

export default ProjectLeft;