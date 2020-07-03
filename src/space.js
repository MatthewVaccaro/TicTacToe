import React from 'react';
//images
import Dwight from './assets/dwight.png';
import Micheal from './assets/micheal.png';

const Space = ({ space, capture, index, game }) => {
	return (
		<div
			className={game === null ? 'space hoverSpace' : 'space'}
			onClick={() => {
				if (game === null) {
					return capture(index);
				}
			}}
		>
			{space === null ? <img /> : <img src={space === 'Dwight' ? Dwight : Micheal} />}
		</div>
	);
};

export default Space;
