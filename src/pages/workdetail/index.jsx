import React from 'react';
import { useParams } from 'react-router-dom';
const WorkDetail = (props) => {

	const { slug } = useParams();
	const id = slug.match(/\d+$/g)[0];
	const project = require('data/projects.json')[id];

	return (
		// <div className={theme ? 'flex-context contenu light' : ' flex-context contenu dark'}>
		// 	<div className="full-width">
				<div className="main container">
					<h2>{project.title}</h2>
					<h3>{project.client}</h3>
					<p>{project.content}</p>
				</div>
		// 	</div>
		// </div>
	)
}
export default WorkDetail;