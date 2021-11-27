import React from 'react'
import './NavBig.scss'
import { NavLink } from 'react-router-dom'

import LibraryIcon from '../../Assets/SVG/LibraryIcon'
import Historyicon from '../../Assets/SVG/History'
import watch from '../../Assets/Image/Shape.svg'
import StarIcon from '../../Assets/SVG/StarIcon'
import LikeIcon from '../../Assets/SVG/LikeIcon'
import MusicIcon from '../../Assets/SVG/Musicicon'
import GamesIcon from '../../Assets/SVG/GamesIcon'
import MoreIcon from '../../Assets/SVG/MoreIcon'

function NavBig() {
	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<LibraryIcon />
						<NavLink className='nav__link' to='/library'>
							Library
						</NavLink>
					</li>
					<li className='nav__item'>
						<Historyicon />
						<NavLink className='nav__link' to='/history'>
							History
						</NavLink>
					</li>

					<li className='nav__item'>
						<img src={watch} alt='watch icon' width='17' height='19' />
						<NavLink className='nav__link' to='/watch-later'>
							Watch later
						</NavLink>
					</li>

					<li className='nav__item'>
						<StarIcon />
						<NavLink className='nav__link' to='/favourites'>
							Favourites
						</NavLink>
					</li>

					<li className='nav__item'>
						<LikeIcon />
						<NavLink className='nav__link' to='/liked-videos'>
							Liked videos
						</NavLink>
					</li>

					<li className='nav__item'>
						<MusicIcon />
						<NavLink className='nav__link' to='/music'>
							Music
						</NavLink>
					</li>

					<li className='nav__item'>
						<GamesIcon />
						<NavLink className='nav__link' to='/games'>
							Games
						</NavLink>
					</li>

					<li className='nav__item'>
						<MoreIcon />
						<NavLink className='nav__link' to='/more'>
							Show more
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default NavBig
