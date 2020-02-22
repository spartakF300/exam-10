import React from 'react';
import FormNews from "../components/FormNews/FormNews";
import {postNews} from "../store/actions/actionsNews";
import {connect} from "react-redux";

const AddNews = (props) => {
    return (
        <div>
            <h1>Add NEWS</h1>
            <FormNews
                post={props.postNews}
                history={props.history}
            />
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        postNews: (data) => dispatch(postNews(data))
    }
};
export default connect(null,mapDispatchToProps) (AddNews);