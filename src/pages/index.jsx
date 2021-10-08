import React from 'react'
import TrendingProducts from '../components/home/TrendingProducts'
import MainLayout from './../components/_layouts/MainLayout';

const index = () => {
	return (
		<MainLayout className="">
			<div className="container">
				<TrendingProducts />
			</div>
		</MainLayout>
	)
}

export default index
