import React, {useState, useEffect} from 'react';
// import { uuid } from 'uuidv4'; 

const Plus = () => {
  const [data, setData] = useState('') // data est une variable, setData est la fonction pour modifier data
  const  {uuid}  = require('uuidv4'); // //npm install uuidv4   https://www.npmjs.com/package/uuidv4 - pensez à le déclarer pour l'utiliser
  // const monFetch = () => { // 1ère façon d'écrire un fetch
  //   fetch("https://geo.api.gouv.fr/departements")
  //   .then(response => response.json()) // récupère le résultat de l'url au ft json
  //   .then(data => { // on attribut response.json() à data qu'on déclare ici
  //   setData(data)
  //   })
  // }

  const monFetch = async () => { // autre façon d'écrire un fetch
    const response = await fetch("https://geo.api.gouv.fr/departements") // response en attente du fetch
    const data = await response.json() // data en attente de response au format json, attention avec les () car c'est une méthode
    setData(data) // on exécute la fonction setData() pour modifier data(celui de la ligne 5, pas le même que ligne 17)
  }
  

  return (
    <>
      <button onClick={monFetch}>push me</button>
      <ul>

      {data && data.map(departement => (
        <li key={uuid()}>{departement.nom}</li>
        )) }
      </ul>
    </>
  )
  
}

export default Plus;


