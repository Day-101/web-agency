import React from 'react';
import NavWorks from 'components/NavWorks';
import {ThemeContext} from 'context/ThemeContext';
import {useContext} from 'react';

const Works = () => {
  const {theme} = useContext(ThemeContext);

  return (
		<main className={theme ? 'contenu light' : 'contenu dark'}>
			<div className="container">
        <h2 className="layout h2-mb">Au fil des années, nous avons pu accompagner les meilleurs.</h2>
        <p className="layout">Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        <NavWorks />
      </div>
    </main>
  )
}

export default Works;
