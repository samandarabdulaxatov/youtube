import React from 'react';
import './VideoMain.scss';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Menu from '../Menu/Menu';

import userImg from '../../Assets/Image/food.png';
import like from '../../Assets/Image/like.svg';
import dislike from '../../Assets/Image/dislike.svg';
import share from '../../Assets/Image/share.svg';

function VideoMain({ main, elModal }) {
	const [data, setData] = React.useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/photos/' + id)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [id]);
	return (
		<>
			<main className='main'>
				<Menu elModal={elModal} />

				<section className='video' main={main}>
					<div className='container'>
						<div className='video__big-box'>
							<div className='video__box'>
								<img
									src={data.url}
									alt='img'
									width='800'
									height='400'
								/>

								<h2 className='video__title-fonts'>
									Dude You Re Getting A Telescope
								</h2>

								<div className='video-single__box'>
									<span className='views'>123k views</span>

									<div className='video-single__btns'>
										<button className='video-single__btn'>
											<img
												className='video-single__btn-img'
												src={like}
												alt='like'
												width='14'
												height='13'
											/>
											123k
										</button>

										<button className='video-single__btn'>
											<img
												className='video-single__btn-img'
												src={dislike}
												alt='dislike'
												width='14'
												height='13'
											/>
											435k
										</button>

										<button className='video-single__btn'>
											<img
												className='video-single__btn-img'
												src={share}
												alt='share'
												width='14'
												height='13'
											/>
											Share
										</button>

										<button className='video-single__btn'>
											<strong>...</strong>
										</button>
									</div>
								</div>
							</div>

							<div className='post-one__box'>
								<img
									className='user__img'
									src={userImg}
									alt='user img'
									width='80'
									height='80'
								/>

								<div>
									<h2 className='user__name'>Food & Drink</h2>

									<span className='channel__rec'>
										Published on 14 Jun 2019{' '}
									</span>
								</div>
								<button className='channel__follow-btn channel__follow-btn--margin'>
									Subscribe 2.3m
								</button>
							</div>

							<p className='channel__info'>
								A successful marketing plan relies heavily on the
								pulling-power of advertising copy. Writing
								result-oriented ad copy is difficult, as it must appeal
								to, entice, and convince consumers to take action. There
								is no magic formula to write perfect ad copy; it is
								based on a number of factors, including ad placement,
								demographic, even the consumer’s mood when they see your
								ad.
							</p>

							<span className='more'>Show more</span>
						</div>

						<div>
							<div className='video__small-box'>
								<h2 className='video__small-heading'>Next</h2>

								<span className='video__small-span'>Autoplay</span>
							</div>

							<ul className='next__video-list'>
								<li className='next__video-item'>
									<button
										className='next__video-btn'
										onClick={() => navigate('/videos/' + data.id)}>
										<div>
											<img
												className='next__video'
												src='https://picsum.photos/id/870/357/264'
												alt='img'
												width='{357}'
												height='{264}'
											/>
											<h3 className='next__video-title'>
												Baby Monitor Technology
											</h3>
											<div className='next__video-data-box'>
												<span className='next__video-data'>
													123k views
												</span>
												<span className='next__video-data'>
													Dollie Blair
												</span>
											</div>
										</div>
									</button>
								</li>

								<li className='next__video-item'>
									<button
										className='next__video-btn'
										onClick={() => navigate('/videos/' + data.id)}>
										<div>
											<img
												className='next__video'
												src='https://picsum.photos/id/870/357/264'
												alt='img'
												width='{357}'
												height='{264}'
											/>
											<h3 className='next__video-title'>
												Baby Monitor Technology
											</h3>
											<div className='next__video-data-box'>
												<span className='next__video-data'>
													123k views
												</span>
												<span className='next__video-data'>
													Dollie Blair
												</span>
											</div>
										</div>
									</button>
								</li>

								<li className='next__video-item'>
									<button
										className='next__video-btn'
										onClick={() => navigate('/videos/' + data.id)}>
										<div>
											<img
												className='next__video'
												src='https://picsum.photos/id/870/357/264'
												alt='img'
												width='{357}'
												height='{264}'
											/>
											<h3 className='next__video-title'>
												Baby Monitor Technology
											</h3>
											<div className='next__video-data-box'>
												<span className='next__video-data'>
													123k views
												</span>
												<span className='next__video-data'>
													Dollie Blair
												</span>
											</div>
										</div>
									</button>
								</li>

								<li className='next__video-item'>
									<button
										className='next__video-btn'
										onClick={() => navigate('/videos/' + data.id)}>
										<div>
											<img
												className='next__video'
												src='https://picsum.photos/id/870/357/264'
												alt='img'
												width='{357}'
												height='{264}'
											/>
											<h3 className='next__video-title'>
												Baby Monitor Technology
											</h3>
											<div className='next__video-data-box'>
												<span className='next__video-data'>
													123k views
												</span>
												<span className='next__video-data'>
													Dollie Blair
												</span>
											</div>
										</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default VideoMain;
