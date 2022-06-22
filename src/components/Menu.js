import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ctxCartOrders} from '../context/cartOrderContext'
import '@styles/Menu.scss';

const Menu = () => {
	const [state] = useContext(ctxCartOrders)
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/" className="title">My orders</Link>
					<ul style={{color:'green'}}>
						{state.carts.length>0 && state.carts.map((item,idx)=><li>{idx+1}. {item.article}: ${item.price}</li>)}
					</ul>
				</li>
				<li>
					<Link to="/">My account</Link>
				</li>
				<li>
					<Link to="/">Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
