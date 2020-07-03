export function checkWin(capturedSpots) {
	const winning = [
		[ 0, 1, 2 ],
		[ 3, 4, 5 ],
		[ 6, 7, 8 ],
		[ 0, 3, 6 ],
		[ 1, 4, 7 ],
		[ 2, 5, 8 ],
		[ 0, 4, 8 ],
		[ 2, 4, 6 ]
	];
	// The loop is going to go through each array
	for (let i = 0; i < winning.length; i++) {
		//destructure the array to match against function perams
		const [ a, b, c ] = winning[i];
		// Check to see if A = index 0 is captured. If not move onto the next array
		if (capturedSpots[a] && capturedSpots[a] === capturedSpots[b] && capturedSpots[b] === capturedSpots[c]) {
			// ^ It's looking to see if each of the index specifided has the same value ( either "X"  || "O")
			// If all three match then return the value (either "X" || "O")
			return capturedSpots[a];
		}
	}
	return null;
}
