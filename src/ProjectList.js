import React from "react";
import projectData from "./project-data.js";
import ga from "./ga";

function ProjectList() {
  ga.pageview("/projects");
  const projects = projectData.map(project => (
    <Project
      title={project.title}
      short={project.short}
      tags={project.tags}
      slug={project.slug}
      key={project.title}
    />
  ));
  return (
    <div>
      <h2>Projects</h2>
      <hr />
      {projects}
    </div>
  );
}

function Project(props) {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <a href={`/projects/${props.slug}`}>
                    <h5 className="card-title">{props.title}</h5>
                  </a>
                  <p className="card-text">{props.short}</p>
                </div>
                <div className="col-md-3">
                  {props.tags.map(tag => (
                    <span
                      key={tag}
                      className="badge badge-pill badge-primary mr-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
