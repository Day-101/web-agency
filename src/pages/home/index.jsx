import {ThemeContext} from 'context/ThemeContext';
import {useContext} from 'react';

const Home = () => {
	const {theme} = useContext(ThemeContext);

	return (
		<div className={theme ? 'flex-context contenu light' : ' flex-context contenu dark'}>
			<div className="full-width">
				<div className="main container">
					<h2>Confiez vos rêves à des experts du Web</h2>
					<p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
					Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
					</p>
				</div>
			</div>
		</div>
	)
};
export default Home;