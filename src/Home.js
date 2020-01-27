import React from "react";
import ga from "./ga";

function Home() {
  ga.pageview("/");
  return (
    <div className="home">
      <header className="masthead text-center">
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <h3 className="mb-3">
              Build interesting projects to help you be a better engineer
            </h3>
            <h6>
              <a href="/projects">Browse Projects</a>
            </h6>
          </div>
        </div>
      </header>
      <div className="row mb-3">
        <h4 className="col-12 px-0">Purpose</h4>
        <p>
          Experienced engineers working in the industry are limited in the set
          of technologies they get to work with as well as and projects they get
          to work on.{" "}
        </p>
        <p>
          As a result, many enjoy building projects on the side, in an effort
          to:
        </p>
        <ul className="mb-3">
          <li>learn new technologies in a fast-moving industry</li>
          <li>build personal portfolio</li>
          <li>develop a businesses</li>
        </ul>
        <p>
          CodingProjects.io serves to be a community for experienced engineers
          by providing ideas for projects to build and help them grow in areas
          they may be new to.
        </p>
      </div>
      <div className="row mb-3">
        <h4 className="col-12 px-0">How it works</h4>
        <p>
          It's a dead-simple list of coding projects to build. Each project
          comes with:
        </p>
        <ul className="mb-3">
          <li>a description of what you'll be building</li>
          <li>a loose/optional checklist of acceptance criteria</li>
          <li>reference resources to get you going</li>
        </ul>
        <p>
          It is assumed that you have programming experience and are somewhat
          used to having to pick up something new and figure it out. Don't
          expect tutorials with working copy & paste samples. In our experience,
          there's no subsitute for learning than building and troubleshooting
          code yourself.
        </p>
        <p>
          The aim is to give you an opportunity to learn something on your own,
          while providing some criterion/specs, so that there are less details
          to think about. We are building these projects ourselves and are happy
          to help (to the best of our capacity).
        </p>
      </div>
      <div className="row mb-3">
        <h4 className="col-12 px-0 mb-3">Types of Projects</h4>
        <h5 className="col-12 px-0 mb-3">Component Projects</h5>
        <p>
          Component projects are sort of bite-sized proejcts that can be re-used
          in larger, compounding projects. Some examples of these are:
        </p>
        <ul className="mb-3">
          <li>an API for social media posts and comments</li>
          <li>a UI form create and view posts</li>
          <li>
            a serverless API endpoint to handle uploading a profile picture
          </li>
          <li>
            an authentication service to handle creating and logging in users
          </li>
          <li>a UI form to log in a user and allow them to upload a photo</li>
        </ul>
        <h5 className="col-12 px-0 mb-3">Compound Projects</h5>
        <p>
          Compound projects build on the Components to create more rich
          applications and software. Using the Components listed above, an
          example could be social networking app where users can log in, make
          posts, and comment on posts
        </p>
      </div>
    </div>
  );
}

export default Home;
