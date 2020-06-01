import React, { Component } from 'react';

class AddFactPage extends Component {
    constructor() {
        super();
        this.state = {
            factData: {
                title: '',
                content: '',
            },
            invalidForm: true,
        }
    }

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddFact(this.state.factData);
      }
    
    handleChange = e => {
        const factData = {...this.state.factData, [e.target.name]: e.target.value};
        this.setState( {
            factData,
            invalidForm: !this.formRef.current.checkValidity()
        } )
    }

    render() {
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                    ref={this.formRef}
                >
                <title>Title</title>
                <textarea 
                    placeholder='Enter a Fact...'
                    name='newFact'
                    onChange={this.handleChange}
                />
                <button 
                    type='submit'
                    disabled={this.state.invalidForm}
                >POST</button>
                </form>
            </div>
        )
    }
}

export default AddFactPage;