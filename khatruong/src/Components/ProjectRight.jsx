import React from "react";

function ProjectRight(props) {
  return (
    <div>
      <div className="project-container">

          <div className="project-text2">
            <p>
              {props.description}
            </p>
          </div>

          <div className="project-image2">
            <a href={props.link} target="_blank">
              <img src={props.image} alt={props} />
            </a>
          </div>

          <div className="clearfix"></div>
          
        </div>
    </div>
  )
}

export default ProjectRight;