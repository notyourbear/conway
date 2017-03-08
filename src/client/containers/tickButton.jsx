import { connect } from 'react-redux';

import { tick } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = () => {
  return {
    label: 'Next Tick',
  }
};

const mapDispatchToProps = dispatch => ({
  handleClickFn: () => { dispatch(tick()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
