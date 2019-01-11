import { combineReducers } from 'redux';

import search from './containerComponent/search-result.container/reducer';
import featuredMovie from './containerComponent/featured-movie.container/reducer';

const rootReducer = combineReducers({
    search,
    featuredMovie
});

export default rootReducer;