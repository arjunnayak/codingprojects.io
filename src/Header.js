import React from 'react';

function Header() {
  return (
    <div className="navbar navbar-light fixed-top navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-cube"></i>
          CodingProjects.io
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;