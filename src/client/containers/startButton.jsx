import { connect } from 'react-redux';
import React, { Component } from 'react';

import { startUp, tick } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = (props) => {
  return {
    label: 'Start',
    intervalId: props.game.intervalId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleClickFn: (oldIntervalId) => {
      clearInterval(oldIntervalId);
      const intervalId = setInterval(() => {
        dispatch(tick());
      }, 1000);
      return dispatch(startUp(intervalId))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
