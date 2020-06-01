import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateFactPage extends Component {
    constructor() {
        super();
        this.state = {
            newFact: '',
            invalidForm: false,
        }
    }

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
                    
                    <button 
                        type='submit'
                        disabled={this.state.invalidForm}
                    >EDIT</button>
                    &nbsp;&nbsp;
                    <Link to='/'>CANCEL</Link>
                </form>
            </div>
            
        )
    }
}

export default UpdateFactPage;