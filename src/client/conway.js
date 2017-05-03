const addRandomPieces = (height, width, num) => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const pieces = [];

  for (let i = 0; i < num; i++) {
    const loc = [getRandomInt(0, height - 1), getRandomInt(0, width - 1)];
    pieces.push(loc);
  }
  return pieces;
};

const Conway = (height, width, startLocations = addRandomPieces(height, width, 55)) => {
  const makeBoard = () => {
    const board = [];
    for (let i = 0; i < height; i++) {
      board.push([]);
      for (let y = 0; y < width; y++) {
        board[i].push(false);
      }
    }
    return board;
  };

  const copyBoard = (board) => {
    return board.map(row => row.slice());
  };

  const addPiece = (board, location, isAlive) => {
    const [row, col] = location;
    board[row][col] = isAlive;
  };

  const changeState = (board, location) => {
    const newBoard = copyBoard(board);
    const [row, col] = location;
    newBoard[row][col] = !(board[row][col]);
    return newBoard;
  };

  const starter = () => {
    const board = makeBoard();
    startLocations.forEach((location) => {
      addPiece(board, location, true);
    });
    return board;
  };

  const calculateAliveNeighbours = (board, location) => {
    const [row, col] = location;
    let alive = 0;

    const options = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    options.forEach((option) => {
      const [pRow, pCol] = option;
      switch (true) {
        case row + pRow < 0:
        case row + pRow > board.length - 1:
        case col + pCol < 0:
        case col + pCol > board[row].length - 1:
          break;
        default: if (board[row + pRow][col + pCol]) alive += 1;
      }
    });

    return alive;
  };

  const tick = (board) => {
    const newBoard = copyBoard(board);
    board.forEach((row, i) => {
      row.forEach((col, y) => {
        const aliveN = calculateAliveNeighbours(board, [i, y]);
        if (board[i][y]) {
          if (aliveN < 2 || aliveN > 3) {
            newBoard[i][y] = false;
          } else {
            newBoard[i][y] = true;
          }
        } else if (aliveN === 3) {
          newBoard[i][y] = true;
        }
      });
    });
    return newBoard;
  };

  const board = starter();

  return {
    board,
    tick,
    changeState,
  };
};

export default Conway;
