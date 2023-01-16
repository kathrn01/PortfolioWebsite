import React from 'react';

export default function ProjectSlide(props) {
	const mediaDisplay = { display: (props.media === "") ? 'none' : 'flex'};
	const projectDisplay = { justifyContent: (props.media === "") ? 'center' : 'flex-start'};
	return (
		<article className={props.position}>
			<h2 className="project-name">{props.name}</h2>
			<div className="project" style={projectDisplay}>
				<div className="project-description">
					{props.description}
				</div>
				<div className="media-container" style={mediaDisplay}> 
					{props.media}
				</div>
			</div>
		</article>
	);
}