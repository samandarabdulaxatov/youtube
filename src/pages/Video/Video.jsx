import React from 'react';

import Header from '../../Components/Header/Header';
import VideoMain from '../../Components/VideoMain/VideoMain';

function Video({ elMain, elModal }) {
	return (
		<>
			<Header main={elMain} elModal={elModal} />
			<VideoMain main={elMain} elModal={elModal} />
		</>
	);
}

export default Video;
