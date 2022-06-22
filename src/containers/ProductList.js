import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
			{[1,2,3,4,5,6,7,8,9].map(item=>(
				<ProductItem key={item} />
			))}			
			</div>
		</section>
	);
}

export default ProductList;
