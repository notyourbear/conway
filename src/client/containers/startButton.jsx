import { connect } from 'react-redux';

import { startUp, tick } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = () => {
  return {
    label: 'Start',
  }
};

const mapDispatchToProps = dispatch => {
  return ({ handleClickFn: () => { dispatch(startUp()) } });
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
