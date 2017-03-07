const Conway = (height, width, startLocations) => {
	const makeBoard = () => {
		let board = [];
		for(let i = 0; i < height; i++){
			board.push([]);
			for(let y = 0; y < width; y++){
				board[i].push(false)
			}
		}
		return board;
	}

	const addPiece = (board, location, isAlive) => {
		let [row, col] = location;
		board[row][col] = isAlive;
	}

	const starter = () => {
		let board = makeBoard();
		startLocations.forEach((location) => {
			addPiece(board, location, true)
		});
		return board;
	}

	const display = (board) => {
		let display = board.map(row => {
			return row.reduce((acc, alive) => {
				return acc = alive ? acc + '*' : acc + ' ';
			}, '')
		})
		display.forEach( r => console.log(r))
	}

	const calculateAliveNeighbours = (board, location) => {
		let [row, col] = location;
		let alive = 0;

		const options = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1, -1], [1,0], [1,1]];
		options.forEach(option => {
			let [pRow, pCol] = option;
			switch(true){
				case row + pRow < 0:
				case row + pRow > board.length - 1:
				case col + pCol < 0:
				case col + pCol > board[row].length -1:
					break;
				default:
					if(board[row + pRow][col + pCol]) alive++;

			}
		})

		return alive;
	}

	const tick = (board) => {
		newBoard = board.map(row => row.slice());
		board.forEach((row, i) => {
			row.forEach((col, y) => {
				let aliveN = calculateAliveNeighbours(board, [i,y])		
				if(board[i][y]){
					if(aliveN < 2) newBoard[i][y] = false; // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
					if(aliveN === 2 || aliveN === 3) newBoard[i][y] = true; // Any live cell with two or three live neighbours lives on to the next generation.
					if(aliveN > 3) newBoard[i][y] = false; // Any live cell with more than three live neighbours dies, as if by overpopulation.
				} else {
					if(aliveN === 3) newBoard[i][y] = true; // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
				}
			})
		})
		return newBoard;
	}

	let board = starter();

	return {
		board,
		display,
		tick
	}
};

let c = Conway(6,6, [[3,2],[3,3],[3,4]]);

for(var i = 0; i < 5; i++){
	c.board = c.tick(c.board);
	c.display(c.board);
}
