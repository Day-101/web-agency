import {ThemeContext} from 'context/ThemeContext';
import {useContext} from 'react';

const Home = () => {
	const {theme} = useContext(ThemeContext);

	return (
		<div className={theme ? 'main contenu light' : 'main contenu dark'}>
			<h1>Confiez vos rêves à des experts du Web</h1>
			<p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
			Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
			</p>
		</div>
	)
};
export default Home;