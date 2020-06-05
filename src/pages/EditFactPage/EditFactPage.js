import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditFactPage extends Component {
    state = {
        factData: this.props.location.state.newFact,
        invalidForm: false,
        idx: this.props.location.idx
    };
   
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateFact(this.state.factData, this.state.idx, this.props.location.state.newFact._id);
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
                <h1>Edit Fact</h1>
                <form onSubmit={this.handleSubmit} ref={this.formRef}>
                    <div className='form-group'>
                        <label>Fact Title:</label>
                        <textarea 
                            placeholder='Enter a title...'
                            name='title'
                            onChange={this.handleChange}
                            className='form-control'
                            value={this.state.factData.title}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Fact Content:</label>
                        <textarea 
                            placeholder='Enter a Fact...'
                            name='content'
                            onChange={this.handleChange}
                            className='form-control'
                            value={this.state.factData.content}
                        />
                    </div>
                    <button type='submit' disabled={this.state.invalidForm}>
                        SAVE FACT
                    </button>
                    &nbsp;&nbsp;
                    <Link to='/'>CANCEL</Link>
                </form>
            </div>
        )
    }
}

export default EditFactPage;