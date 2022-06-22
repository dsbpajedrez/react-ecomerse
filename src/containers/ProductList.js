import React, {useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';
const API_PRODUCTS ='https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const productos= useGetProducts(API_PRODUCTS)
	return (
		<section className="main-container">
			<div className="ProductList">
			{productos.map(item=>(
				<ProductItem 
				key={item.id} 
				price={item.price} 
				image={item.category.image} 
				article={item.title} 
				/>
			))}			
			</div>
		</section>
	);
}

export default ProductList;
