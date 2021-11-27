import React from 'react';
import './Menu.scss';

import NavSmall from '../NavSmall/NavSmall';
import NavBig from '../NavBig/NavBig';
import Subscriptions from '../Subscriptions/Subscriptions';
import Setting from '../Setting/Setting';

function Menu({elModal}) {
	return (
		<>
			<section className='menu'>
				<div className='container'>
					<div className='menu__modal' ref={elModal}>
						<div className='menu__modal-item'>
							<NavSmall />
							<NavBig />
							<Subscriptions />
							<Setting />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Menu;
