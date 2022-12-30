import React, { useState } from 'react';
import ProjectSlide from "./ProjectSlide";
import projectsData from "../myProjectsData";

export default function Projects() {
	const [index, setIndex] = useState(0);
	let len = projectsData.length;
	const projectElements = projectsData.map((project, projectIndex) => {
		let position = 'nextSlide';
		if(projectIndex === index) {
			position = 'activeSlide';
		}
		if(projectIndex === index - 1 || (index === 0 && projectIndex === len-1)) {
			position = 'lastSlide';
		}
		return <ProjectSlide 
			name={project.name} 
			media={project.media} 
			position={position} 
			description={project.description} 
		/>
	})

	 

	return (
		<section id="projects">
			<div><h1 className="page-title">Projects</h1> </div>
			<div className="slideshow-container">
				{projectElements} 
			<button className="prev" onClick={() => setIndex(index == 0 ? len-1 : index - 1)}>&lt;</button>
			<button className="next" onClick={() => setIndex((index + 1) % len)}>&gt;</button>
			</div>
		</section>
	);
}
