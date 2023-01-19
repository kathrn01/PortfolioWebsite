import React from 'react';
import logo from '../assets/site-logo.png';
import data from '../data/AboutMeData.js'

export default function AboutMe(){
	const elements = data.map(elem => {
		return (<section id={elem.section}>
				<h2>{elem.title}</h2>
				<h3>{elem.content}</h3> 
			</section>)
	})

	return (
		<section id="about-me">
			 <nav>
				<h1 className="page-title">About Me</h1> 
				<div>
					<a className="nav-text" href="#projects">projects &uarr;</a> 
					<a className="nav-text" href="#homepage">home</a>
				</div>
			</nav>
			<div className="about-me container">
			<div className="about-me-text">
				{elements}
			</div>
			</div>
		</section>
	);
}
