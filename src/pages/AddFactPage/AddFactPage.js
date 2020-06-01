import React, { Component } from 'react';

class AddFactPage extends Component {
    constructor() {
        super();
        this.state = {
            newFact: '',
        }
    }

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.factService.addFact(this.state.newFact);
      }
    
    handleChange = e => {
        this.setState( {
            [e.target.name]: e.target.value
        } )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <title>Title</title>
                <textarea 
                    placeholder='Enter a Fact...'
                    name='newFact'
                    onChange={this.handleChange}
                />
                <button type='submit'>POST</button>
                </form>
            </div>
        )
    }
}

export default AddFactPage;