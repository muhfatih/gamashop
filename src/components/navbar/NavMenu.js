import React from 'react'

const NavMenu = () => {
	return (
		<div className="w-full h-14 bg-gray-100" style={{boxShadow: 'inset 0px 8px 4px -8px rgba(0, 0, 0, 0.2), inset 0px -8px 4px -8px rgba(0, 0, 0, 0.2)'}}>
			<div className="container px-32 flex-sc h-full">
				<p className="font-semibold text-lg whitespace-nowrap">ALL CATEGORIES</p>
				<div className="h-1/2 w-0.5 mx-8 bg-gray-400"></div>
				<div className="w-full flex-sc gap-8">
					{['Trending', 'New Arrival', 'Book', 'Attribute', 'Living', 'Electronic', 'F&B', 'Housing', 'Service'].map((item, i) => (
						<div className="" key={i}>{item}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default NavMenu
