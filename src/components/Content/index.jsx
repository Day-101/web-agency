import React from 'react';
import BtnToggle from 'components/BtnToggle'

const Content = () => {
  // return le state de ThemeContext qu'on a passé en props. Retourne la value de 'ThemeContext.Provider' de ThemeContext.jsx qu'on utilise en attribu destructuring

  return (
    <div>
      <BtnToggle />
      <h1>Hey !</h1>
    </div>
  )
}

export default Content;