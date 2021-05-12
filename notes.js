localStorage.setItem(TheKey, JSON.stringify(dataToSaveToStr));
document.location.reload();

//////////////////////////////////////////////////////

import { uuid } from 'uuidv4';

{allWorks.map(work => {
  return <li key={uuid}>{work.name}</li>
})}

//////////////////////////////////////////////////////

const array = [{
  name: "exercices",
  slug: "exercices",
  description: [
    "Video Game informations",
    "The notepad",
    "React Router"
  ]
},{
  name: "case study",
  slug: "case-study",
  description: [
    "Nike, the new website",
    "Paypal, how their data are stored"
  ]
},{
  name: "concret-case",
  slug: "concret-case",
  description: [
    "My grandparent bridge club website",
    "My friend bakery"
  ]
}];

//////////////////////////////////////////////////////

