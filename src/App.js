import React, { useState } from 'react';
import './App.css';
//Sounds
import MichealVictory from './assets/michealVictory.mp3';
import DwightVictory from './assets/dwightVictory.mp3';
//Components
import Board from './board';
//Helper
import * as helpers from './helpers';

function App() {
	const { checkWin } = helpers;
	const [ space, setSpace ] = useState(Array(9).fill(null));
	const [ turn, setTurn ] = useState('X');
	const [ game, setGame ] = useState(null);

	function capture(index) {
		//carbon copy board
		const updateBoard = [ ...space ];
		//Check to see if the spot is open
		if (updateBoard[index] !== null) return;
		// If spot open than update carbon copy with either X or O based on turn
		updateBoard.splice(index, 1, turn === 'X' ? 'Michael' : 'Dwight');
		//Update the state for a rerender
		setSpace(updateBoard);
		//Change the turn based up current turn
		setTurn(turn === 'X' ? 'O' : 'X');
		//Checkboard for winning combination
		setGame(checkWin(updateBoard));
	}

	function restart() {
		//Restarts the game
		setSpace(Array(9).fill(null));
		setTurn('X');
		setGame(null);
	}

	return (
		<div className="main">
			<h1 className={game ? 'hide show' : 'hide'}> {game ? `${game} is the Winner! ` : ' bloop '} </h1>
			<Board game={game} space={space} capture={capture} />
			{game ? <audio src={game === 'Michael' ? MichealVictory : DwightVictory} autoPlay /> : ''}
			<button
				onClick={() => {
					restart();
				}}
				className="restart"
			>
				Restart
			</button>
		</div>
	);
}

export default App;
