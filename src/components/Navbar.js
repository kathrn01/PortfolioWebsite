import React from 'react'
import logo from '../assets/site-logo.png'

export default function Navbar() {
	return (
		<nav>
			<a href="https://kathrn01.github.io/PortfolioWebsite/"><img className="site-logo" src={logo} /> </a>
			<div className="nav-links">
				<a className="nav-link" href="#projects">projects</a>
				<a className="nav-link" href="#about-me">about</a>
			</div>
		</nav>
	)
}