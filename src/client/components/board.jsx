import React, { PropTypes } from 'react';
import injectSheet from 'react-jss'

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const colors = {
  purple: ['#663399', '#674172', '#8E44AD', '#913D88', '#9B59B6']
};

const styles = {
  board: {
    width: '70%',
    margin: '50px auto',
    border: '4px dashed #41403E',
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: '0 1 3%',
    margin: '1%',
    padding: '1%',
    cursor: 'pointer',
  },
};

const Board = ({classes, board, handleClickFn}) => {
  const rows = board.map((col, rowIndex) => {
    const spans = col.map((isAlive, colIndex) => {
      let style = Object.assign({}, classes.cell);
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

      return <div style={style} className='cell' onClick={handleClickFn.bind(this, ([rowIndex, colIndex]))} key={colIndex}>&nbsp;</div>;
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

export default injectSheet(styles)(Board);
