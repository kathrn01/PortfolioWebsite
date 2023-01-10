import React from 'react'
import logo from '../site-logo.png'

export default function Navbar() {
	return (
		<nav>
			<img className="site-logo" src={logo} />
			<div className="nav-links">
				<a href="#projects">projects</a>
				<a href="#about">about</a>
			</div>
		</nav>
	)
}
