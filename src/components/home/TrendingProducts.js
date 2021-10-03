import React, { useState, useEffect } from 'react';
import { GET_TRENDING_PRODUCT_LIST } from '../../api.documentation';

const TrendingProducts = () => {
	const [productList, setProductList] = useState([])

	useEffect(() => {
		(async () => {
			const data = await GET_TRENDING_PRODUCT_LIST().then(res => res.data)
			setProductList(data)
		})();
	}, []);

	console.log(productList);

	return (
		<div className="">wea</div>
	)
}

export default TrendingProducts
