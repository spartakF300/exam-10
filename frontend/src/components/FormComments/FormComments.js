import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class FormComments extends Component {
    state = {
        author: '',
        message: '',
    };


    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };



    onSubmitHandler = (e) => {
        e.preventDefault();

        this.props.postComments({id: this.props.id, author:this.state.author,message: this.state.message},this.props.id)

    };
    render() {
        return (
            <Form onSubmit={this.onSubmitHandler} className='newsForm'>
                <FormGroup>
                    <Label for="author">author</Label>
                    <Input  type="text" name="author" value={this.state.author} id="author"  onChange={this.onChangeHandler} />
                </FormGroup>

                <FormGroup>
                    <Label for="message" >message</Label>
                    <Input required={this.state.message.length < 1} type="textarea" name="message" value={this.state.message} id="message" onChange={this.onChangeHandler} />
                </FormGroup>

                <FormGroup>
                    <Button   type="submit" color="primary">ADD comments</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default FormComments;