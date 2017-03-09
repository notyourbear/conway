import React from 'react';
import StartButton from './containers/startButton';
import StopButton from './containers/stopButton';
import TickButton from './containers/tickButton';
import ResetButton from './containers/resetButton';
import Gameboard from './containers/gameBoard';
import { APP_NAME } from '../shared/config';

const App = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <StartButton />
      <TickButton />
      <StopButton />
      <ResetButton />
      <Gameboard />
    </div>
  );
};

export default App;
