import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "./project-data.js";
import Markdown from "react-markdown";
import ga from "./ga";

function ProjectDetail() {
  let { slug } = useParams();
  let [tab, setTab] = useState("details");
  const project = projectData.find(p => p.slug === slug);
  ga.pageview(`/projects/${slug}`);

  return (
    <div>
      <h3>{project.title}</h3>
      {project.tags.map(tag => (
        <span key={tag} className="badge badge-pill badge-primary mr-1">
          {tag}
        </span>
      ))}
      <ul className="mt-3 mb-3 nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${tab === "details" ? "active" : ""}`}
            href="#details"
            onClick={() => setTab("details")}
          >
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${tab === "checklist" ? "active" : ""}`}
            href="#checklist"
            onClick={() => setTab("checklist")}
          >
            Checklist
          </a>
        </li>
      </ul>

      {tab === "details" ? (
        <Details markdown={project.details} />
      ) : (
        <Checklist markdown={project.checklist} />
      )}
    </div>
  );
}

function Details(props) {
  return <Markdown escapeHtml={false} source={props.markdown} />;
}

function Checklist(props) {
  return <Markdown escapeHtml={false} source={props.markdown} />;
}

export default ProjectDetail;
