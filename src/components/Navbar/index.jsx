import React, { useContext } from 'react';
import {ThemeContext} from 'context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <nav className={theme ? 'contenu light' : 'contenu dark'}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
