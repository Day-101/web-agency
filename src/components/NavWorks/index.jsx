import { useContext, useState } from 'react';
import {ThemeContext} from 'context/ThemeContext';
import { Link } from 'react-router-dom';

const NavWorks = () => {
  const {theme} = useContext(ThemeContext)

  const slugify = (str, index) => {
    str = str.toLowerCase().replace(/[^\w+]+/g, "-");
    return `${str}_${index}`;
  }

  const projects = require('data/projects.json');
  const [cardMode, setCardMode] = useState(false);

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
    <main className={theme ? 'contenu dark' : 'contenu light'}>
      <nav className="container navWorks">
        <button onClick={() => setCardMode(!cardMode)}>Wahou !</button>
        <ul className={cardMode ? 'card-ON' : 'card-OFF'}>
          {projects.map((project, index) => loadContent(project, index))}
        </ul>
      </nav>
    </main>
  )
}

export default NavWorks;
