import React, { useState, useEffect } from 'react';
import { GET_LIST_TRENDING_PRODUCT } from '../../api.documentation';

const TrendingProducts = () => {
	const [productList, setProductList] = useState([])

	useEffect(() => {
		(async () => {
			const data = await GET_LIST_TRENDING_PRODUCT().then(res => res.data)
			setProductList(data)
		})();
	}, []);

	console.log(productList);

	return (
		<div className=""></div>
	)
}

export default TrendingProducts
