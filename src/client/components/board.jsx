import React, { PropTypes } from 'react';

const styles = {
  board: {
  },
  cell: {
    height: '10px',
    width: '10px',
    display: 'inline-block',
    background: 'orange',
    margin: '2px',
  }
}

const Board = ({board, handleClickFn}) => {
  const rows = board.map((col, rowIndex) => {
    const spans = col.map((isAlive, colIndex) => {
      let style = Object.assign({}, styles.cell);
      if(isAlive) style.background = 'grey';

      return <span style={style} onClick={handleClickFn.bind(this, ([rowIndex, colIndex]))} key={colIndex}></span>;
    });
    return <div className='row' key={rowIndex}>{spans}</div>;
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
