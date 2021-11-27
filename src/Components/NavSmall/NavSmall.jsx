import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../../Assets/SVG/HomeIcon';
import TrendingIcon from '../../Assets/SVG/TrendingIcon';
import SubscriptionsIcon from '../../Assets/SVG/SubscriptionsIcon';

function NavSmall() {
	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<HomeIcon />
						<NavLink className='nav__link' to='/home'>
							Home
						</NavLink>
					</li>
					<li className='nav__item'>
						<TrendingIcon/>
						<NavLink className='nav__link' to='/trending'>
							Trending
						</NavLink>
					</li>

					<li className='nav__item'>
						<SubscriptionsIcon />
						<NavLink className='nav__link' to='/subscriptionsme'>
							Subscriptions
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavSmall;
