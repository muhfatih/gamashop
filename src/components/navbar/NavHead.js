import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingBagLine, RiNotification3Line, RiFileListLine } from 'react-icons/ri';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const NavHead = () => {
	return (
		<div className="flex-bc container h-24">
			<Link to='/'><img src="/img/logo.svg" alt="logo" className="" /></Link>
			<SearchBar />
			<ButtonGroup />
		</div>
	)
}

const SearchBar = () => {
	return (
		<div className="h-10 flex-cc">
			<input type="text" className="bg-white h-full w-96 border border-gray-400 px-4 border-r-0" placeholder="Search..." />
			<button className="gradient-main h-full w-16 flex-cc"><FaSearch className="text-white text-xl" /></button>
		</div>
	)
}

const ButtonGroup = () => {
	return (
		<div className="flex-cc">
			<div className="flex-cc gap-2 mr-16">
				<RiShoppingBagLine className="text-3xl" />
				<RiNotification3Line className="text-3xl" />
				<RiFileListLine className="text-3xl" />
			</div>

			<AuthArea />
		</div>
	)
}

const AuthArea = () => {
	return (
		<Link to="/dashboard" className="flex-cc">
			<div className="h-10 w-10 rounded-full flex-cc overflow-hidden">
				{/* if ada image show image user */}
				<FaUserCircle className="full text-gray-400" />
			</div>
			<p className="font-semibold ml-3">Hi, Rizky</p>
		</Link>
	)
}

export default NavHead
