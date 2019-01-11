import { connect } from 'react-redux';
import * as actions from './actions';

import SerachResults from '../../presentationalComponent/serach-results.pc';

//map state supplied by redux to props
const mapStateToProps = (state, ownProps) => ({
    fetching : state.search.fetching,
    fetched : state.search.fetched,
    data: state.search.data,
    error : state.search.error,
});

//map thunk actions with props
const mapDispatchToProps = (dispatch) => ({
  fetchResult: (key, plot) => dispatch(actions.fetchResult(key, plot))
});

export default connect(mapStateToProps, mapDispatchToProps)(SerachResults);

