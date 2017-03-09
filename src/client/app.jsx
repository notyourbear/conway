import React from 'react';
import StartButton from './containers/startButton';
import StopButton from './containers/stopButton';
import TickButton from './containers/tickButton';
import ResetButton from './containers/resetButton';
import Gameboard from './containers/gameBoard';
import { APP_NAME } from '../shared/config';

const styles = {
  body: {
    fontFamily: 'Architects Daughter',
    width: '750px',
    height: '700px',
    margin: '0 auto',
    backgroundColor: '#FAF2AD',
    position: 'relative',
    boxShadow: '10px 10px 80px 0px hsla(0,0%,0%,.3)',
  },
  lines: {
    borderLeft: '2px solid #ffaa9f',
    borderRight: '2px solid #ffaa9f',
    width: '6px',
    position: 'absolute',
    top: '0',
    left: '10%',
    height: '700px',
  },
  header: {
    width: '60%',
    margin: '0 auto'
  },
  title: {
    color: '#41403E',
    padding: '45px 0 15px',
    'fontSize': '3rem',
    textAlign: 'center'
  },
  horizontal: {
    width: '750px',
    height: '1px',
    position: 'absolute',
    background: '#dedede',
    left: '0',
    opacity: '.5',
  }
}

var horizontals = [];

for(let i = 1; i < 35; i++){
  let style = Object.assign({}, styles.horizontal)
  style.top = `${i * 20}px`
  horizontals.push(style);
}

const App = () => {
  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <h1 style={styles.title}>{APP_NAME}</h1>
        <StartButton />
        <TickButton />
        <StopButton />
        <ResetButton />
      </div>
      <div style={styles.lines}>&nbsp;</div>
      { horizontals.map((styles, i) => <div key={i} style={styles}>&nbsp;</div>)}
      <Gameboard />
    </div>
  );
};

export default App;
