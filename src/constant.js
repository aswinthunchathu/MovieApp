import axios from 'axios';

const API_KEY = '6c3a2d45';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const API = axios.create({
    baseURL: BASE_URL
});

export const actionType = {
    API_REQUEST : '[API_REQUEST]',
    FETCH_SEARCH_RESULT : '[SEARCH RESULT] Fetch',
    FETCH_SEARCH_RESULT_SUCCESS : '[SEARCH RESULT] Fetch Success',
    FETCH_SEARCH_RESULT_ERROR : '[SEARCH RESULT] Fetch Error',

    FETCH_FEATURED_MOVIES : '[FEATURED_MOVIES] Fetch',
    FETCH_FEATURED_MOVIES_SUCCESS : '[FEATURED_MOVIES] Fetch Success',
    FETCH_FEATURED_MOVIES_ERROR : '[FEATURED_MOVIES] Fetch Error',
}


export const SESSION_KEY_FEATURED_MOVIES = 'SK_FEATURED_MOVIES';
export const serverRequestContent = (key, plot = 'short') => API.get(`${BASE_URL}t=${key}&plot=${plot}`);

export const FEATURED_MOVIES = ['Bridge of Spies', 'A Space Odyssey'];
export const PLOT_LIST = [{ key: 0, value: 'Short' }, { key: 1, value: 'Full' }];