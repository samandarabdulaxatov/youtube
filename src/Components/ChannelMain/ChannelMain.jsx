import React from 'react';
import './ChannelMain.scss';
import { Carousel } from '@trendyol-js/react-carousel';
import { useParams } from 'react-router-dom';	
import { useNavigate } from 'react-router-dom';

import Menu from '../Menu/Menu';
import ChannelMenu from '../ChannelMenu/ChannelMenu';
import Subscriptions from '../Subscriptions/Subscriptions';

import ring from '../../Assets/Image/ui-11.svg';

function ChannelMain({ main, elModal }) {
	const [data, setData] = React.useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/users/' + id)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [id]);

	const [video, setVideo] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/photos')
			.then((res) => res.json())
			.then((data) => setVideo(data));
	}, []);
	return (
		<>
			<main className='main'>
				<Menu elModal={elModal} />
				<section className='channel' main={main}>
					<div className='container'>
						<div className='post-one__box'>
							<img
								className='user__img'
								src='https://stopdtp.com/images/2021/06/05/sample_user_icon.png'
								alt='icon user'
								width='80'
								height='80'
							/>
							<div className='single-user__name'>
								<h1 className='user__name user__name--margin'>
									{data.username}
								</h1>
								<span className='subscribed-num'>245K subscribed</span>
							</div>

							<div className='single-user__box'>
								<button className='profile-menu__btn'>
									<img
										src={ring}
										alt='notice'
										width='22'
										height='26'
									/>
								</button>

								<button className='channel__follow-btn'>
									Subscribe 2.3m
								</button>
							</div>
						</div>

						<div className='single-user__menu'>
							<div className='single-user__menu-box'>
								<ChannelMenu />

								<div className='single-user__video-box'>
									<div className='single-user__video'>
										<iframe
											width={500}
											height={250}
											src='https://www.youtube.com/embed/1npkSwS0k9s'
											title='YouTube video player'
											frameBorder={0}
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										/>
									</div>

									<div className='single-user__video-info'>
										<h2 className='single-user__video-title'>
											Choosing The Best Audio Player Software For
											Your Computer
										</h2>

										<p className='single-user__video-describtion'>
											Your cheap internet-based banner advertising
											will become one of the sought for ads there
											are. Today, the world of Internet advertising
											is rapidly evolving beyond banner ads and
											intrusive pop-ups. Bayles A common medium for
											advertising on the Internet is the use of
											banner ads.{' '}
										</p>

										<span className='single-user__video-views-about'>
											11k views · 6 months ago
										</span>
									</div>
								</div>
							</div>

							<div className='single-user__rec-box'>
								<h3 className='single-user__rec-heading'>
									Recommended channel
								</h3>
								<Subscriptions heading={''} />
							</div>
						</div>
						<div>
							<h3>Margaret Phelps videos</h3>

							<ul className='list__slider'>
								{video.length > 0 &&
									video.map((row) => (
										<li className='item__slider' key={row.id}>
											<Carousel>
												<img
													className='video__img'
													src={row.thumbnailUrl}
													alt='img'
													width='250'
													height='150'
												/>

												<p className='video__title'>{row.title}</p>
											</Carousel>
											<button
												className='slider__btn'
												onClick={() =>
													navigate('/videos/' + row.id)
												}>
												<p className='video__title'>{row.title}</p>
											</button>
										</li>
									))}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default ChannelMain;
