import React from 'react';
import './ProfileMenu.scss';

import phone from '../../Assets/Image/phone-18.svg';
import appmenu from '../../Assets/Image/Combined Shape.svg';
import ring from '../../Assets/Image/ui-11.svg';
import profileImg from '../../Assets/Image/Userpic.png';

function ProfileMenu() {
	return (
		<>
			<ul className='profile-menu__list'>
				<li className='profile-menu__item'>
					<button className='profile-menu__btn'>
						<img
							className='profile-menu__img'
							src={phone}
							alt='phone img'
							width='27'
							height='20'
						/>
					</button>
				</li>

				<li className='profile-menu__item'>
					<button className='profile-menu__btn'>
						<img
							className='profile-menu__img'
							src={appmenu}
							alt='app menu'
							width='21'
							height='21'
						/>
					</button>
				</li>

				<li className='profile-menu__item'>
					<button className='profile-menu__btn'>
						<img
							className='profile-menu__img'
							src={ring}
							alt='ring'
							width='22'
							height='26'
						/>
					</button>
				</li>

				<li className='profile-menu__item'>
					<button className='profile-menu__btn'>
						<img
							className='profile-menu__img'
							src={profileImg}
							alt='profile img'
							width='40'
							height='40'
						/>
					</button>
				</li>
			</ul>
		</>
	);
}

export default ProfileMenu;
