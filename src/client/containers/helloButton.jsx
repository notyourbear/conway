import { connect } from 'react-redux';

import { sayHello } from '../actions/hello';
import Button from '../components/button';

const mapStateToProps = () => ({
  label: 'Say hello',
});

const mapDispatchToProps = dispatch => ({
  handleClickFn: () => { dispatch(sayHello('Hello!')) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
