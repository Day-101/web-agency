import React, { useContext } from 'react';
import {ThemeContext} from 'context/ThemeContext';
import { Link } from 'react-router-dom';
import BtnToggle from 'components/BtnToggle';

const Navbar = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <nav className={theme ? 'contenu light' : 'contenu dark'}>
      <h1>Web Agency</h1>
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
      <BtnToggle />
    </nav>
  )
}

export default Navbar;
