import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from 'context/ThemeContext';

const NavWorks = () => {
  const {theme} = useContext(ThemeContext)

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
          <h3>{project.client}</h3>
          <p>{project.title}</p>
          <Link className="btn-mini" to={`/works/${slugify(project.title, index)}`}>Consulter</Link>
        </li>
      )
    } else {
      return (
        <li key={index}>
          <h3><Link to={`/works/${slugify(project.title, index)}`}>{project.client}</Link></h3>
        </li>
      )
    }
  }

  return (
    <div className={theme ? 'contenu light' : 'contenu dark'}>
      <div className="full-width">
        <nav className="container navWorks">
          <button onClick={() => setCardMode(!cardMode)}>Wahou !</button>
          <ul>
            {projects.map((project, index) => loadContent(project, index))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavWorks;
