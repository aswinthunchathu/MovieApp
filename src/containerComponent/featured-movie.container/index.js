import { connect } from 'react-redux';
import * as actions from './actions';

import FeaturedMovies from '../../presentationalComponent/featured-movies.pc';

//map state supplied by redux to props
const mapStateToProps = (state, ownProps) => ({
    fetching : state.featuredMovie.fetching,
    fetched : state.featuredMovie.fetched,
    data: state.featuredMovie.data,
    error : state.featuredMovie.error,
});

//map thunk actions with props
const mapDispatchToProps = (dispatch) => ({
  fetchResult: (key) => dispatch(actions.fetchResult(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMovies);

