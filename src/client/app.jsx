import React from 'react';
import StartButton from './containers/startButton';
import Gameboard from './containers/gameBoard';
import { APP_NAME } from '../shared/config';

const App = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <StartButton />
      <Gameboard />
    </div>
  );
};

export default App;
