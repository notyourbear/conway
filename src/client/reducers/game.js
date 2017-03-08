import Conway from '../conway';

const game = Conway(10, 10, [[4, 4], [4, 5], [4, 6]]);

const initialState = {
  board: game.board,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_UP':
      return {
        ...state,
        message: action.payload,
      };
    case 'CHANGE_STATE':
      return {
        ...state,
        board: game.changeState(state.board, action.payload),
      };
    default: return state;
  }
};

export default helloReducer;
