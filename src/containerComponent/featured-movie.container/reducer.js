/*
    This reducer holds data related to the featured movies.
    fetching: boolean -> flag to check if data is fetching or not
    fectched: boolean -> flag to check if data is fetched or not
    data: Array -> Array containing the featured movies
    error: object -> error on fetching,
*/

import {actionType} from '../../constant';

const featuredMovie = (

    state = {
        fetching: false,
        fetched: false,
        data : [],
        error: null
    }, action

) => {
    switch (action.type) {
        case actionType.FETCH_FEATURED_MOVIES : {
            return {
                ...state,
                fetching : true
            }
        }
        case actionType.FETCH_FEATURED_MOVIES_SUCCESS : {
            return {
                ...state,
                fetching : false,
                fetched : true,
                data : action.payload,
            }
        }
        case actionType.FETCH_FEATURED_MOVIES_ERROR : {
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

export default featuredMovie;