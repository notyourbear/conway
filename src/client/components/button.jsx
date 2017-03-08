import React, { PropTypes } from 'react';

const Button = ({label, handleClickFn}) => <button onClick={handleClickFn}>{label}</button>

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClickFn: PropTypes.func.isRequired,
};

export default Button;
