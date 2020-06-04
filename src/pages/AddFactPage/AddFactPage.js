import React, { Component } from 'react';

class AddFactPage extends Component {
    state = {
        factData: {
            title: '',
            content: '',
        },
        invalidForm: true,
    };
   
    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        // const formData = this.state.factData;
        // console.log('user: ', this.props.user._id);
        // formData.user = this.props.user._id;
        // await this.setState({factData: formData});
        // console.log('sending the following fact to handleAddFact from AddFactPage inside handleSubmit');
        // console.log(formData);
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
                <h1>Add Fact</h1>
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
                        ADD FACT
                    </button>
                </form>
            </div>
        )
    }
}

export default AddFactPage;