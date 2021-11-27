import React from 'react';
import { NavLink } from 'react-router-dom';
import SettingIcon from '../../Assets/SVG/SettingIcon';

function Setting() {
	return (
		<>
			<div className='nav__item  nav__item--opacity'>
				<SettingIcon opacity='0.24' />

				<NavLink className='nav__link nav__link--color ' to='/setting'>
					Setting
				</NavLink>
			</div>
		</>
	);
}

export default Setting;
