import React from 'react';
import { useParams } from 'react-router-dom';
const WorkDetail = (props) => {

	const { slug } = useParams();
	const id = slug.match(/\d+$/g)[0];
	const project = require('data/projects.json')[id];

	return (
		<div>
			<h1>{project.title}</h1>
			<p>{project.content}</p>
			<p>{project.client}</p>
		</div>
	)
}
export default WorkDetail;