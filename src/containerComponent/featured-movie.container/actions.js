
import { actionType, serverRequestContent, SESSION_KEY_FEATURED_MOVIES } from '../../constant';
import { cachingDecorator } from '../../util';
/*
  This methods fetch movie from the API
  @param : key : string - featured movie title
  return : object
 */

export const fetchResult = (key) => (dispatch) => {
  dispatch({ type: actionType.FETCH_FEATURED_MOVIES });

  getFeaturedMovies(key).then(
    res => {
      dispatch({ type: actionType.FETCH_FEATURED_MOVIES_SUCCESS, payload: res });
    }
  );
}

const getFeaturedMovies = async (list) => {
  let movies = [];
  let result;
  for (let movie of list) {
    try {
      //caching API
      result = await cachingDecorator(serverRequestContent, SESSION_KEY_FEATURED_MOVIES)(movie, 'full');
      if(result.data.Response !== "False"){
        movies.push(result.data);
      }
    } catch{

    }
  }
  return movies;
}

