import React from 'react';

export default function ProjectSlide(props) {
	return (
		<article className={props.position}>
			<h2 className="project-name">{props.name}</h2>
			<div className="project">
				{props.description}
				<div className="media-container"> 
					{props.media}
				</div>
			</div>
		</article>
	);
}