import React from 'react';
import Space from './space';

const Board = ({ space, capture, game }) => {
	return (
		<div className="board">
			{space.map((space, index) => {
				return <Space key={index} index={index} space={space} capture={capture} game={game} />;
			})}
		</div>
	);
};

export default Board;
