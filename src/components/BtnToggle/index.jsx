import React, { useContext } from 'react';
import {ThemeContext} from 'context/ThemeContext'

const BtnToggle = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <img src={`/images/${theme ? 'sun-solid' : 'moon-solid'}.svg`} alt="Dark mode"  onClick={toggleTheme} className={theme ? 'btn-toggle goDark' : 'btn-toggle goLight'} />
  );
}


export default BtnToggle;
