import axios from 'axios';
import { actionType } from "../constant";

// This middleware care only for API calls
export const api = ({ dispatch }) => next => action => {

    if (action.type === actionType.API_REQUEST) {
        const { method, url, onSuccess, onError, onFetching } = action.meta;

        dispatch({ type: onFetching });

        axios({method, url}).then(
            res => {
                if(res.data.Response === 'False'){
                    dispatch({ type: onError, error: res.data.Error  })
                }else{
                    dispatch({ type: onSuccess, payload: res.data })
                }
            },
            err => {
                dispatch({ type: onError, error: err.error  })
            }
        );
    }

    return next(action)
};