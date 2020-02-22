import React, {Component} from 'react';
import {connect} from "react-redux";
import {getNews, removeNews} from "../../store/actions/actionsNews";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import './PageNews.css'

class PageNews extends Component {
    componentDidMount() {
        this.props.getNews()
    }

    render() {
        return (
            <div>
                {this.props.news && this.props.news.map((item) => {
                    return (
                        <div className="newsWrapp" key={item.id}>
                            {item.image !== 'null' ?
                                <img style={{width: '100px'}} src={'http://localhost:8000/uploads/' + item.image}
                                     alt={item.title}/> : null}
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{new Date(item.datetime).toLocaleString()}</p>
                            <Button tag={Link} to={"news/" + item.id}>Read more</Button>{' '}
                            <Button
                                color="danger"
                                onClick={() => this.props.removeNews(item.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => dispatch(getNews()),
        removeNews: (id) => dispatch(removeNews(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PageNews);