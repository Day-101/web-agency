import { useContext } from 'react';
import {ThemeContext} from 'context/ThemeContext';
import { useParams } from 'react-router-dom';

const WorkDetail = (props) => {
  const {theme} = useContext(ThemeContext)

	const { slug } = useParams();
	const id = slug.match(/\d+$/g)[0];
	const project = require('data/projects.json')[id];

	return (
    <main className={theme ? 'contenu light' : 'contenu dark'}>
      <div className="container layout">
				<h3>{project.client}</h3>
				<h2>{project.title}</h2>
				<p>{project.content}</p>
			</div>
		</main>
	)
}
export default WorkDetail;