import React, {useState} from 'react';
import '../styles/ProductItem.scss';

import addToCart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({price='123',article='Bike',image='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}) => {
	const [cart,setCart] = useState('')
	const addingToCart =()=>{
		setCart('Hello')
	}

	return (
		<div className="ProductItem">
			<img src={image} alt="" />
			<div className="product-info">
				<div>
					<p>{price}</p>
					<p>{article}</p>
				</div>
				<figure onClick={addingToCart} >
					<img src={addToCart} alt="" />
				</figure>
				
			</div>
			{cart}
		</div>
	);
}

export default ProductItem;
