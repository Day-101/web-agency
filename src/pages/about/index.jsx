import {ThemeContext} from 'context/ThemeContext';
import {useContext} from 'react';

const About = () => {
	const {theme} = useContext(ThemeContext);

	return (
		<main className={theme ? 'contenu light' : 'contenu dark'}>
			<div className="container layout">
				<h2>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h2>
				<p>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
				Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
				</p>
			</div>
		</main>
	)
};
export default About;