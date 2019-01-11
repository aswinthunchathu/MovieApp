import { actionType, serverRequestContent } from '../../constant';

/*
  This methods fetch movie from the API
  @param : key : string - serach key word
  @param : plot : string - selected plot value
  return : object
 */
 export const fetchResult = (key, plot) => (dispatch) => {
  dispatch({ type: actionType.FETCH_SEARCH_RESULT });

  serverRequestContent(key, plot).then(
    res => {
      if(res.data.Response === 'False'){
          dispatch({ type: actionType.FETCH_SEARCH_RESULT_ERROR, error: res.data.Error  })
      }else{
          dispatch({ type: actionType.FETCH_SEARCH_RESULT_SUCCESS, payload: res.data })
      }
    },
    err => {
        dispatch({ type: actionType.FETCH_SEARCH_RESULT_ERROR, error: err.error  })
    }
  )
}
