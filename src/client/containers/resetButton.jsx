import { connect } from 'react-redux';

import { reset } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = (props) => {
  return {
    label: 'Reset',
    intervalId: props.game.intervalId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleClickFn: (intervalId) => {
      clearInterval(intervalId);
      return dispatch(reset());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
