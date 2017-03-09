import React, { PropTypes } from 'react';

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
    background: 'orange',
  }
}

const Board = ({board, handleClickFn}) => {
  const rows = board.map((col, rowIndex) => {
    const spans = col.map((isAlive, colIndex) => {
      let style = Object.assign({}, styles.cell);
      if(isAlive) style.background = 'grey';

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
