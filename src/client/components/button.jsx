import React, { PropTypes } from 'react';

const Button = ({label, intervalId, handleClickFn}) => <button onClick={handleClickFn.bind(this, intervalId)}>{label}</button>

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClickFn: PropTypes.func.isRequired,
};

export default Button;
