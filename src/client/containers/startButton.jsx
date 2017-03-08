import { connect } from 'react-redux';

import { startUp } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = () => {
  return {
    label: 'Start',
  }
};

const mapDispatchToProps = dispatch => ({
  handleClickFn: () => { dispatch(startUp()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
