import React, { PropTypes } from 'react';

const Board = ({board, handleClickFn}) => {
  const rows = board.map((col, i) => {
    const spans = col.map((piece, y) => {
      let classNames = 'piece';
      if(piece) classNames += ' alive';
      return <span className={classNames} onClick={handleClickFn} key={y}></span>;
    });
    return <div className='row' key={i}>{spans}</div>;
  });


  return (
    <div className='gameBoard'>
      { rows }
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  handleClickFn: PropTypes.func.isRequired
}

export default Board;
