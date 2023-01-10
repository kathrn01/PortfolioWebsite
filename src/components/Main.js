import React from 'react';
import Navbar from './Navbar';

export default function Main(){
	return (
		<section id="homepage">
			<Navbar />
			<div className="homepage container">
			<div className="homepage-text">
				<h1> Hi, my name is Katharine. </h1>
				<h1>I enjoy learning about software development.</h1>
				<h1>Welcome to my portfolio.</h1>
				<h3>On this website you'll find some information about myself and my projects.
				   You can find the repositories for everything used to build this website and my projects here. </h3> 
			</div>
			</div>
		</section>
	);
}
