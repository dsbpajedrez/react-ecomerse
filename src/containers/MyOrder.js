import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import {ctxCartOrders} from '../context/cartOrderContext'
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const [state] = useContext(ctxCartOrders)
	const reducer = (previousValue, currentValue) => previousValue + currentValue;
	const reduceArray = arr =>{
		return arr.reduce(reducer)
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				{/* <img src="./icons/flechita.svg" alt="arrow" /> */}
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.carts.map(item=>
				<OrderItem 
				price={item.price} 
				article={item.article}
				image={item.image}
				/>)}
				
				<div className="order">
					<p>
						<span>Total: </span>
					</p>
					<p>${state.carts.length>0?reduceArray(state.carts.map(item=>item.price)):0}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
