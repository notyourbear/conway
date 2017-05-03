import Conway from '../conway';

const height = 15;
const width = 25;
const game = Conway(height, width);

const initialState = {
  board: game.board,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_UP':
      return {
        ...state,
        intervalId: action.payload,
      };
    case 'STOP':
      return {
        ...state,
        intervalId: null,
      };
    case 'RESET':
      const newGame = Conway(height, width);
      return {
        ...state,
        intervalId: null,
        board: newGame.board,
      };
    case 'CHANGE_STATE':
      return {
        ...state,
        board: game.changeState(state.board, action.payload),
      };
    case 'TICK':
      return {
        ...state,
        board: game.tick(state.board),
      };
    default: return state;
  }
};

export default helloReducer;
