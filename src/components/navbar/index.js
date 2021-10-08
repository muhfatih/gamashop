import React from 'react'
import NavHead from './NavHead';
import NavMenu from './NavMenu';

const Navbar = () => {
	return (
		<nav className="w-full flex-cc col">
			<NavHead />
			<NavMenu />
		</nav>
	)
}

export default Navbar
