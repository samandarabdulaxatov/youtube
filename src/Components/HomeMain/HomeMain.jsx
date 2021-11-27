import React from 'react';
import './HomeMain.scss';

import Menu from '../Menu/Menu';
import PostOne from '../PostOne/PostOne';
import Recommended from '../Recommended/Recommended';
import ChannelFood from '../ChannelFood/ChannelFood';

function HomeMain({ main, elModal }) {
	return (
		<>
			<main className='main'>
				<Menu elModal={elModal} />
				<section className='posts' ref={main}>
					<div className='container'>
						<PostOne />
						<Recommended />
						<ChannelFood />
					</div>
				</section>
			</main>
		</>
	);
}

export default HomeMain;
