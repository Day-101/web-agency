import React from 'react';
import { Link } from 'react-router-dom';
import allWorks from 'data/allWorks'

const NavWorks = () => {
  return (
  <nav>
    <ul>
      {allWorks.map((work, index) =>
        <li key={index}>
          <Link to={`/works/${work.slug}`}>{work.name}</Link>
        </li>
      )}
    </ul>
  </nav>
  )
}

export default NavWorks;
