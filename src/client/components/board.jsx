import React, { PropTypes } from 'react';

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const colors = {
  purple: ['#663399', '#674172', '#8E44AD', '#913D88', '#9B59B6']
};

const styles = {
  board: {
    width: '80%',
    margin: '20px auto',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: '0 1 3%',
    margin: '.5%',
    background: '#ECECEC',
  },
};

const Board = ({board, handleClickFn}) => {
  const rows = board.map((col, rowIndex) => {
    const spans = col.map((isAlive, colIndex) => {
      let style = Object.assign({}, styles.cell);
      let num = getRandomArbitrary(0,4);

      if(isAlive){
        let borders = [];

        for(let i = 0; i < 7; i++){
          borders.push(getRandomArbitrary(25,75))
        }

        borders = borders.reduce((acc, item, i) => {
          return i !== 3 ? acc += `${item}px ` : acc += `${item}px/${item}px `;
        }, '')

        style.background = colors.purple[num];
        style.borderRadius = borders;
      }

      return <div style={style} onClick={handleClickFn.bind(this, ([rowIndex, colIndex]))} key={colIndex}>&nbsp;</div>;
    });
    return <div style={styles.row} key={rowIndex}>{spans}</div>;
  });

  return (
    <div style={styles.board} className='gameBoard'>
      { rows }
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  handleClickFn: PropTypes.func.isRequired
}

export default Board;
