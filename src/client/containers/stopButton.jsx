import { connect } from 'react-redux';

import { stop } from '../actions/options';
import Button from '../components/button';

const mapStateToProps = () => {
  return {
    label: 'Stop',
  }
};

const mapDispatchToProps = dispatch => ({
  handleClickFn: () => { dispatch(stop()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
