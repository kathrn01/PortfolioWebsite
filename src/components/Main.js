import React from 'react';
import Navbar from './Navbar';

export default function Main(){
	return (
		<section id="homepage">
			<Navbar />
			<div className="homepage container">
			<div className="homepage-text">
				<h2>I'm Katharine. Welcome to my portfolio. <br /> I enjoy learning about software development.</h2>
				<h3>On this website you'll find some information about myself and my projects.<br/> The repositories/source code for everything used to build this website and my projects can be found on my GitHub page, <a href="https://github.com/kathrn01/PortfolioWebsite">here</a>. </h3> 
			</div>
			</div>
		</section>
	);
}
