import React from 'react';

import Header from '../../Components/Header/Header';
import ChannelMain from '../../Components/ChannelMain/ChannelMain';

function ChannelsPgae({ elMain, elModal }) {
	return (
		<>
			<Header main={elMain} elModal={elModal} />
			<ChannelMain main={elMain} elModal={elModal} />
		</>
	);
}
export default ChannelsPgae;
