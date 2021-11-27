import React from 'react';
import './ChannelFood.scss';
import { Carousel } from '@trendyol-js/react-carousel';
import { useNavigate } from 'react-router-dom';

import userImg from '../../Assets/Image/food.png';

function ChannelFood() {
	const [data, setData] = React.useState([]);
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/photos')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			<div className='post-one__box'>
				<img
					className='user__img'
					src={userImg}
					alt='user img'
					width='50'
					height='50'
				/>
				<h2 className='user__name'>Food & Drink</h2>

				<span className='channel__rec'>Recommended channel for you</span>

				<button className='channel__follow-btn'>Subscribe 2.3m</button>
			</div>

			<ul className='list__slider'>
				{data.length > 0 &&
					data.map((row) => (
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
								onClick={() => navigate('/videos/' + row.id)}>
								<p className='video__title'>{row.title}</p>
							</button>
						</li>
					))}
			</ul>
		</>
	);
}

export default ChannelFood;
