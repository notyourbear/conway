import { createAction } from 'redux-actions';

export const startUp = createAction('START_UP');
export const stop = createAction('STOP');
export const tick = createAction('TICK');
export const reset = createAction('RESET');
export const changeState = createAction('CHANGE_STATE');
