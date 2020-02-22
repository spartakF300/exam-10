import {FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS} from "../actions/actionsComment";

const initialState = {
    comments: [],
    loading: false,
    error:null
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.data
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default commentsReducer;