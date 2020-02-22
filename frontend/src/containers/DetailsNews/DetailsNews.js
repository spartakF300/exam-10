import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPost} from "../../store/actions/actionsNews";
import {getComments, postComments, removeComments} from "../../store/actions/actionsComment";
import FormComments from "../../components/FormComments/FormComments";
import './DetailsNews.css'
import {Button} from "reactstrap";

class DetailsNews extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
        this.props.getComments(this.props.match.params.id)

    }

    render() {

        if (this.props.loading) {
            return <div>Loading...</div>
        }

        return (
            <>
                {this.props.post && <div className="news">
                    {this.props.post[0].image !== "null" ?
                        <img style={{width: '100px'}} src={'http://localhost:8000/uploads/' + this.props.post[0].image}
                             alt={this.props.post[0]}/> : null}
                    <h4>{this.props.post[0].title}</h4>
                    <p>{this.props.post[0].description}</p>
                    <p>{new Date(this.props.post[0].datetime).toLocaleString()}</p>

                </div>
                }
                <div className="comments">
                    <h2>Comments({this.props.comments.length})</h2>
                    {this.props.comments && this.props.comments.map((item) => {
                        return (
                            <div className="comment" key={item.id}>
                                <h3>Author: {item.author}</h3>
                                <p>Message: {item.message}</p>
                                <Button onClick={()=>this.props.removeComments(item.id,this.props.match.params.id)} >delete</Button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2>Add comments</h2>
                    <FormComments
                        postComments={this.props.postComments}
                        id={this.props.match.params.id}
                    />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
        post: state.news.post,
        loading: state.news.loading
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id) => dispatch(getPost(id)),
        getComments: (id) => dispatch(getComments(id)),
        postComments: (data,id) => dispatch(postComments(data,id)),
        removeComments: (id,newsId)=> dispatch(removeComments(id,newsId))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsNews);