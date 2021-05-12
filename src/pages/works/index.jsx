import React from 'react';
import NavWorks from 'components/NavWorks';
import {ThemeContext} from 'context/ThemeContext';
import {useContext} from 'react';

const Works = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'flex-context contenu light' : 'flex-context contenu dark'}>
			<div className="full-width">
				<div className="main container">
          <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
          <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
          <NavWorks />
        </div>
      </div>
    </div>
  )
}

export default Works;
