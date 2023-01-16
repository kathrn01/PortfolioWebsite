import React from 'react';
import logo from '../site-logo.png';

export default function AboutMe(){
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
				<section className="summary">
				<h2>Long story short</h2>
				<h3>
					My name is Katharine. I enjoy learning about software development, and have recently begun learning more about web development. I like working with a team and learning from/with others, but have done quite a bit of learning on my own and feel confident in my ability to pick up new skills quickly. 
				</h3>
				</section>

				<section className="experience">
				<h2>Experience</h2>
				<h3>
				My professional experience consists of a freelance iOS project I completed solo in early 2022. Other software development experience consists of a group project (see Android Mobile App above in projects) as part of a university software engineering course.
				While my focus recently has been software-related projects, I also have quite a bit of experience in public-facing/customer service roles and consider myself to be a very good communicator.
				</h3>
				</section>

				<section className="history">
				<h2>A little bit of history</h2>
				<h3>I was introduced to web design along with HTML and CSS when I was quite young. I became quite involved and soon felt comfortable using those tools to design my own web pages. Later on in university, my past experiences lead me to try an introductory computer science course, and ultimately begin pursuing a degree.
				</h3></section>

				<section className="details">
				<h2>Extra details</h2>
				<h3> My interests outside of programming include photography, writing, all things design, and collecting vintage/antiques like books and furniture.
				</h3>
				</section>
			</div>
			</div>
		</section>
	);
}
