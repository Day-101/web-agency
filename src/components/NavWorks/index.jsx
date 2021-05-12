import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const NavWorks = () => {

  const slugify = (str) => {
    str = str.toLowerCase().replace(/[^\w+]+/g, "-");
    return str;
  }

  const projects = require('data/projects.json');
  console.log('coucou');
  return (
  <nav>
    <ul>
      {projects.map((project) =>
        <li key={uuid()}>
          <Link to={`/works/${slugify(project.title)}`}>{project.title}</Link>
        </li>
      )}
    </ul>
  </nav>
  )
}

export default NavWorks;
