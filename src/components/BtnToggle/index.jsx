import React, { useContext } from 'react';
import {ThemeContext} from 'context/ThemeContext'

const BtnToggle = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <img src={`images/${theme ? 'moon-solid' : 'sun-solid'}.svg`} alt="Dark mode"  onClick={toggleTheme} className={theme ? 'btn-toggle goLight' : 'btn-toggle goDark'} />
  );
}


export default BtnToggle;