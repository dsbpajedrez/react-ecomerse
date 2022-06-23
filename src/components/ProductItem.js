import React, {useContext, useState} from 'react';
import  {ctxCartOrders} from '../context/cartOrderContext'
import '../styles/ProductItem.scss';

import addToCart from '@icons/bt_add_to_cart.svg'

const imagen = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const ProductItem = ({price='123',article='Bike',image={imagen},id}) => {
	const [state, addToCartOrder] = useContext(ctxCartOrders)
	
	const addingToCart =product=>{	
		addToCartOrder(product)
	
	}

	return (
		<div className="ProductItem">
			<img src={image} alt="" />
			<div className="product-info">
				<div>
					<p>{price}</p>
					<p>{article}</p>
				</div>
				<figure onClick={()=>addingToCart({article,price, image, id})} >
					<img src={addToCart} alt="" style={{cursor:'pointer'}} />
				</figure>
				
			</div>
	
		</div>
	);
}

export default ProductItem;
