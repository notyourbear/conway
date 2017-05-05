import React, { PropTypes } from 'react';

const style = {
  background: 'transparent',
  fontFamily: 'Architects Daughter',
  padding:' .25rem .35rem',
  margin: '-1rem 1rem 0',
  transition: 'all .5s ease',
  color: '#41403E',
  fontSize: '1.15rem',
  letterSpacing: '1px',
  outline: 'none',
  boxShadow: '2px 2px 2px 10px hsla(0,0%,0%,.2)',
  borderRadius: '220px 25px 255px 15px/15px 225px 25px 220px',
  cursor: 'pointer',
  border: '0px solid #41403E',
}

const Button = ({label, intervalId, handleClickFn}) => <button style={style} onClick={handleClickFn.bind(this, intervalId)}>{label}</button>

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClickFn: PropTypes.func.isRequired,
};

export default Button;
