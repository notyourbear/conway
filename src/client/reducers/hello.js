import { SAY_HELLO } from '../actions/hello';

const initialState = {
  message: 'Initial reducer message',
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      const newState = {
        ...state,
        message: action.payload,
      };

      return newState;
    default: return state;
  }
};

export default helloReducer;
