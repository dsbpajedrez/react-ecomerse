import React, {useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';

const ProductList = () => {
	const API_PRODUCTS ='https://api.escuelajs.co/api/v1/products'
	const [productos, setProductos] = useState([])

	useEffect(()=>{
		fetch(API_PRODUCTS)
			.then(respuesta => respuesta.json())
			.then(data => {
				setProductos(data)
			})
	},[])
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
