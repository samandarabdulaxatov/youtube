import React from 'react';
import './ChannelMenu.scss';
import { NavLink } from 'react-router-dom';

import search from '../../Assets/Image/search.svg';

function ChannelMenu() {
	return (
		<>
			<ul className='single-user__menu-list'>
				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link active' to='/'>
						Home
					</NavLink>
				</li>

				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link' to='/video'>
						Videos
					</NavLink>
				</li>

				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link' to='/playlists'>
						Playlists
					</NavLink>
				</li>

				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link' to='/channels'>
						Channels
					</NavLink>
				</li>
				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link' to='/discussiono'>
						Discussion
					</NavLink>
				</li>

				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link' to='/about'>
						About
					</NavLink>
				</li>

				<li className='single-user__menu-item'>
					<NavLink className='single-user__menu-link' to='/search'>
						<img src={search} alt='search icon' width='18' height='18' />
					</NavLink>
				</li>
			</ul>
		</>
	);
}

export default ChannelMenu;
