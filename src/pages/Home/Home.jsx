import React from 'react';

import Header from '../../Components/Header/Header';
import HomeMain from '../../Components/HomeMain/HomeMain';

function Home({ elMain, elModal }) {
	return (
		<>
			<Header main={elMain} elModal={elModal} />
			<HomeMain main={elMain} elModal={elModal} />
		</>
	);
}

export default Home;
