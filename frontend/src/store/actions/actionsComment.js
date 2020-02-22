import axiosApi from "../../axiosApi";






export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';


export const request = ()=>{
    return{type:FETCH_COMMENTS_REQUEST}
};
export const commentsRequest = (data)=>{
    return{type:FETCH_COMMENTS_SUCCESS,data}
};

export const requestError =(err)=>{
    return{ type:FETCH_COMMENTS_FAILURE,err}
};
export const getComments = (id)=> {
    return async (dispatch) => {
        try {
            dispatch(request());
            const response = await axiosApi.get('/comments/'+id);
            dispatch(commentsRequest(response.data))

        } catch (e) {
            dispatch(requestError(e))
        }
    }
};
export const postComments = (data,id)=>{
    return async (dispatch)=>{
        try {
            dispatch(request());
            await axiosApi.post('/comments',data);
            dispatch(getComments(id))
        } catch (e) {
            dispatch(requestError(e))

        }
    }
};
export const removeComments = (id,newsId) => {
    return async dispatch => {
        try{
            await  axiosApi.delete('/comments/'+ id);
            dispatch(getComments(newsId))
        } catch (e) {
            dispatch(requestError(e))
        }

    }
};