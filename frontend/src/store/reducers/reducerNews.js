import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_POST_SUCCESS} from "../actions/actionsNews";

const initialState = {
    news: [],
    post: null,
    loading: false,

};
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST: {
            return {...state, loading: true};
        }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news:action.data
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                post:action.data,
                loading: false
            };



        default:
            return state;
    }
};

export default newsReducer;