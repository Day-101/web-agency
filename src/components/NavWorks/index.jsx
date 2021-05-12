import React from 'react';
import { Link } from 'react-router-dom';

const NavWorks = () => {

  const slugify = (str, index) => {
    str = str.toLowerCase().replace(/[^\w+]+/g, "-");
    return `${str}_${index}`;
  }

  const projects = require('data/projects.json');
  const [cardMode, setCardMode] = React.useState(false);

  const loadContent = (project, index) => {
    if (cardMode) {
      return (
        <li key={index} className="card">
          <p>{project.client}</p>
          <p>{project.title}</p>
          <Link to={`/works/${slugify(project.title, index)}`}>Read more</Link>
        </li>
      )
    } else {
      return (
        <li key={index}>
          <Link to={`/works/${slugify(project.title, index)}`}>{project.client}</Link>
        </li>
      )
    }
  }



  return (
  <nav>
    <button onClick={() => setCardMode(!cardMode)}>Change mode</button>

    <ul>
      {projects.map((project, index) =>
        loadContent(project, index)
      )}
    </ul>
    
  </nav>
  )
}

export default NavWorks;
