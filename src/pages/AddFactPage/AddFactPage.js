import React, { Component } from 'react';

class AddFactPage extends Component {
    constructor() {
        super();
        this.state = {newFact: '',}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        factService.addFact(this.state.newFact);
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
                <title>{fact.title}</title>
                <textarea 
                    placeholder='Enter a Fact...'
                    name='newFact'
                    onChange={props.handleChange}
                />
                <button type='submit'>POST</button>
                </form>
            </div>
        )
    }
}

export default AddFactPage;