import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import ChannelsPgae from './pages/Channels/Channels';
import Video from './pages/Video/Video';

function AuthenticatedApp() {
	const elMain = React.useRef();
	const elModal = React.useRef();

	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route
					path='/home'
					element={<Home />}
					elModal={elModal}
					elMain={elMain}
				/>
				<Route
					path='/channel/:id'
					element={<ChannelsPgae />}
					elModal={elModal}
					elMain={elMain}
				/>

				<Route
					path='/videos/:id'
					element={<Video />}
					elModal={elModal}
					elMain={elMain}
				/>
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
