import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import '@styles/Header.scss';
import Menu from './Menu';
import {ctxCartOrders} from '../context/cartOrderContext'

import menu from '@icons/icon_menu.svg'
import logo from  '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
	const [state] = useContext(ctxCartOrders)
	const [mostrarMenu, setMostrarMenu] = useState(false)

	const toogleMenu = ()=>{
		setMostrarMenu(!mostrarMenu)
	}
	return (
		<>
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<Link to="/">All</Link>
					</li>
					<li>
						<Link to="/">Clothes</Link>
					</li>
					<li>
						<Link to="/">Electronics</Link>
					</li>
					<li>
						<Link to="/">Furnitures</Link>
					</li>
					<li>
						<Link to="/">Toys</Link>
					</li>
					<li>
						<Link to="/">Others</Link>
					</li>
				</ul>
			</div>
			<div onClick={toogleMenu} className="navbar-right">
				<ul>
					<li className="navbar-email">david@hotmail.com</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						{state.carts.length>0 ? <div>{state.carts.length}</div>:null}
						
					</li>
				</ul>				
			</div>
			
			
		</nav>
		<div className='mostrar-menu'>
			{mostrarMenu && (<Menu/>)}
		</div>
		</>
	);
}

export default Header;
