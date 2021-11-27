import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { useNavigate } from 'react-router-dom';

function Recommended() {
	const [data, setData] = React.useState([]);
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/photos')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			<h2 className='recommended__heading'>Recommended</h2>

			<ul className='list__slider'>
				{data.length > 0 &&
					data.map((row) => (
						<li className='item__slider' key={row.id}>
							<Carousel>
								<img
									className='video__img'
									src={row.thumbnailUrl}
									alt='img'
									width='540'
									height='250'
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

export default Recommended;
