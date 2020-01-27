import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/projects">
            <ProjectList />
          </Route>
          <Route path="/projects/:slug">
            <ProjectDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
