import React, { useContext } from 'react';
import {ThemeContext} from 'context/ThemeContext';
import { Link } from 'react-router-dom';
import BtnToggle from 'components/BtnToggle';

const Navbar = () => {

  const {theme} = useContext(ThemeContext)

  return (
		<div className={theme ? 'contenu light' : 'contenu dark'}>
      <nav className="container navbar">
        <Link to="/">
          <img id='brand' src={`/images/${theme ? 'pear' : 'pear-neg'}.svg`} alt="" />
        </Link>
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
    </div>
  )
}

export default Navbar;
