import React from 'react';
import '../styles/OrderItem.scss';

import closeIcon from '@icons/icon_close.png'
const imagen = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
const OrderItem = ({article, price, image={imagen}}) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={image} alt="bike" />
			</figure>
			<p>{article}</p>
			<p>${price}</p>
			<img src={closeIcon} alt="close" />
		</div>
	);
}

export default OrderItem;
