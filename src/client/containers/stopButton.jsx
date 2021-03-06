import { connect } from 'react-redux';

import { stop } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = (props) => {
  return {
    label: 'Stop',
    intervalId: props.game.intervalId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleClickFn: (intervalId) => {
      clearInterval(intervalId);
      return dispatch(stop());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
