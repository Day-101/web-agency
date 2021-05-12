import React, {createContext, useState} from 'react';

// création du context
export const ThemeContext = createContext();

// composant qui va apporter ThemeContext. (props) renvoi à nos composants enfants qu'on englobera
const ThemeContextProvider = (props) => {
  
  let darkMode = localStorage.getItem('darkMode')
  if (darkMode === "true" || darkMode === "false") {
    darkMode = JSON.parse(darkMode);
  } else {
    darkMode = true;
  }

  const [theme, setTheme] = useState(darkMode); //on peut y déclarer un str ou un objet (mais faudra l'itérer ensuite)

  const toggleTheme = () => {
    localStorage.setItem('darkMode', JSON.stringify(!theme));
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
// maintenant on peut l'utiliser où on veut
export default ThemeContextProvider;