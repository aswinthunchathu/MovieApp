/*
    This reducer holds data related to the current movie search.
    fetching: boolean -> flag to check if data is fetching or not
    fectched: boolean -> flag to check if data is fetched or not
    data: object -> object containing the searched movie details
    error: object -> error on fetching,
*/

import {actionType} from '../../constant';

const search = (

    state = {
        fetching: false,
        fetched: false,
        data : {},
        error: null
    }, action

) => {
    switch (action.type) {
        case actionType.FETCH_SEARCH_RESULT : {
            return {
                ...state,
                fetching : true,
                error : null
            }
        }
        case actionType.FETCH_SEARCH_RESULT_SUCCESS : {
            return {
                ...state,
                fetching : false,
                fetched : true,
                data : action.payload,
            }
        }
        case actionType.FETCH_SEARCH_RESULT_ERROR : {
            return {
                ...state,
                fetching : false,
                fetched : false,
                error : action.error
            }
        }
        default:
            return state;
    }
}

export default search;