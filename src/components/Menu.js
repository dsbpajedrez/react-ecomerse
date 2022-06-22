import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import '@styles/Menu.scss';

const Menu = () => {

	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/" className="title">My orders</Link>
					<ul style={{color:'green'}}>
						
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
