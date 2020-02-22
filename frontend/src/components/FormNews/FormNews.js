import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


class FormNews extends Component {
    state = {
           title: '',
            description: '',
            image: null
    };


    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    filesHandler = (e) => {

        this.setState({[e.target.name]: e.target.files[0]})
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

       this.props.post(formData);
       this.props.history.push('/');
        console.log('submit')

    };
    render() {
        return (
            <Form onSubmit={this.onSubmitHandler} className='newsForm'>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" value={this.state.title} id="title"  onChange={this.onChangeHandler} />
                </FormGroup>

                <FormGroup>
                    <Label for="description" >Description</Label>
                    <Input  type="textarea" name="description" value={this.state.description} id="description" onChange={this.onChangeHandler} />
                </FormGroup>

                <FormGroup>
                    <Label for="image">News Image</Label>
                    <Input
                        type="file"
                        name="image" id="image"
                        onChange={this.filesHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Button  type="submit" color="primary">ADD NEWS</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default FormNews;