import axiosApi from "../../axiosApi";

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

 export const request = ()=>{
     return{type:FETCH_NEWS_REQUEST}
 };
 export const requestError =(err)=>{
     return{ type:FETCH_NEWS_FAILURE,err}
 };

 export const requestSuccess = (data)=>{
   return {type:FETCH_NEWS_SUCCESS,data}
 };
export const postRequest = (data)=>{
    return{type:FETCH_POST_SUCCESS,data}
};
export const getNews = ()=> {
    return async (dispatch) => {
        try {
            dispatch(request());
            const response = await axiosApi.get('/news');
            dispatch(requestSuccess(response.data))

        } catch (e) {
            dispatch(requestError(e))
        }
    }
};
export const getPost = (id)=> {
    return async (dispatch) => {
        try {
            dispatch(request());
            const response = await axiosApi.get('/news/'+id);
            // console.log(response.data);
            dispatch(postRequest(response.data))

        } catch (e) {
            dispatch(requestError(e))
        }
    }
};

    export const postNews = (data)=>{
        return async (dispatch)=>{
            try {
                dispatch(request());
                await axiosApi.post('/news',data);
                console.log('post');
                dispatch(getNews())
            } catch (e) {
                dispatch(requestError(e))

            }
        }
    };
export const removeNews = (id) => {
    return async dispatch => {
        try{
            await  axiosApi.delete('/news/'+ id);
            dispatch(getNews())
        } catch (e) {
           dispatch(requestError(e))
        }

    }
};