import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery';
import Project from './Project';
import Contact from './Contact';
import projectsData from '../data/projects.json';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <ProjectGallery projects={projectsData} />
          </Route>
          <Route path="/projects/:projectId">
            <Project projects={projectsData} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
