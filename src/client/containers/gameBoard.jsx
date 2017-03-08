import { connect } from 'react-redux';
import { changeState } from '../actions/options';

import Board from '../components/board';

const mapStateToProps = (state) => {
  return { board: state.game.board }
}

const mapDispatchToProps = (dispatch) => ({
  handleClickFn: (location) => { dispatch(changeState(location)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
