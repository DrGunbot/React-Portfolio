import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectGallery} />
        <Route exact path="/projects/:id" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
