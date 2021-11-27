import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

import logo from '../../Assets/Image/Black.svg';
import menu from '../../Assets/Image/Menu.svg';

import ProfileMenu from '../ProfileMenu/ProfileMenu';

function Header({ main, elModal }) {
	const [modal, setModal] = React.useState(false);

	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='header__box'>
						<button
							className='box__menu--btn'
							onClick={() => {
								setModal((prev) => !prev);
								if (modal) {
									main.current.classList.add('content');
									main.current.classList.add('open');
									elModal.current.classList.add('close');
								} else if (!modal) {
									main.current.classList.remove('content');
									elModal.current.classList.remove('close');
									main.current.classList.add('contain');
								}
							}}>
							<img
								className='box__menu-img'
								src={menu}
								alt='menu img'
								width='20'
								height='17'
							/>
						</button>
						<NavLink className='box__logo-link' to='/'>
							<img
								className='logo-img'
								src={logo}
								alt='youtube logo'
								width='116'
								height='25'
							/>
						</NavLink>
					</div>
					<input className='search__input' type='text' placeholder='Search' />
					<ProfileMenu />
				</div>
			</header>
		</>
	);
}

export default Header;
